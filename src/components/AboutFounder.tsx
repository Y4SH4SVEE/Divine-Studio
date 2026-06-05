import Image from "next/image";

export default function AboutFounder() {
  return (
    <section
      className="bg-[#FCFAF8]"
      style={{ paddingBottom: 72, paddingTop: 72 }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-8 lg:px-0"
        style={{ maxWidth: 853 }}
      >
        <div
          className="grid items-center"
          style={{ columnGap: 43, gridTemplateColumns: "396px 1fr" }}
        >
          <div
            className="relative mx-auto w-full overflow-hidden rounded-[12px] bg-white"
            style={{ height: 438 }}
          >
            <Image
              src="/PrachiGarg.png"
              alt="Prachi Garg founder illustration"
              fill
              className="object-contain object-center"
              sizes="396px"
              unoptimized
            />
          </div>

          <div style={{ maxWidth: 414 }}>
            <p
              className="font-semibold uppercase leading-none text-[#a0ac8e]"
              style={{ fontSize: 8, letterSpacing: "0.42em" }}
            >
              Founder
            </p>
            <h2
              className="font-light leading-none text-[#2a3127]"
              style={{
                fontSize: "clamp(34px, 3vw, 43px)",
                letterSpacing: "-0.03em",
                marginTop: 10,
              }}
            >
              Prachi Garg
            </h2>

            <p
              className="text-[#667062]"
              style={{ fontSize: 12, lineHeight: 1.55, marginTop: 24 }}
            >
              Divine India Exports was founded with one belief - that the
              objects we live with should carry meaning. From sourcing each
              plank of timber to overseeing the final coat of finish, Prachi
              leads a tight-knit team of designers, Product developers working
              with artisans.
            </p>
            <p
              className="text-[#667062]"
              style={{ fontSize: 12, lineHeight: 1.55, marginTop: 18 }}
            >
              Today, Divine India Exports ships to design-forward homes in over
              15+ countries, while remaining rooted in the workshops of
              Ghaziabad where it all began.
            </p>

            <div
              className="grid grid-cols-3"
              style={{ gap: 26, marginTop: 34 }}
            >
              <div>
                <p
                  className="font-light leading-none text-[#667e52]"
                  style={{ fontSize: 24 }}
                >
                  15+
                </p>
                <p
                  className="font-semibold uppercase leading-none text-[#98a08c]"
                  style={{ fontSize: 8, letterSpacing: "0.34em", marginTop: 8 }}
                >
                  Countries
                </p>
              </div>
              <div>
                <p
                  className="font-light leading-none text-[#667e52]"
                  style={{ fontSize: 24 }}
                >
                  1
                </p>
                <p
                  className="font-semibold uppercase leading-none text-[#98a08c]"
                  style={{ fontSize: 8, letterSpacing: "0.34em", marginTop: 8 }}
                >
                  Generations
                </p>
              </div>
              <div>
                <p
                  className="font-light leading-none text-[#667e52]"
                  style={{ fontSize: 24 }}
                >
                  100k+
                </p>
                <p
                  className="font-semibold uppercase leading-none text-[#98a08c]"
                  style={{ fontSize: 8, letterSpacing: "0.34em", marginTop: 8 }}
                >
                  Pieces / Months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
