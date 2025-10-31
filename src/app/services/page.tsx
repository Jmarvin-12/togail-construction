// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesItems/ServiceSection";

export const metadata: Metadata = {
  title: "Services | Togail Construction",
  description: "Flooring, tiling, and carpeting services in Boston.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
