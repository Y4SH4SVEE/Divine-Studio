"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Export", href: "/export" },
  { label: "Certifications", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#FCFAF8]">
      <div className="page-shell">
        <div className="grid h-[72px] grid-cols-[92px_1fr_auto] items-center gap-4 lg:grid-cols-[100px_1fr_200px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Divine India Exports logo.png"
              alt="Divine India Exports"
              width={84}
              height={84}
              className="h-auto w-[56px] object-contain sm:w-[68px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[11.5px] font-medium transition ${
                  isActive(item.href)
                    ? "text-[color:var(--color-olive)]"
                    : "text-[#6f746c] hover:text-[#2d3827]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              aria-label="Search catalogue"
              className="rounded-full p-2 text-[#434c3e] transition hover:bg-[#f6f1e6]"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link href="/contact" className="hidden rounded-full bg-[color:var(--color-primary)] px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-[color:var(--color-primary-hover)] sm:inline-flex sm:px-5 sm:py-2.5">
              Request Catalogue
            </Link>
            {/* Mobile hamburger */}
            <button
              className="rounded-full p-2 text-[#434c3e] transition hover:bg-[#f6f1e6] lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-[#FCFAF8] px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-[14px] font-medium transition ${
                isActive(item.href)
                  ? "text-[color:var(--color-olive)]"
                  : "text-[#6f746c] hover:text-[#2d3827]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 block w-full rounded-full bg-[color:var(--color-primary)] py-2.5 text-center text-[12px] font-semibold text-white transition hover:bg-[color:var(--color-primary-hover)]">
            Request Catalogue
          </Link>
        </div>
      )}
    </nav>
  );
}
