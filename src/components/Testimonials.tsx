import { testimonialItems } from "@/data/testimonials";

const featuredTestimonials = testimonialItems.slice(0, 3);

export default function Testimonials() {
  return (
    <section className="mt-20 bg-[#556C42] py-16 text-[#edf0e6] sm:mt-24 sm:py-20">
      <div className="page-shell">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#cfddbc]">
          Trusted Worldwide
        </p>
        <h2 className="section-heading mt-4 max-w-[700px] text-[#edf0e6]">
          What our global partners say.
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[18px] border border-white/16 bg-white/5 p-7"
            >
              <p className="min-h-[132px] text-[15px] leading-8 text-white/86">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
                {testimonial.name}
              </p>
              <p className="mt-1 text-[12px] text-white/70">
                {testimonial.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
