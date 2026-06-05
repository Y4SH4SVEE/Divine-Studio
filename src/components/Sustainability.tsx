import Image from "next/image";

export default function Sustainability() {
  return (
    <section className="bg-[#FCFAF8] pb-[70px] pt-[46px] sm:pb-[76px]">
      <div className="mx-auto w-full max-w-[850px] px-5 sm:px-8 lg:px-0">
        <div className="grid items-center gap-6 lg:grid-cols-[360px_482px] lg:gap-0">
          <div className="relative z-10 mx-auto aspect-[1.34] w-full max-w-[360px] overflow-hidden rounded-[12px] bg-[#d8d0c1] shadow-[0_18px_36px_rgba(40,45,35,0.12)]">
            <Image
              src="/Divine India Exports manufacturing facility.png"
              alt="Divine India Exports manufacturing facility"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, calc(100vw - 40px)"
            />
          </div>

          <div className="rounded-[15px] bg-[#EEE4D0] px-8 py-12 sm:px-12 lg:-ml-[2px] lg:py-[54px] lg:pl-[132px] lg:pr-[46px]">
            <h2 className="text-[32px] font-light leading-[1.05] text-[#273021]">
              Renowned,
              <br />
              Responsible
              <br />
              and Sustainable.
            </h2>
            <p className="mt-[20px] max-w-[340px] text-[9px] leading-[1.6] text-[#5f685d]">
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
