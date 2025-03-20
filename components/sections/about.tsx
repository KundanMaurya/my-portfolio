"use client";

import { motion } from "framer-motion";
import { PersonalInfo } from "@/lib/types";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutProps {
  personalInfo: PersonalInfo;
}

export function About({ personalInfo }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">{personalInfo.bio}</p>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5" />
                <span>{personalInfo.location}</span>
              </div>
              <Button asChild>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-tr from-primary to-primary/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}