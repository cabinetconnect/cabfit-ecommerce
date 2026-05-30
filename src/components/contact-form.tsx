"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="grid gap-4 border border-brand-border bg-white p-5 sm:p-6" onSubmit={onSubmit}>
      <div className="grid gap-2">
        <label className="text-sm font-black text-brand-charcoal" htmlFor="name">
          Name
        </label>
        <input
          className="min-h-12 rounded-md border border-brand-border bg-brand-neutral px-4 text-brand-charcoal"
          id="name"
          name="name"
          required
          type="text"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-black text-brand-charcoal" htmlFor="email">
          Email
        </label>
        <input
          className="min-h-12 rounded-md border border-brand-border bg-brand-neutral px-4 text-brand-charcoal"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-black text-brand-charcoal" htmlFor="message">
          Message
        </label>
        <textarea
          className="min-h-36 rounded-md border border-brand-border bg-brand-neutral px-4 py-3 text-brand-charcoal"
          id="message"
          name="message"
          required
        />
      </div>
      <Button className="w-full sm:w-fit" type="submit">
        Send Enquiry
      </Button>
      {submitted ? (
        <p className="text-sm font-semibold text-brand-charcoal">
          Thanks. CabFit will review your enquiry and respond as soon as possible.
        </p>
      ) : null}
    </form>
  );
}
