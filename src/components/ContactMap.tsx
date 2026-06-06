export default function ContactMap() {
  return (
    <section className="bg-white pb-18 sm:pb-24">
      <div className="page-shell">
        <div className="max-w-[920px]">
          <p className="eyebrow">Find Us</p>
          <h2 className="section-heading mt-4 text-[2rem] sm:text-[2.5rem]">
            Visit our{" "}
            <span className="text-[color:var(--color-olive)]">
              studio &amp; workshop
            </span>
          </h2>
          <p className="mt-4 text-[14px] leading-7 text-[#6f7769]">
            Ghaziabad, Uttar Pradesh — the home of our craft. Walk-ins by
            appointment.
          </p>

          <div className="mt-8 overflow-hidden rounded-[20px] border border-[#ece5d7] bg-[#e5e0d3] shadow-[0_18px_45px_rgba(46,53,37,0.08)]">
            <iframe
              title="Divine India Exports map"
              src="https://www.google.com/maps?q=Divine%20India%20Exports%20Sahibabad%20Ghaziabad&z=16&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
