import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 -z-10 bg-lime-glow" aria-hidden="true" />
      <div className="text-center">
        <p className="display text-7xl text-lime-400 sm:text-8xl">404</p>
        <h1 className="mt-4 display text-3xl text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          That page doesn&rsquo;t exist. Let&rsquo;s get you back to building a
          sellable agency.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" size="lg">
            <Icon name="home" className="h-4 w-4" />
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
