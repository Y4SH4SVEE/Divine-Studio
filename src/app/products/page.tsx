import type { Metadata } from "next";
import ProductHighlights from "@/components/ProductHighlights";
import ProductPageCta from "@/components/ProductPageCta";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata: Metadata = {
  title: "Products | Divine India Exports",
  description:
    "Explore handcrafted wooden home decor and lifestyle collections by Divine India Exports.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#f4ead6_0%,#f7efdf_100%)] pt-[120px]">
        <div className="page-shell py-18 sm:py-22">
          <div className="max-w-[520px]">
            <p className="eyebrow">Our Collections</p>
            <h1 className="section-heading mt-4 text-[3.35rem] sm:text-[4.5rem]">
              Products
            </h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-8 text-[#717b6a]">
              An editorial selection of handcrafted wooden home décor and
              lifestyle pieces — designed in India, made for the world.
            </p>
          </div>
        </div>
      </section>

      <ProductsGrid />
      <ProductHighlights />
      <ProductPageCta />
    </div>
  );
}
