import type { Metadata } from "next";
import CareerCulture from "@/components/CareerCulture";
import CareerOpenings from "@/components/CareerOpenings";

export const metadata: Metadata = {
  title: "Careers | Divine India Exports",
  description:
    "Explore careers at Divine India Exports and join a craft-led team building thoughtful products for global homes.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden pt-[72px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/CareerHero.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,35,32,0.5)_0%,rgba(34,35,32,0.12)_100%)]" />

        <div className="page-shell relative z-10 py-20 sm:py-24">
          <div className="max-w-[520px] py-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/78">
              Join the Team
            </p>
            <h1 className="mt-4 text-[3.2rem] font-extralight leading-[0.96] tracking-[-0.06em] text-white sm:text-[4.35rem]">
              Careers
            </h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-8 text-white/82">
              Build a craft-led brand alongside artisans, designers, and global
              partners.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-16">
            <div className="max-w-[420px]">
              <p className="eyebrow">Work With Us</p>
              <h2 className="section-heading mt-4">
                Build something{" "}
                <span className="text-[color:var(--color-olive)]">quietly beautiful</span>
              </h2>
            </div>

            <div className="max-w-[540px] space-y-5">
              <p className="body-copy">
                Divine India Exports is more than an export house it&apos;s a
                studio of makers, designers and storytellers united by a love
                for honest material and patient craft.
              </p>
              <p className="body-copy">
                Join us to help shape the next chapter of Indian design as it
                travels into homes, hospitality spaces and lifestyle stores
                across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CareerCulture />
      <CareerOpenings />
    </div>
  );
}
