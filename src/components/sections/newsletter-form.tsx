"use client";

import { Mail } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-14">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <SectionHeading title="Trade Updates Without The Noise" eyebrow="Newsletter">
          <p>
            Get CabFit product updates, install accessory releases, and shipping notices.
          </p>
        </SectionHeading>

        <form
          className="grid gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={onSubmit}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="relative">
            <Mail
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted"
              size={20}
            />
            <input
              className="min-h-12 w-full rounded-md border border-brand-border bg-brand-neutral py-3 pl-12 pr-4 text-brand-charcoal placeholder:text-brand-muted"
              id="newsletter-email"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <Button type="submit">Sign Up</Button>
          {submitted ? (
            <p className="text-sm font-semibold text-brand-charcoal sm:col-span-2">
              Thanks. You are on the CabFit update list.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}
