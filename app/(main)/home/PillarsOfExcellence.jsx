import {
  BriefcaseIcon,
  Squares2X2Icon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const iconClassName = "w-20 h-20 md:w-24 md:h-24 text-[#1a1a1a] [stroke-width:0.75]";

const PILLARS = [
  {
    title: "Extensive Industry\nExperience",
    icon: <BriefcaseIcon className={iconClassName} />,
  },
  {
    title: "Diversified\nExpertise",
    icon: <Squares2X2Icon className={iconClassName} />,
  },
  {
    title: "Commitment to\nInnovation",
    icon: <LightBulbIcon className={iconClassName} />,
  },
  {
    title: "Strategic\nPartnerships",
    icon: <UserGroupIcon className={iconClassName} />,
  },
];

const PillarsOfExcellence = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-[5%]">
      <h2 className="text-center text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase mb-10 md:mb-14">
        Elite Group Holding&apos;s Pillars of Excellence
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 max-w-5xl mx-auto">
        {PILLARS.map((pillar, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-4 md:px-6 ${
              index < PILLARS.length - 1
                ? "md:border-r md:border-gray-300"
                : ""
            }`}
          >
            <div className="text-[#1a1a1a] mb-4 md:mb-6">{pillar.icon}</div>
            <h3 className="text-sm md:text-base font-bold text-[#1a1a1a] whitespace-pre-line leading-tight">
              {pillar.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 md:mt-12">
        <Link href="/about-group">
          <button
            type="button"
            className="inline-flex items-center gap-2 uppercase bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-black hover:border-[#fb511e] rounded-xl px-6 sm:px-10 py-2 md:py-3 font-semibold"
          >
            Read More
            <ArrowLongRightIcon className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PillarsOfExcellence;
