import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-20 sm:py-24">
      <div className="page-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-14">
          <div className="relative mx-auto aspect-[0.78] w-full max-w-[430px] overflow-hidden rounded-[24px] bg-[#d5d0c6]">
            <Image
              src="/Artisan at work.png"
              alt="Artisan crafting wooden furniture"
              fill
              className="object-cover grayscale"
            />
          </div>

          <div className="max-w-[520px]">
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading mt-4">
              Three generations of{" "}
              <em className="font-serif italic">woodworking,</em> one quiet
              philosophy.
            </h2>
            <p className="body-copy mt-5">
              From the workshops of Sahibabad, our master artisans shape
              responsibly sourced timber into pieces that bring warmth and
              intention to modern interiors. Every object is touched by hand —
              sanded, finished, and inspected — before it ever leaves our
              doors.
            </p>
            <Link href="/about" className="button-dark mt-8 inline-flex gap-2">
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
