import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import CrisprToolsGrid from "./CrisprToolsGrid";
import FilterControls from "./FilterControls";

// Define the tool data structure
interface CrisprTool {
  name: string;
  species: string[];
  purpose: string[];
  summary: string;
  external_link: string;
}

const HomePage = () => {
  const [toolsData, setToolsData] = useState<CrisprTool[]>([]);

  useEffect(() => {
    fetch("/data/tools.json")
      .then((response) => response.json())
      .then((data) => setToolsData(data));
  }, []);
  // Extract unique species and purposes for filter options
  const allSpecies = Array.from(
    new Set(toolsData.flatMap((tool) => tool.species)),
  );
  const allPurposes = Array.from(
    new Set(toolsData.flatMap((tool) => tool.purpose)),
  );

  // State for filters
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const [filteredTools, setFilteredTools] = useState<CrisprTool[]>(toolsData);

  // Apply filters when selections change
  useEffect(() => {
    const filtered = toolsData.filter((tool) => {
      // If no species filters are selected, include all tools
      const speciesMatch =
        selectedSpecies.length === 0 ||
        tool.species.some((species) => selectedSpecies.includes(species));

      // If no purpose filters are selected, include all tools
      const purposeMatch =
        selectedPurposes.length === 0 ||
        tool.purpose.some((purpose) => selectedPurposes.includes(purpose));

      return speciesMatch && purposeMatch;
    });

    setFilteredTools(filtered);
  }, [selectedSpecies, selectedPurposes]);

  // Handle filter changes
  const handleSpeciesChange = (species: string[]) => {
    setSelectedSpecies(species);
  };

  const handlePurposeChange = (purposes: string[]) => {
    setSelectedPurposes(purposes);
  };

  const handleClearFilters = () => {
    setSelectedSpecies([]);
    setSelectedPurposes([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CRISPR Tools Directory
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our curated collection of specialized CRISPR tools for
            genome editing research. Filter by purpose or species to find the
            perfect tool for your research needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Filter Tools</h2>
          </div>

          <FilterControls
            species={allSpecies}
            purposes={allPurposes}
            selectedSpecies={selectedSpecies}
            selectedPurposes={selectedPurposes}
            onSpeciesChange={handleSpeciesChange}
            onPurposeChange={handlePurposeChange}
            onClearFilters={handleClearFilters}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Available Tools</h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Showing {filteredTools.length} of {toolsData.length} tools
            </span>
          </div>

          <CrisprToolsGrid tools={filteredTools} />

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No tools match your current filters.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
