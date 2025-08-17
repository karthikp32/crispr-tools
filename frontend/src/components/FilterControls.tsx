import React, { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { Check, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterControlsProps {
  purposes: string[];
  species: string[];
  selectedPurposes: string[];
  selectedSpecies: string[];
  onPurposeChange: (purposes: string[]) => void;
  onSpeciesChange: (species: string[]) => void;
  toolCount: number;
  clearFilters: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  purposes = [],
  species = [],
  selectedPurposes = [],
  selectedSpecies = [],
  onPurposeChange = () => {},
  onSpeciesChange = () => {},
  toolCount = 0,
  clearFilters = () => {},
}) => {
  const posthog = usePostHog();
  const [purposeOpen, setPurposeOpen] = useState(false);
  const [speciesOpen, setSpeciesOpen] = useState(false);

  const handlePurposeToggle = (purpose: string) => {
    if (selectedPurposes.includes(purpose)) {
      onPurposeChange(selectedPurposes.filter((p) => p !== purpose));
    } else {
      onPurposeChange([...selectedPurposes, purpose]);
      posthog.capture("purpose_selected", { purpose: purpose });
    }
  };

  const handleSpeciesToggle = (speciesItem: string) => {
    if (selectedSpecies.includes(speciesItem)) {
      onSpeciesChange(selectedSpecies.filter((s) => s !== speciesItem));
    } else {
      onSpeciesChange([...selectedSpecies, speciesItem]);
      posthog.capture("species_selected", { species: speciesItem });
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex flex-wrap gap-3">
          <DropdownMenu open={purposeOpen} onOpenChange={setPurposeOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 h-12 px-6 rounded-xl border-2 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Purpose
                {selectedPurposes.length > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-1 bg-blue-100 text-blue-800"
                  >
                    {selectedPurposes.length}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Purpose</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {purposes.map((purpose) => (
                <DropdownMenuCheckboxItem
                  key={purpose}
                  checked={selectedPurposes.includes(purpose)}
                  onCheckedChange={() => handlePurposeToggle(purpose)}
                >
                  {purpose}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={speciesOpen} onOpenChange={setSpeciesOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 h-12 px-6 rounded-xl border-2 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Species
                {selectedSpecies.length > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-1 bg-purple-100 text-purple-800"
                  >
                    {selectedSpecies.length}
                  </Badge>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Species</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {species.map((speciesItem) => (
                <DropdownMenuCheckboxItem
                  key={speciesItem}
                  checked={selectedSpecies.includes(speciesItem)}
                  onCheckedChange={() => handleSpeciesToggle(speciesItem)}
                >
                  {speciesItem}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {(selectedPurposes.length > 0 || selectedSpecies.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-12 px-4 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-200"
            >
              Clear filters
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="bg-gradient-to-r from-green-50 to-blue-50 px-3 py-2 rounded-lg border border-green-200">
            {toolCount} tools found
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
