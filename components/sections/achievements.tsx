"use client";

import { motion } from "framer-motion";
import { Achievement } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Code, Star, Headphones } from "lucide-react";

interface AchievementsProps {
  achievements: Achievement[];
}

const iconMap = {
  rocket: Rocket,
  code: Code,
  star: Star,
  headphones: Headphones,
};

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}