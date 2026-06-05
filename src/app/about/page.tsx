import type { Metadata } from "next";
import Image from "next/image";
import AboutFounder from "@/components/AboutFounder";
import AboutMission from "@/components/AboutMission";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import AboutQuote from "@/components/AboutQuote";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "About | Divine India Exports",
  description:
    "Learn about the story, values, and craftsmanship philosophy behind Divine India Exports.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFAF8]">
      <section
        className="relative overflow-hidden bg-[#F4F1EC]"
        style={{ height: 365, marginTop: 72 }}
      >
        <Image
          src="/Gradient.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(252, 250, 248, 0.30) 0%, rgba(252, 250, 248, 0.18) 38%, rgba(252, 250, 248, 0.08) 100%)",
          }}
        />

        <div
          className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-0"
          style={{ maxWidth: 836, height: "100%", paddingTop: 91 }}
        >
          <div>
            <p
              className="font-semibold uppercase text-[#293222]"
              style={{ fontSize: 8, letterSpacing: "0.42em" }}
            >
              Our House
            </p>
            <h1
              className="font-light leading-none text-[#1f271a]"
              style={{
                marginTop: 15,
                fontSize: "clamp(34px, 3.74vw, 49px)",
                letterSpacing: "-0.025em",
              }}
            >
              About Divine India Exports
            </h1>
            <p
              className="font-medium leading-none text-[#20261d]"
              style={{ marginTop: 17, fontSize: 12 }}
            >
              A family-run export house with a quiet obsession for
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <AboutFounder />
      <AboutMission />
      <AboutQuote />
      <AboutPhilosophy />
      <AboutValues />
    </div>
  );
}
