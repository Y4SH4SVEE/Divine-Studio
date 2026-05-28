import type { Metadata } from "next";
import ExportInfoCards from "@/components/ExportInfoCards";
import ExportPartnerCta from "@/components/ExportPartnerCta";

export const metadata: Metadata = {
  title: "Export | Divine India Exports",
  description:
    "Wholesale and export partnerships with Divine India Exports for boutiques, distributors, and design-led retailers worldwide.",
};

export default function ExportPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden pt-[72px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/ExportHero.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,24,20,0.48)_0%,rgba(27,24,20,0.18)_100%)]" />

        <div className="page-shell relative z-10 py-20 sm:py-24">
          <div className="max-w-[540px] py-12 sm:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca374]">
              Wholesale &amp; Trade
            </p>
            <h1 className="mt-4 text-[3.3rem] font-extralight leading-[0.96] tracking-[-0.06em] text-white sm:text-[4.4rem]">
              Export Worldwide
            </h1>
            <p className="mt-5 max-w-[430px] text-[15px] leading-8 text-white/78">
              A trusted manufacturing partner for boutiques, distributors, and
              design-led retailers across 15+ countries.
            </p>
          </div>
        </div>
      </section>

      <ExportInfoCards />
      <ExportPartnerCta />
    </div>
  );
}
