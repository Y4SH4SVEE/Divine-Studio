import Image from "next/image";

const featurePoints = [
  "Sustainably Sourced Wood",
  "Handcrafted by Master Artisans",
  "Rigorous Quality Control",
  "Worldwide Shipping",
];

export default function ProductHighlights() {
  return (
    <section className="bg-[#fbf7ef] py-18 sm:py-24">
      <div className="page-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1fr]">
          <div className="relative mx-auto aspect-[1.25] w-full max-w-[500px] overflow-hidden rounded-[18px] bg-[#d9d2c4]">
            <Image
              src="/Craftsmanship.png"
              alt="Artisan finishing a wooden piece"
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="max-w-[460px]">
            <p className="eyebrow">Design Highlights</p>
            <h2 className="section-heading mt-4">
              Built with <em className="font-serif italic">intention.</em>
            </h2>

            <ul className="mt-8 space-y-4">
              {featurePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-[15px] text-[#68715e]"
                >
                  <span className="h-[3px] w-5 shrink-0 rounded-full bg-[color:var(--color-olive)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
