import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import PreviewSection from "./PreviewSection";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const HomePage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Key Benefits Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            How This Tool Finder Helps Researchers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No More Guesswork</h3>
              <p className="text-gray-600">
                Search and filter tools by use case and organism with precision
                and ease.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            {/* Benefit 3 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
              <p className="text-gray-600">
                Get immediate results and spend less time searching.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Sources</h3>
              <p className="text-gray-600">
                Based on peer-reviewed tools like <a href="https://chopchop.cbu.uib.no/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">CHOPCHOP</a>, <a href="http://crispor.tefor.net/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">CRISPOR</a>, and <a href="https://crispresso2.pinellolab.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">CRISPResso2</a>.
              </p>
            </motion.div>

            
          </div>
        </div>
      </motion.section>

      {/* Preview Section */}
      <PreviewSection />

      {/* Key Features Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-start p-6 bg-gray-50 rounded-xl"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Filtering</h3>
              <p className="text-gray-600">
                Filter by species, editing type, and experimental goals to find
                exactly what you need.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-start p-6 bg-gray-50 rounded-xl"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Curated CRISPR Toolkit
              </h3>
              <p className="text-gray-600">
                Access 21 curated CRISPR tools with detailed descriptions.
              </p>
            </motion.div>

            

            {/* Feature 4 */}
            <motion.div
              className="flex flex-col items-start p-6 bg-gray-50 rounded-xl"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Access</h3>
              <p className="text-gray-600">
                One-click access to tools with direct links and detailed usage
                instructions.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              className="flex flex-col items-start p-6 bg-gray-50 rounded-xl"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">
                Access tools on any device with our responsive, mobile-optimized
                interface.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Use Cases
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case: Guide RNA Design */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Guide RNA Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Find tools for designing optimal guide RNAs for various CRISPR applications, minimizing off-target effects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://chopchop.cbu.uib.no/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full hover:bg-teal-200">CHOPCHOP</a>
                    <a href="http://crispor.tefor.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full hover:bg-teal-200">CRISPOR</a>
                    <a href="https://guidescan.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full hover:bg-teal-200">GuideScan</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Use Case: Editing Analysis */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Editing Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Analyze CRISPR editing outcomes from sequencing data, including indel and HDR analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://crispresso2.pinellolab.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200">CRISPResso2</a>
                    <a href="https://tide.nki.nl/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200">TIDE</a>
                    <a href="https://crispresso2.pinellolab.org/submission/pooled" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200">CRISPRessoPooled</a>
                    <a href="https://ice.synthego.com/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200">Synthego ICE</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Use Case: Off-target Analysis */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Off-target Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Identify and evaluate potential off-target sites for your guide RNAs across the genome.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="http://crispor.tefor.net/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200">CRISPOR</a>
                    <a href="http://www.rgenome.net/cas-offinder/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200">Cas-OFFinder</a>
                    <a href="https://cm.jefferson.edu/Off-Spotter/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200">Off-Spotter</a>
                    <a href="https://bioconductor.org/packages/release/bioc/html/GUIDEseq.html" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200">GuideSeq</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Use Case: Screening Analysis */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Screening Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Flexible analysis of high-content CRISPR screening.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://github.com/ArcInstitute/ScreenPro2" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200">ScreenPro2</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Use Case: Laboratory Management */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Laboratory Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tools for managing laboratory workflows, data, and resources related to CRISPR experiments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://benchling.com/crispr" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full hover:bg-orange-200">Benchling CRISPR Tools</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Use Case: Annotation */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Annotation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tools for annotating CRISPR experiments and genomic regions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="http://crispr-era.stanford.edu/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full hover:bg-red-200">CRISPR-ERA</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Select Species & Purpose
              </h3>
              <p className="text-gray-600">
                Choose your organism and editing objective.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">
                View Best Tools Quickly
              </h3>
              <p className="text-gray-600">
                Results appear immediately from local cache.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Open Tool
              </h3>
              <p className="text-gray-600">
                One click to access or save for later.
              </p>
            </motion.div>

            
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8"
            variants={itemVariants}
          >
            Built for the Research Community
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            This tool finder is designed to save researchers time by providing
            instant access to curated CRISPR tools. 
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 justify-center"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-3xl font-bold text-teal-600 mb-2">20</div>
              <p className="text-gray-600">Curated Tools</p>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-3xl font-bold text-teal-600 mb-2">4+</div>
              <p className="text-gray-600">Supported Species</p>
            </motion.div>
            
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">
                Is this free?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The mission is to accelerate CRISPR
                research/innovations/applications by making tool discovery effortless.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">
                What organisms are supported?
              </AccordionTrigger>
              <AccordionContent>
                We support organisms including Human, Mouse, Zebrafish, Bacteria, Archaea, and Other. New organisms are added based on community requests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-teal-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Try the Fastest Way to Pick a CRISPR Tool
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Link to="/tools">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-6 h-auto bg-teal-600 hover:bg-teal-700"
              >
                🔍 Launch Tool Finder
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-lg">CRISPR Tool Finder</p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;