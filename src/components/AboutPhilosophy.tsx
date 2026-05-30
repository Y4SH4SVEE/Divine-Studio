import Image from "next/image";
import {
  Compass,
  Leaf,
  Wrench,
} from "lucide-react";

const philosophyItems = [
  {
    title: "Made by Hand",
    description:
      "Every joinery, carving and finish passes through the hands of artisans whose families have shaped wood for generations.",
    icon: Wrench,
  },
  {
    title: "Design-Led",
    description:
      "Our in-house studio reads global interior currents, then distills them through Indian motif and material into pieces that age with grace.",
    icon: Compass,
  },
  {
    title: "Naturally Sourced",
    description:
      "FSC-aligned timber like Mango wood, Acacia wood, and more beauty drawn responsibly from the land it returns to.",
    icon: Leaf,
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="page-shell">
        <div className="max-w-[700px]">
          <p className="eyebrow">Philosophy</p>
          <h2
            className="mt-4 text-[2.4rem] font-light leading-[1.1] tracking-[-0.01em] text-[#1e2619] sm:text-[2.7rem]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Craft &amp; Design, in{" "}
            <span className=" text-[color:var(--color-olive)]">considered balance</span>
          </h2>
          <p className="body-copy mt-6 max-w-[620px]">
            A belief that material, maker and method must speak in one voice
            every grain of timber chosen with intent, every silhouette drawn
            with restraint.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">
          <div className="relative mx-auto aspect-[0.82] w-full max-w-[420px] overflow-hidden rounded-[18px] bg-[#d8d0c3]">
            <Image
              src="/Artisan at work.png"
              alt="Artisan shaping wood"
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="space-y-4">
            {philosophyItems.map(({ title, description, icon: Icon }) => (
              <article key={title} className="soft-card rounded-[18px] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1e9d8]">
                    <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
                  </div>
                  <div>
                    <h3 className="text-[1.2rem] font-medium tracking-[-0.03em] text-[#273221]">
                      {title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-[#727b6c]">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
