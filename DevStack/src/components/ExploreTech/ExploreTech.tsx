import { useState } from "react";

import { techData } from "../../data/techData";

import TechCard from "./TechCard";
import StackCard from "./StackCard";

const ExploreTech = () => {
  const [selectedTech, setSelectedTech] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    if (selectedTech.includes(id)) return;

    setSelectedTech([...selectedTech, id]);
  };

  const handleClearAll = () => {
    setSelectedTech([]);
  };

  const selectedTechnologies = techData.filter((tech) =>
    selectedTech.includes(tech.id)
  );
  return (
    <section className="container mx-auto px-4 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Explore{" "}
            <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        <p className="text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="grid grid-cols-3 gap-5 lg:col-span-3">
            {techData.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                selected={selectedTech.includes(tech.id)}
                onSelect={handleSelect}
              />
            ))}
          </div>
        <StackCard
          selectedTechnologies={selectedTechnologies}
          onClearAll={handleClearAll}
        />
      </div>
    </section>
  );
};

export default ExploreTech;