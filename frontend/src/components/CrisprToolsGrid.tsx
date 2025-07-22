import React, { useState, useEffect } from "react";
import CrisprToolCard from "./CrisprToolCard";

interface CrisprTool {
  name: string;
  species: string[];
  purpose: string[];
  summary: string;
  external_link: string;
}

interface CrisprToolsGridProps {
  tools?: CrisprTool[];
  filteredTools?: CrisprTool[];
  isLoading?: boolean;
}

const CrisprToolsGrid: React.FC<CrisprToolsGridProps> = ({
  tools = [],
  filteredTools,
  isLoading = false,
}) => {
  const [displayedTools, setDisplayedTools] = useState<CrisprTool[]>(tools);

  useEffect(() => {
    if (filteredTools) {
      setDisplayedTools(filteredTools);
    } else {
      setDisplayedTools(tools);
    }
  }, [filteredTools, tools]);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-80 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse shadow-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  if (displayedTools.length === 0) {
    return (
      <div className="w-full">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            No tools match your filters
          </h3>
          <p className="text-gray-600 max-w-md">
            Try adjusting your filter criteria to discover more CRISPR tools
            that match your research needs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedTools.map((tool) => (
          <CrisprToolCard
            key={tool.name}
            name={tool.name}
            species={tool.species}
            purpose={tool.purpose}
            summary={tool.summary}
            external_link={tool.external_link}
          />
        ))}
      </div>
    </div>
  );
};

export default CrisprToolsGrid;
