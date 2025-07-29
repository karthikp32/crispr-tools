import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    purpose: ["Editing Analysis"],
    summary: "Pipeline for analyzing genome editing outcomes (indels, HDR, base edits) from sequencing data.",
    external_link: "https://crispresso2.pinellolab.org/"
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
    name: "CRISpick",
    species: ["Human", "Mouse"],
    purpose: ["Guide Design"],
    summary:
      "CRISPick, developed by the Broad Institute, ranks and picks candidate CRISPRko/a/i sgRNA sequences to maximize on-target activity for target(s) provided",
    external_link: "https://portals.broadinstitute.org/gppx/crispick/public",
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
    external_link: "https://crisprcas.i2bc.paris-saclay.fr/CrisprCasFinder/Index",
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
    external_link: "https://bioconductor.org/packages/release/bioc/html/GUIDEseq.html",
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
      "https://crispresso2.pinellolab.org/submission/pooled",
  },
  {
    name: "CRISPR-FOCUS",
    species: ["Human", "Mouse"],
    purpose: ["Guide RNA Design"],
    summary:
      "A web-based platform to search and prioritize sgRNAs for CRISPR screening experiments",
    external_link: "http://cistrome.org/crispr-focus/",
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
    name: "CRISPRme",
    species: ["Human", "Mouse"],
    purpose: ["Off-target Prediction"],
    summary:
      "CRISPRme is a tool for comprehensive off-target assessment that considers effects of human genetic variants.",
    external_link: "http://crisprme.di.univr.it/",
  },
  {
    name: "MAGeCK",
    species: ["Human", "Mouse"],
    purpose: ["Screening Analysis"],
    summary: "Model-based Analysis of Genome-wide CRISPR-Cas9 Knockout (MAGeCK) for prioritizing single-guide RNAs, genes and HiTSelectpathways in genome-scale CRISPR/Cas9 knockout screens.",
    external_link: "https://sourceforge.net/projects/mageck/",
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
  {
    name: "ScreenPro2",
    species: ["Many"],
    purpose: ["Screening Analysis"],
    summary: "Flexible analysis of high-content CRISPR screening.",
    external_link: "https://github.com/ArcInstitute/ScreenPro2",
  }
];

const ToolDirectoryPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            🧬 Genome Editing Research
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            CRISPR Tools Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover and explore our comprehensive collection of specialized
            CRISPR tools designed for cutting-edge genome editing research. Find
            the perfect tool tailored to your specific research needs and target
            species.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Filter className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Filter & Discover
              </h2>
            </div>

            <FilterControls
              species={allSpecies}
              purposes={allPurposes}
              selectedSpecies={selectedSpecies}
              selectedPurposes={selectedPurposes}
              onSpeciesChange={handleSpeciesChange}
              onPurposeChange={handlePurposeChange}
              toolCount={filteredTools.length}
              clearFilters={handleClearFilters}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-sm">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Help Us Improve
              </h3>
              <p className="text-sm text-gray-600 max-w-md">
                Know of a CRISPR tool that's missing? Have suggestions for
                improvements? I'd love to hear from you.
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 whitespace-nowrap"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSf4jB_d4k6_gEXHgC2JHJ3W-VAbNcTct9GBlQa1xc6G3DH3Kw/viewform?usp=header",
                  "_blank",
                )
              }
            >
               Suggest a Tool / Give Feedback
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Tools
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full border border-green-200">
                {filteredTools.length} of {toolsData.length} tools available
              </span>
            </div>
          </div>

          <CrisprToolsGrid tools={filteredTools} />

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Filter className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No tools found
                </h3>
                <p className="text-gray-600 mb-6">
                  No tools match your current filter criteria. Try adjusting
                  your filters to discover more tools.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolDirectoryPage;
