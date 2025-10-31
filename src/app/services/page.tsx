/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesItems/ServiceSection";
import { motion } from "framer-motion";

const metadata: Metadata = {
  title: "Services | Togail Construction",
  description: "Flooring, tiling, and carpeting services in Boston.",
};

export default function ServicesPage() {
  return (
    <motion.div 
          initial={{ x: -300, opacity: .5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
          type: "spring",
          stiffness: 120,
          damping: 60,
          }}
    >
        <ServicesSection />
    </motion.div>

  );
}
