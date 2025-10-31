import type { Metadata } from "next";
import ProjectsSection from "@/components/Projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Togail Construction",
  description: "Selected flooring, tiling, and carpeting projects in Greater Boston.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
