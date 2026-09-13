import type { ITechnology } from "../App";

interface StackProps {
  stack: ITechnology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const Stack = ({ stack, onRemove, onRemoveAll }: StackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>

          <p className="text-sm text-gray-500 mt-1">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-sm font-semibold text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 text-sm">No technologies selected yet.</p>

          <p className="text-gray-400 text-xs mt-2">
            Add technologies from the list.
          </p>
        </div>
      ) : (
        /* Stack Items */
        <div className="flex flex-col gap-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                bg-gray-50
                border
                border-gray-200
              "
            >
              {/* Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 object-contain"
              />

              {/* Name + Category */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">{technology.category}</p>
              </div>

              {/* Remove */}
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="
                  w-7
                  h-7
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-red-100
                  hover:text-red-500
                  transition-all
                "
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stack;
