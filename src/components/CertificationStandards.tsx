import {
  BadgeCheck,
  ShieldCheck,
  Trees,
} from "lucide-react";

const standards = [
  {
    title: "ISO 14001:2015",
    description:
      "Certified quality management system ensuring consistent product excellence.",
    icon: ShieldCheck,
  },
  {
    title: "FSC Compliance",
    description:
      "Forest Stewardship Council certification for forest management or Chain of Custody (CoC) to trace materials.",
    icon: Trees,
  },
  {
    title: "SEDEX Membership",
    description:
      "Committed to responsible and ethical business practices across our supply chain.",
    icon: BadgeCheck,
  },
];

export default function CertificationStandards() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-3">
          {standards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="soft-card min-h-[240px] rounded-[18px] px-8 py-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e9d8]">
                <Icon className="h-5 w-5 text-[color:var(--color-olive)]" />
              </div>
              <h2 className="mt-8 text-[1.48rem] font-medium tracking-[-0.03em] text-[#273221]">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-[240px] text-[12px] leading-7 text-[#727b6c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
