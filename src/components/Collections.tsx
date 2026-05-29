import Image from "next/image";
import Link from "next/link";
import { productItems } from "@/data/products";

export default function Collections() {
  const collections = productItems.slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <div className="page-shell">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="max-w-[580px]">
            <p className="eyebrow">The Collections</p>
            <h2 className="section-heading mt-4">
              Considered objects,{" "}
              <em className="font-serif italic">crafted to last.</em>
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-8 hidden text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--color-olive)] transition hover:text-[#2d3827] md:inline-flex"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-x-5 gap-y-10 md:grid-cols-3">
          {collections.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[0.88] overflow-hidden rounded-[20px] bg-[#ede7db]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-[1.36rem] font-semibold tracking-[-0.02em] text-[#273221]">
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
