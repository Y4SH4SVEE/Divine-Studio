import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Capabilities() {
  return (
    <section className="py-0">
      <div
        className="relative flex min-h-[500px] w-full overflow-hidden sm:min-h-[520px]"
        style={{
          backgroundImage:
            "url('/Hand-drawn furniture concept sketches.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="page-shell relative z-10 flex min-h-[500px] items-center sm:min-h-[520px]">
          <div className="w-full max-w-[442px] rounded-[18px] bg-white/76 px-8 py-7 shadow-[0_18px_48px_rgba(40,45,35,0.12)] backdrop-blur-[3px] sm:px-10 lg:ml-[120px]">
            <p className="text-[8px] font-semibold uppercase leading-none tracking-[0.42em] text-[#8d9a7e]">
              In-House Capability
            </p>
            <h2 className="mt-4 max-w-[390px] text-[1.85rem] font-light leading-[1.06] text-[#22291f] sm:text-[1.9rem]">
              Design, manufacturing <br className="hidden sm:block" />
              &amp; packaging &mdash; working <br className="hidden sm:block" />
              in unison.
            </h2>
            <p className="mt-[18px] max-w-[390px] text-[10px] leading-[1.62] text-[#60675d]">
              We take your concepts and bring them to life with our product
              design and engineering teams that work together to cater to your
              ideas. Working with a wide range of materials and finishes, our
              in-house corrugation also provides packaging solutions to ship
              products with ease.
            </p>
            <Link
              href="/export"
              className="mt-6 inline-flex h-8 items-center justify-center gap-4 rounded-md bg-[#20291b] px-5 text-[10px] font-medium text-white transition hover:bg-[#151c11]"
            >
              Learn about our materials
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
