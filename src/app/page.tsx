import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import OurStory from "@/components/OurStory";
import Capabilities from "@/components/Capabilities";
import Sustainability from "@/components/Sustainability";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import ExportCta from "@/components/ExportCta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Collections />
      <OurStory />
      <Capabilities />
      <Sustainability />
      <Highlights />
      <Testimonials />
      <ExportCta />
    </div>
  );
}
