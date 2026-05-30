import {
  Flower2,
  MoveUpRight,
  Scale,
  UsersRound,
} from "lucide-react";

const cultureItems = [
  {
    title: "Meaningful Craft",
    description:
      "Shape objects that travel into considered homes around the world work that lingers far beyond the workshop.",
    icon: Flower2,
  },
  {
    title: "Room to Grow",
    description:
      "Mentorship from master artisans and designers, with clear pathways to lead your own briefs and collections.",
    icon: MoveUpRight,
  },
  {
    title: "Inclusive Studio",
    description:
      "A close-knit team where artisans, designers and exporters sit at one table every voice carries weight.",
    icon: UsersRound,
  },
  {
    title: "Considered Balance",
    description:
      "Sensible hours, real holidays and a calm studio rhythm, because good craft is never made in a hurry.",
    icon: Scale,
  },
];

export default function CareerCulture() {
  return (
    <section className="bg-[#F0F1E8] py-[68px] sm:py-[78px]">
      <div className="mx-auto w-full max-w-[728px] px-5 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[470px] text-center">
          <p className="text-[8px] font-semibold uppercase leading-none tracking-[0.42em] text-[#9baa85]">
            Culture
          </p>
          <h2 className="mt-3 text-[25px] font-light leading-[1.12] text-[#30382d] sm:text-[28px]">
            Why work at{" "}
            <span className="text-[#556C42]">Divine India</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[410px] text-[10px] leading-[1.75] text-[#697366] sm:text-[11px]">
            A studio built on craft, care and conversation &mdash; where what
            we make and how we make it carry equal weight.
          </p>
        </div>

        <div className="mt-[45px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cultureItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[8px] bg-white px-[18px] py-[18px] shadow-[0_8px_20px_rgba(50,60,45,0.06)]"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef2eb]">
                <Icon className="h-3.5 w-3.5 text-[#556C42]" />
              </div>
              <h3 className="mt-[18px] text-[12px] font-light leading-none text-[#434b40]">
                {title}
              </h3>
              <p className="mt-[11px] text-[8px] leading-[1.65] text-[#626b60]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
