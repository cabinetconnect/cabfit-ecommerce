import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-brand-neutral py-14">
      <Container>
        <div className="mx-auto max-w-2xl border border-brand-border bg-white p-8 text-center">
          <p className="text-sm font-black uppercase text-brand-gold">404</p>
          <h1 className="mt-3 text-3xl font-black text-brand-charcoal">
            Page Not Found
          </h1>
          <p className="mt-4 text-brand-muted">
            The CabFit page you are looking for does not exist.
          </p>
          <LinkButton className="mt-7" href="/shop" variant="dark">
            Shop Products
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
