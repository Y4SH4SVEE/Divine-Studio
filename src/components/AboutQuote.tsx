export default function AboutQuote() {
  return (
    <section className="bg-[#556C42] py-20 text-center sm:py-24">
      <div className="page-shell">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d7e3c9]">
          Founder&apos;s Vision
        </p>
        <blockquote
          className="mx-auto mt-5 max-w-[760px] text-[2.2rem] font-light leading-[1.22] tracking-[-0.01em] text-white sm:text-[2.6rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;A home is a quiet biography of the people who live in it. We
          make objects worthy of being part of that story — honest in material,
          generous in craft, and timeless in form.&rdquo;
        </blockquote>

        <div className="mx-auto mt-10 flex max-w-[420px] items-center justify-center gap-5 text-white/88">
          <span className="h-px w-12 bg-white/40" />
          <div>
            <p className="text-[18px]">Prachi Garg</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7e3c9]">
              Founder, Divine India Exports
            </p>
          </div>
          <span className="h-px w-12 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
