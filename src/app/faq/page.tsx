import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Who are CabFit products made for?",
    answer:
      "CabFit products are made for Australian cabinetmakers, cabinet installers, sole traders, owner operators, and small cabinetmaking businesses."
  },
  {
    question: "Do you ship Australia-wide?",
    answer:
      "Yes. CabFit ships cabinet installation accessories Australia-wide."
  },
  {
    question: "Can I use CabFit products on site?",
    answer:
      "Yes. CabFit accessories are designed for practical use in workshops and on cabinet installation sites."
  },
  {
    question: "How do I select the correct product variant?",
    answer:
      "Choose the variant that matches the install task shown on the product page. If you are unsure, contact CabFit before ordering."
  },
  {
    question: "How quickly are orders dispatched?",
    answer:
      "Orders are processed as quickly as possible. Final dispatch timing will be confirmed in your order communications."
  }
];

export const metadata: Metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about CabFit cabinetmaker jigs, cabinet installation aids, shipping, and product variants.",
  path: "/faq"
});

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="bg-brand-neutral py-10 sm:py-14">
      <Container>
        <SectionHeading title="FAQ" eyebrow="CabFit Support">
          <p>
            Common questions about CabFit cabinet installation accessories, variants, and shipping.
          </p>
        </SectionHeading>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c")
          }}
        />

        <div className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <details className="border border-brand-border bg-white p-5" key={faq.question}>
              <summary className="cursor-pointer text-lg font-black text-brand-charcoal">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-brand-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
