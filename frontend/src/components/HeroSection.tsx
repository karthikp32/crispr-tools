import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 flex flex-col items-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Find the Right CRISPR Tool — Quickly
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get immediate results from a curated directory of tools for guide RNA design, editing analysis, and more. Filter by species and purpose to accelerate your research.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/tools">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg"
            >
              🔬 Launch Tool Finder
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=800&q=80"
          alt="CRISPR Tool Finder Preview"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;