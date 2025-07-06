import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ToolPreviewCardProps {
  name: string;
  summary: string;
  species: string[];
  url: string;
}

const ToolPreviewCard = ({
  name = "CRISPOR",
  summary = "Design sgRNAs with off-target analysis for human/mouse",
  species = ["Human", "Mouse"],
  url = "https://example.com/tool",
}: ToolPreviewCardProps) => {
  return (
    <Card className="h-full flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-teal-700">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mb-4">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {species.map((specie, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
            >
              {specie}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => window.open(url, "_blank")}
        >
          Open Tool <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolPreviewCard;
