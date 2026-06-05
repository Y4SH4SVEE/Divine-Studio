import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="bg-[#FCFAF8] py-[88px] sm:py-[96px]">
      <div className="mx-auto w-full max-w-[850px] px-5 sm:px-8 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[394px_1fr] lg:gap-[54px]">
          <div className="relative mx-auto aspect-[0.8] w-full max-w-[394px] overflow-hidden rounded-[8px] bg-[#d5d0c6]">
            <Image
              src="/Artisan crafting wood.png"
              alt="Artisan crafting wooden furniture"
              fill
              className="object-cover grayscale"
              sizes="(min-width: 1024px) 394px, calc(100vw - 40px)"
            />
          </div>

          <div className="max-w-[405px] lg:pt-2">
            <p className="text-[7px] font-semibold uppercase leading-none tracking-[0.48em] text-[#99a887]">
              Our Story
            </p>
            <h2 className="mt-4 text-[34px] font-light leading-[1.08] text-[#273021]">
              One Quiet Philosophy.
            </h2>
            <p className="mt-[18px] max-w-[390px] text-[10px] leading-[1.78] text-[#657064]">
              From the workshops of Sahibabad, our master artisans shape
              responsibly sourced timber into pieces that bring warmth and
              intention to modern interiors. Every object is touched by hand -
              sanded, finished, and inspected - before it ever leaves our doors.
            </p>
            <Link
              href="/about"
              className="mt-[28px] inline-flex h-8 items-center justify-center rounded-md bg-[#242A1D] px-6 text-[10px] font-medium text-white transition hover:bg-[#1f271a]"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
