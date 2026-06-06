import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Export", href: "/export" },
  { label: "About", href: "/about" },
];

const companyLinks = [
  { label: "Certifications", href: "/certifications" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#556C42] pb-5 pt-10 text-[#edf0e6]">
      <div className="page-shell">
        <div className="grid gap-12 rounded-[34px] bg-[#556C42] px-3 py-6 md:grid-cols-[1.45fr_0.7fr_0.7fr] md:px-4">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="mb-6 flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-2xl bg-white/95">
              <Image
                src="/Divine India Exports logo.png"
                alt="Divine India Exports"
                width={60}
                height={60}
                className="h-auto w-[52px] object-contain"
              />
            </div>
            <p className="max-w-xs text-[12px] leading-6 text-white/72">
              Crafting timeless wooden home décor and lifestyle pieces for
              modern living spaces — exported to discerning homes worldwide.
            </p>

            <div className="mt-6 space-y-3 text-[12px] text-white/84">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  A-33/22A Site-IV, Industrial Area Sahibabad, Ghaziabad, Uttar
                  Pradesh, India 201010
                </span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+91 8527174307</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>prachi@divineindiaexports.com</span>
              </div>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#dce6cc]">
              Explore
            </p>
            <div className="space-y-3 text-[13px] text-white/80">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#dce6cc]">
              Company
            </p>
            <div className="space-y-3 text-[13px] text-white/80">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-[11px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Divine India Exports. All rights reserved.</p>
          <p>Handcrafted in India · Shipped Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
