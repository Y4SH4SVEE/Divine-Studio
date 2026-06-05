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
    <section
      className="bg-[#F0F1E8]"
      style={{ paddingBottom: 78, paddingTop: 84 }}
    >
      <div
        className="mx-auto w-full px-5 sm:px-8 lg:px-0"
        style={{ maxWidth: 972 }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: 590 }}>
          <p
            className="font-semibold uppercase leading-none text-[#9baa85]"
            style={{ fontSize: 8, letterSpacing: "0.42em" }}
          >
            Culture
          </p>
          <h2
            className="font-light leading-none text-[#30382d]"
            style={{
              fontSize: "clamp(30px, 2.38vw, 36px)",
              letterSpacing: "-0.025em",
              marginTop: 17,
            }}
          >
            Why work at{" "}
            <span className="text-[#556C42]">Divine India</span>
          </h2>
          <p
            className="mx-auto leading-[1.55] text-[#697366]"
            style={{ fontSize: 13, marginTop: 24, maxWidth: 505 }}
          >
            A studio built on craft, care and conversation &mdash; where what
            we make and how we make it carry equal weight.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 20, marginTop: 54 }}
        >
          {cultureItems.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[8px] bg-white shadow-[0_8px_20px_rgba(50,60,45,0.06)]"
              style={{ minHeight: 211, padding: "25px 26px" }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-[#eef2eb]"
                style={{ height: 38, width: 38 }}
              >
                <Icon className="h-4 w-4 text-[#556C42]" />
              </div>
              <h3
                className="font-light leading-none text-[#434b40]"
                style={{ fontSize: 16, marginTop: 25 }}
              >
                {title}
              </h3>
              <p
                className="leading-[1.65] text-[#626b60]"
                style={{ fontSize: 10, marginTop: 15 }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
