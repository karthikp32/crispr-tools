import React from "react";
import ToolPreviewCard from "./ToolPreviewCard";

interface Tool {
  name: string;
  summary: string;
  species: string[];
  link: string;
}

interface PreviewSectionProps {
  tools?: Tool[];
}

const PreviewSection = ({
  tools = [
    {
      name: "CRISPOR",
      summary: "Design sgRNAs with off-target analysis for human/mouse",
      species: ["human", "mouse"],
      link: "http://crispor.tefor.net/",
    },
    {
      name: "CHOPCHOP",
      summary: "Knockout or activate genes across dozens of species",
      species: ["human", "mouse", "zebrafish", "drosophila"],
      link: "https://chopchop.cbu.uib.no/",
    },
    {
      name: "CRISPResso2",
      summary: "Analyze NGS results after editing",
      species: ["human", "mouse", "rat"],
      link: "https://crispresso2.pinellolab.org/",
    },
  ],
}: PreviewSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
            Preview Our Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Explore some of the powerful CRISPR tools available through our
            finder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ToolPreviewCard
                name={tool.name}
                summary={tool.summary}
                species={tool.species}
                url={tool.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
