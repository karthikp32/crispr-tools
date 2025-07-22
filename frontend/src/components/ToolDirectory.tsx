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

// Sample data for the CRISPR tools
const toolsData: CrisprTool[] = [
  {
    name: "CRISPResso2",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Gene Editing Analysis"],
    summary:
      "A software tool for analyzing genome editing outcomes from CRISPR experiments.",
    external_link: "https://crispresso.pinellolab.partners.org/",
  },
  {
    name: "Benchling CRISPR Tools",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Design", "Analysis"],
    summary:
      "An integrated platform for CRISPR guide RNA design and molecular biology data management.",
    external_link: "https://benchling.com/crispr",
  },
  {
    name: "CHOPCHOP",
    species: ["Human", "Mouse", "Zebrafish", "Other"],
    purpose: ["Guide RNA Design"],
    summary:
      "An easy-to-use web tool for CRISPR guide RNA design across multiple species.",
    external_link: "https://chopchop.cbu.uib.no/",
  },
  {
    name: "Cas-OFFinder",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Off-target Analysis"],
    summary:
      "Fast and versatile tool to search for potential off-target sites of CRISPR/Cas nucleases.",
    external_link: "http://www.rgenome.net/cas-offinder/",
  },
  {
    name: "CRISPR-DO",
    species: ["Human", "Mouse"],
    purpose: ["Design"],
    summary:
      "CRISPR Design Online — tool for efficient guide RNA design with off-target prediction.",
    external_link: "http://crispr-do.org/",
  },
  {
    name: "GuideScan",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design"],
    summary:
      "High-specificity guide RNA design tool minimizing off-target effects.",
    external_link: "https://guidescan.com/",
  },
  {
    name: "CRISPR-ERA",
    species: ["Human", "Mouse"],
    purpose: ["Design", "Annotation"],
    summary:
      "Integrated platform for designing and annotating CRISPR-mediated genome editing experiments.",
    external_link: "http://crispr-era.stanford.edu/",
  },
  {
    name: "CasFinder",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design"],
    summary:
      "Identifies CRISPR target sites and evaluates off-target potential.",
    external_link: "https://www.rgenome.net/casfinder/",
  },
  {
    name: "CRISPOR",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design", "Off-target Analysis"],
    summary:
      "Web tool for designing optimal CRISPR guide RNAs and evaluating potential off-targets.",
    external_link: "http://crispor.tefor.net/",
  },
  {
    name: "TIDE",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Editing Efficiency Analysis"],
    summary:
      "Tracking of Indels by DEcomposition - analyses CRISPR editing efficiency using Sanger sequencing data.",
    external_link: "https://tide.nki.nl/",
  },
  {
    name: "GuideSeq",
    species: ["Human", "Mouse"],
    purpose: ["Off-target Analysis"],
    summary:
      "Experimental and computational pipeline to identify off-target cleavage sites genome-wide.",
    external_link: "https://www.guideseq.org/",
  },
  {
    name: "CRISPRscan",
    species: ["Zebrafish", "Mouse", "Human"],
    purpose: ["Guide RNA Design"],
    summary: "Predicts CRISPR-Cas9 activity for guide RNA selection.",
    external_link: "https://www.crisprscan.org/",
  },
  {
    name: "CRISPRdirect",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design"],
    summary:
      "Guide RNA design tool that minimizes off-target sites for CRISPR/Cas systems.",
    external_link: "https://crispr.dbcls.jp/",
  },
  {
    name: "CRISPRessoPooled",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Editing Analysis"],
    summary:
      "Extension of CRISPResso for pooled CRISPR screening data analysis.",
    external_link:
      "https://crispresso.pinellolab.partners.org/submission/pooled",
  },
  {
    name: "CRISPR-RT",
    species: ["Human", "Mouse"],
    purpose: ["Guide RNA Design"],
    summary:
      "A tool specifically designed for CRISPR RNA targeting efficiency prediction.",
    external_link: "http://bioinfolab.miamioh.edu/CRISPR-RT/",
  },
  {
    name: "CRISPy-web",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design"],
    summary:
      "Web application for designing single-guide RNAs for CRISPR/Cas9 systems.",
    external_link: "http://crispy.secondarymetabolites.org/",
  },
  {
    name: "DECKO",
    species: ["Human", "Mouse"],
    purpose: ["CRISPR Design"],
    summary:
      "A method and tool to design paired-guide RNAs for CRISPR deletion experiments.",
    external_link: "http://decko.irbbarcelona.org/",
  },
  {
    name: "CRISPRfinder",
    species: ["Bacteria", "Archaea"],
    purpose: ["CRISPR Array Identification"],
    summary: "Detects CRISPR repeat arrays in prokaryotic genomes.",
    external_link: "https://crispr.i2bc.paris-saclay.fr/Server/",
  },
  {
    name: "Synthego ICE",
    species: ["Human", "Mouse"],
    purpose: ["Editing Analysis"],
    summary:
      "Inference of CRISPR Edits - software to analyze CRISPR editing outcomes from Sanger sequencing.",
    external_link: "https://ice.synthego.com/",
  },
  {
    name: "FlashFry",
    species: ["Human", "Mouse", "Other"],
    purpose: ["Guide RNA Design"],
    summary: "Fast and flexible CRISPR guide RNA design tool.",
    external_link: "https://github.com/mckennalab/FlashFry",
  },
];

const HomePage = () => {
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
