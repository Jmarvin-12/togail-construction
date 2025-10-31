    /* eslint-disable @typescript-eslint/no-unused-vars */
    "use client";

    import type { Metadata } from "next";
    import ProjectsSection from "@/components/Projects/ProjectsSection";
    import { AnimatePresence } from "framer-motion";
    import { motion } from "framer-motion";

    const metadata: Metadata = {
    title: "Projects | Togail Construction",
    description: "Selected flooring, tiling, and carpeting projects in Greater Boston.",
    };

    export default function ProjectsPage() {
    return (
            <motion.div 
            initial={{ y: -300, opacity: .5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{
            type: "spring",
            stiffness: 400,
            damping: 130,
            }}
            >
                <ProjectsSection /> 
            </motion.div>
    );
    }
