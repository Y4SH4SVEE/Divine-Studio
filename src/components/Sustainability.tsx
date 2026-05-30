import Image from "next/image";
import Link from "next/link";

export default function Sustainability() {
  return (
    <section className="pb-20 pt-10 sm:pb-24">
      <div className="page-shell">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto aspect-[0.98] w-full max-w-[430px] overflow-hidden rounded-[26px] bg-[#d8d0c1] shadow-[0_18px_50px_rgba(35,43,29,0.15)]">
            <Image
              src="/Divine India Exports manufacturing facility.png"
              alt="Divine India Exports manufacturing facility"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-[30px] bg-[color:var(--color-sand)] px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
            <h2 className="section-heading max-w-[420px]">
              Renowned, Responsible <br/>and Sustainable.
            </h2>
            <p className="body-copy mt-6 max-w-[460px]">
              Our reputation for quality and craftsmanship has earned
              recognition from the Export Promotion Council for Handicrafts,
              India (EPCH). Our in-house manufacturing facility provides strict
              control over quality and reliability, while our practices reduce
              environmental impact without compromising performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
