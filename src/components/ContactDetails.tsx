"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactItems = [
  {
    label: "Studio",
    value:
      "A-33/22A Site-IV, Industrial Area Sahibabad, Ghaziabad, Uttar Pradesh, India 201010",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+91 8527174307",
    icon: Phone,
  },
  {
    label: "Email",
    value: "prachi@divineindiaexports.com",
    icon: Mail,
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactDetails() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#e2dbd0] bg-[#faf7f2] px-4 py-3 text-[14px] text-[#3a4333] placeholder-[#b0b8a8] outline-none transition focus:border-[#8baa7a] focus:ring-2 focus:ring-[#8baa7a]/20";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left column — contact info */}
          <div>
            <h2 className="text-[2rem] font-light tracking-[-0.02em] text-[#273221] sm:text-[2.6rem]">
              Let&apos;s talk.
            </h2>

            <div className="mt-8 space-y-6">
              {contactItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1e9d8]">
                    <Icon className="h-4 w-4 text-[color:var(--color-olive)]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9aa18f]">
                      {label}
                    </p>
                    <p className="mt-1 text-[14px] leading-7 text-[#4f574b]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — contact form */}
          <div>
            <h2 className="text-[2rem] font-light tracking-[-0.02em] text-[#273221] sm:text-[2.6rem]">
              Send a message.
            </h2>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Wholesale enquiry / Catalogue request"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9aa18f]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-[13px] font-medium text-green-700">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  Message sent! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="button-primary mt-2 flex w-full items-center justify-center gap-2 sm:w-auto sm:min-w-[160px] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
