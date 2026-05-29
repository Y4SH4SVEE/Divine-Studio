import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Capabilities() {
  return (
    <section className="py-12 sm:py-16">
      <div
        className="relative flex min-h-[520px] w-full overflow-hidden sm:min-h-[600px]"
        style={{
          backgroundImage:
            "url('/Hand-drawn furniture concept sketches.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle overlay — let the sketches show through */}
        <div className="absolute inset-0 bg-[#f5efe4]/40" />

        {/* Card — bottom-left, matching reference */}
        <div className="relative z-10 m-6 mt-auto flex max-w-[450px] flex-col justify-between rounded-[24px] bg-white/90 p-7 shadow-[0_16px_48px_rgba(34,39,27,0.14)] backdrop-blur-sm sm:m-12 sm:aspect-square sm:p-10 lg:ml-20">
          <div>
            <p className="eyebrow">In-House Capability</p>
            <h2 className="section-heading mt-4 text-[1.9rem] sm:text-[2.2rem]">
              Design, manufacturing &amp; packaging —{" "}
              <em className="italic">working</em> in unison.
            </h2>
            <p className="body-copy mt-4">
              We take your concepts and bring them to life with our product
              design and engineering teams that work together to cater to your
              ideas. Working with a wide range of materials and finishes, our
              in-house corrugation also provides packaging solutions to ship
              products with ease.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/export" className="button-dark inline-flex gap-2">
              Learn about our materials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
