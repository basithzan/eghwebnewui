import { FlagIcon, EyeIcon } from "@heroicons/react/24/outline";

const iconClassName = "w-10 h-10 flex-shrink-0 text-[#1a1a1a] [stroke-width:1]";

const MissionVision = () => {
  return (
    <section className="w-full bg-[#f0f0f0] my-16 md:my-24">
      <div className="flex flex-col md:flex-row">
        {/* Left image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/assets/about-us/Leader.jpg"
            alt="Mission and Vision"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-[8%] py-10 md:py-16 gap-10 md:gap-12">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FlagIcon className={iconClassName} />
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#fb511e]">
                Mission
              </h2>
            </div>
            <p className="text-[#282828] text-sm md:text-base leading-relaxed">
              To lead our business sectors globally, providing unrivalled value
              and establishing new benchmarks for excellence.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <EyeIcon className={iconClassName} />
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#fb511e]">
                Vision
              </h2>
            </div>
            <p className="text-[#282828] text-sm md:text-base leading-relaxed">
              To contribute to the social and economic advancement of the
              communities we serve by innovating, diversifying, and broadening
              our corporate horizons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
