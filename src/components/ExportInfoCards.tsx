import { Boxes, Cuboid, Globe2, ShipWheel } from "lucide-react";

const exportCards = [
  {
    title: "Wholesale process",
    description:
      "Discovery -> catalogue -> sampling -> PO -> production -> QC -> dispatch. Transparent at every stage.",
    icon: Boxes,
  },
  {
    title: "MOQ details",
    description:
      "Flexible MOQs from 250 units per SKU for wholesales importer and 1000 pcs retails for buyers.",
    icon: Cuboid,
  },
  {
    title: "Logistics capabilities",
    description:
      "FOB, CIF & door-to-door. Dedicated export documentation and freight partners.",
    icon: ShipWheel,
  },
  {
    title: "Countries served",
    description: "USA, Germany, Netherland, Sweden and 15+ more markets.",
    icon: Globe2,
  },
];

export default function ExportInfoCards() {
  return (
    <section className="bg-[#FCFAF8] py-[66px]">
      <div className="mx-auto w-full max-w-[844px] px-5 sm:px-8 lg:px-0">
        <div className="grid gap-x-[32px] gap-y-[32px] md:grid-cols-2">
          {exportCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="min-h-[154px] rounded-[10px] border border-[#e8e2d9] bg-white px-[28px] py-[24px] shadow-[0_14px_28px_rgba(58,50,38,0.06)]"
            >
              <Icon className="h-4 w-4 text-[#556C42]" strokeWidth={1.7} />
              <h2 className="mt-[20px] text-[18px] font-medium leading-none text-[#283026]">
                {title}
              </h2>
              <p className="mt-[12px] max-w-[335px] text-[10px] leading-[1.65] text-[#667064]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
