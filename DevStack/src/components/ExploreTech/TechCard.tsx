import { toast } from "react-toastify";
import type { Tech } from "../../types/techType";

interface TechCardProps {
  tech: Tech;
  selected: boolean;
  onSelect: (id: number) => void;
}
const TechCard = ({
  tech,
  selected,
  onSelect,
}: TechCardProps) => {
  const handleAdd = () => {
    onSelect(tech.id);
    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <img
        src={tech.image}
        alt={tech.name}
        className="h-12 w-12 object-contain"
      />

      <div className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{tech.name}</h3>

            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
              {tech.badge}
            </span>
          </div>

        <p className="mt-2 text-sm text-gray-500">
          {tech.description}
        </p>

        <div className="mt-4 flex justify-between text-sm">
          <span>{tech.category}</span>
          <span>⭐ {tech.rating}</span>
        </div>
            <button
              onClick={handleAdd}
              disabled={selected}
              className={`mt-4 w-full rounded-lg px-4 py-2 font-medium ${
                selected
                  ? "cursor-not-allowed bg-green-500 text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {selected ? "Selected ✓" : "Add To Stack"}
            </button>
      </div>
    </div>
  );
};

export default TechCard;