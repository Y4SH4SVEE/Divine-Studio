import Link from "next/link";
import { ArrowRight } from "lucide-react";

const openings = [
  {
    title: "Production Manager",
    details: "Saharanpur, India - Full-time",
  },
  {
    title: "Export Sales Executive",
    details: "Delhi NCR, India - Full-time",
  },
  {
    title: "Product Designer (Wood)",
    details: "Remote / India - Full-time",
  },
  {
    title: "QC Inspector",
    details: "Saharanpur, India - Full-time",
  },
];

export default function CareerOpenings() {
  return (
    <section className="bg-[#FCFAF8] pb-[170px] pt-[58px] sm:pb-[180px]">
      <div className="mx-auto w-full max-w-[728px] px-5 sm:px-8 lg:px-0">
        <div className="w-full max-w-[422px]">
          <h2 className="text-[25px] font-medium leading-none text-[#242b22]">
            Open positions
          </h2>

          <div className="mt-[22px] space-y-[12px]">
            {openings.map((opening) => (
              <article
                key={opening.title}
                className="flex min-h-[70px] max-w-[422px] items-center justify-between gap-6 rounded-[9px] border border-[#e8e2d9] bg-white px-[14px] py-[11px]"
              >
                <div>
                  <h3 className="text-[18px] font-light leading-none text-[#333b31]">
                    {opening.title}
                  </h3>
                  <p className="mt-[9px] text-[10px] leading-none text-[#697166]">
                    {opening.details}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-1 text-[6.5px] font-semibold uppercase leading-none tracking-[0.35em] text-[#61744f] transition hover:text-[#35452c]"
                >
                  Apply
                  <ArrowRight className="h-2 w-2" strokeWidth={1.8} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
