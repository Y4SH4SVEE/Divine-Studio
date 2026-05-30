import { Quote } from "lucide-react";
import { testimonialItems } from "@/data/testimonials";

export default function TestimonialGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonialItems.map((testimonial) => (
            <article
              key={testimonial.name}
              className="soft-card min-h-[248px] rounded-[18px] p-6"
            >
              <Quote className="h-5 w-5 text-[#d8c6a1]" />
              <p className="mt-6 min-h-[108px] text-[15px] leading-6 text-[#60695c]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3a4333]">
                {testimonial.name}
              </p>
              <p className="mt-1 text-[12px] text-[#757d6f]">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
