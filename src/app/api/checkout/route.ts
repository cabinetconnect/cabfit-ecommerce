import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { absoluteUrl } from "@/lib/format";
import { getProductById } from "@/lib/products";
import type { CheckoutLineInput } from "@/types/cart";

export const runtime = "nodejs";

const SHIPPING_CENTS = 1495;

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured. Add STRIPE_SECRET_KEY to your environment." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { items?: CheckoutLineInput[] };
    const items = body.items ?? [];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const item of items) {
      const product = getProductById(item.productId);

      if (!product) {
        return NextResponse.json(
          { error: "One of the products in your cart is no longer available." },
          { status: 400 }
        );
      }

      const variant = product.variants.find(
        (productVariant) => productVariant.id === item.variantId
      );

      if (!variant) {
        return NextResponse.json(
          { error: `Select a valid variant for ${product.name}.` },
          { status: 400 }
        );
      }

      if (!Number.isFinite(item.quantity)) {
        return NextResponse.json(
          { error: `Select a valid quantity for ${product.name}.` },
          { status: 400 }
        );
      }

      const quantity = Math.min(Math.max(Math.floor(item.quantity), 1), 20);
      const productName =
        variant.name === "Standard"
          ? product.name
          : `${product.name} - ${variant.name}`;

      lineItems.push({
        quantity,
        price_data: {
          currency: "aud",
          unit_amount: product.priceCents,
          product_data: {
            name: productName,
            description: product.description,
            images: [absoluteUrl(product.images[0])],
            metadata: {
              productId: product.id,
              variantId: variant.id
            }
          }
        }
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cabfit.com.au";
    const checkoutBaseUrl = siteUrl.replace(/\/$/, "");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${checkoutBaseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${checkoutBaseUrl}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ["AU"]
      },
      phone_number_collection: {
        enabled: true
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Australia-wide standard shipping",
            fixed_amount: {
              amount: SHIPPING_CENTS,
              currency: "aud"
            },
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 3
              },
              maximum: {
                unit: "business_day",
                value: 8
              }
            }
          }
        }
      ],
      metadata: {
        brand: "CabFit",
        channel: "website"
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error", error);

    return NextResponse.json(
      { error: "Checkout could not be started. Please try again." },
      { status: 500 }
    );
  }
}
