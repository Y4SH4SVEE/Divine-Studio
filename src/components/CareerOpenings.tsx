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
    <section
      className="bg-[#FCFAF8]"
      style={{ minHeight: 720, paddingTop: 84 }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-8 lg:px-0"
        style={{ maxWidth: 968 }}
      >
        <div className="w-full" style={{ maxWidth: 564 }}>
          <h2
            className="font-medium leading-none text-[#242b22]"
            style={{ fontSize: 25 }}
          >
            Open positions
          </h2>

          <div style={{ marginTop: 28 }}>
            {openings.map((opening) => (
              <article
                key={opening.title}
                className="flex items-center justify-between gap-6 rounded-[9px] border border-[#e8e2d9] bg-white"
                style={{
                  marginTop: opening.title === openings[0].title ? 0 : 13,
                  minHeight: 80,
                  padding: "18px 20px",
                }}
              >
                <div>
                  <h3
                    className="font-light leading-none text-[#333b31]"
                    style={{ fontSize: 15 }}
                  >
                    {opening.title}
                  </h3>
                  <p
                    className="leading-none text-[#697166]"
                    style={{ fontSize: 10, marginTop: 10 }}
                  >
                    {opening.details}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-1 font-semibold uppercase leading-none text-[#61744f] transition hover:text-[#35452c]"
                  style={{ fontSize: 7, letterSpacing: "0.36em" }}
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
