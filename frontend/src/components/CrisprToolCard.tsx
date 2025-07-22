import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CrisprToolCardProps {
  name: string;
  species: string[];
  purpose: string[];
  summary: string;
  external_link: string;
}

const purposeColorMap: Record<string, string> = {
  Design: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Guide RNA Design":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Analysis:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Gene Editing Analysis":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Editing Analysis":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Editing Efficiency Analysis":
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Off-target Analysis":
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Annotation:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "CRISPR Design":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "CRISPR Array Identification":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

const CrisprToolCard = ({
  name = "Tool Name",
  species = ["Human"],
  purpose = ["Design"],
  summary = "A summary description of the CRISPR tool and its capabilities.",
  external_link = "https://example.com",
}: CrisprToolCardProps) => {
  return (
    <Card className="h-full flex flex-col bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 shadow-lg rounded-2xl group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
            {name}
          </CardTitle>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {species.map((specie, index) => (
            <Badge
              key={`${specie}-${index}`}
              variant="outline"
              className="text-xs bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {specie}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="py-3 flex-grow relative z-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {purpose.map((tag, index) => (
            <Badge
              key={`${tag}-${index}`}
              className={`${purposeColorMap[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"} border-none text-xs font-medium px-3 py-1 rounded-full shadow-sm`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {summary}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-3 relative z-10">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 text-sm h-11 rounded-xl border-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          onClick={() =>
            window.open(external_link, "_blank", "noopener,noreferrer")
          }
        >
          <ExternalLink size={16} />
          Visit Tool
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CrisprToolCard;
