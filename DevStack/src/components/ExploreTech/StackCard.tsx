import type { Tech } from "../../types/techType";

interface StackCardProps {
  selectedTechnologies: Tech[];
  onClearAll: () => void;
}
const StackCard = ({
  selectedTechnologies,
  onClearAll,
}: StackCardProps) => {
  return (
    <div className="h-[285px] w-[288px] rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="mb-5 text-xl font-bold">Your Stack</h3>

      {selectedTechnologies.length === 0 ? (
        <p className="text-sm text-gray-500">
          Your stack is empty.
        </p>
      ) : (
        <div className="space-y-3">
          {selectedTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
                  <div>
                    <h4 className="font-semibold">{tech.name}</h4>

                    <p className="text-xs text-gray-500">
                      {tech.category}
                    </p>
                  </div>
                </div>
          ))}
        </div>
      )}
      <button
        onClick={onClearAll}
        className="mt-5 w-full rounded-lg bg-white border-red-500 border-1 px-4 py-2 font-medium text-red-500"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackCard;