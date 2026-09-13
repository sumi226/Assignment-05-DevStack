
import { use } from "react";
import type { ITechnology } from "../type/techTypes";

interface TechCardProps {
  technologiesPromise: Promise<ITechnology[]>;
  onAddToStack: (technology: ITechnology) => void;
}

const TechCard = ({
  technologiesPromise,
  onAddToStack,
}: TechCardProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[35px] font-extrabold text-gray-900">
            Explore the{" "}
            <span className="gradient-text tech-h2-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-gray-600">
            Pick one technology per category to build your ideal stack
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Icon + Badge */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-14 h-14 object-contain"
                />

                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                  {technology.badgeIcon} {technology.badge}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900">
                {technology.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed min-h-[72px]">
                {technology.description}

              </p>

              {/* Category + Difficulty */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  {technology.categoryChip}
                </span>

                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  {technology.difficulty}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-5">
                <span className="text-yellow-500 text-xl">
                  {technology.ratingIcon}
                </span>

                <span className="font-semibold text-gray-800">
                  {technology.rating}
                </span>
              </div>

              {/* Add to Stack */}
              <button
                type="button"
                onClick={() => onAddToStack(technology)}
                className="gradient-btn w-60 shadow-lg shadow-violet-500/30 transition-all duration-300"
              >
                {technology.action.label}
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechCard;

