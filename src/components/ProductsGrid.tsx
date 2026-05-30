import Image from "next/image";
import { productFilters, productItems } from "@/data/products";

export default function ProductsGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <h2 className="section-heading text-[2.3rem] sm:text-[2.9rem]">
              Explore our range
            </h2>
          </div>
          <p className="max-w-[380px] text-[13px] leading-6 text-[#7b846f]">
            Nine signature collections, refined across thousands of pieces.
            Filter by category tag below.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-1">
          {productFilters.map((filter, index) => (
            <button
              key={filter}
              className={
                index === 0
                  ? "rounded-full bg-[color:var(--color-olive)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                  : "rounded-full border border-[#ddd6c8] bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8b917f] transition hover:border-[#b9bea9] hover:text-[#59684a]"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {productItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[0.88] overflow-hidden rounded-[18px] bg-[#eee6d8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-[1.34rem] font-medium tracking-[-0.03em] text-[#273221]">
                {item.title}
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-[#7f8478]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
