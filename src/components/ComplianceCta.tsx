import Link from "next/link";

export default function ComplianceCta() {
  return (
    <>
      <section className="bg-[#556C42] py-18 text-center sm:py-24">
        <div className="page-shell">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d7e3c9]">
            Compliance &amp; Visits
          </p>
          <h2 className="mx-auto mt-4 max-w-[660px] text-[2.45rem] font-light leading-[1.05] tracking-[-0.05em] text-[#20281b] sm:text-[3.55rem]">
            Request our compliance documentation or schedule a factory visit.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[14px] leading-7 text-[#eef2e4]">
            We&apos;re happy to share certification copies, audit reports, and
            material safety documentation with verified buyers and partners.
          </p>
          <Link
            href="/contact"
            className="button-primary mt-8 inline-flex min-w-[120px]"
          >
            Get in touch
          </Link>
        </div>
      </section>
      <div aria-hidden className="h-16 bg-[#FCFAF8] sm:h-[86px]" />
    </>
  );
}
