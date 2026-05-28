import {
  Link,
  PackageCheck,
  Ship,
  Globe,
} from "lucide-react";

const exportCards = [
  {
    title: "Wholesale process",
    description:
      "Discovery → catalogue → sampling → PO → production → QC → dispatch. Transparent at every stage.",
    icon: Link,
  },
  {
    title: "MOQ details",
    description:
      "Flexible MOQs from 250 units per SKU for Holesales importer and 1000 pcs retails buyers.",
    icon: PackageCheck,
  },
  {
    title: "Logistics capabilities",
    description:
      "FOB, CIF & door-to-door. Dedicated export documentation and freight partners.",
    icon: Ship,
  },
  {
    title: "Countries served",
    description:
      "USA, Germany, Netherland, Sweden and 15+ more markets.",
    icon: Globe,
  },
];

export default function ExportInfoCards() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid gap-6 md:grid-cols-2">
          {exportCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="soft-card min-h-[172px] rounded-[18px] p-6 sm:p-8"
            >
              <Icon className="h-5 w-5 text-[#4c6a48]" />
              <h2 className="mt-4 text-xl font-medium tracking-[-0.01em] text-[#273221]">
                {title}
              </h2>
              <p className="mt-3 max-w-[420px] text-[13px] leading-7 text-[#727b6c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

