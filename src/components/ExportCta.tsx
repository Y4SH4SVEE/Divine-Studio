import Link from "next/link";

export default function ExportCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="mx-auto max-w-[820px] rounded-[30px] bg-[linear-gradient(135deg,#DCCBAC_45%,#FCFAF8_100%)] px-8 py-14 text-center shadow-[0_20px_50px_rgba(47,55,36,0.08)] sm:px-12">
          <p className="text-[#556C42]">Wholesale &amp; Export</p>
          <h2 className="section-heading mt-4">Interested in our products?</h2>
          <p className="mx-auto mt-4 max-w-[470px] text-[14px] leading-7 text-[#616B57]">
            Request our latest catalogue and explore wholesale opportunities
            with Divine India Exports.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button-primary min-w-[150px]">
              Request Catalogue
            </Link>
            <Link
              href="/contact"
              className="button-dark-product min-w-[126px] rounded-full px-8"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
