import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  link?: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const FeaturesSection = ({
  features = defaultFeatures,
}: FeaturesSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Features
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-none hover:shadow-lg transition-all duration-500 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feature.description.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>",
                        ),
                      }}
                    />
                  </p>

                  {feature.link && (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center transition-colors duration-300 font-light"
                      style={{ color: "#4e92cf" }}
                    >
                      <span className="mr-2">View Story</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultFeatures: Feature[] = [
  {
    id: "1",
    title: "Pivotal Ventures x Break Through Tech",
    description:
      "Meet Hasti Abbasi Kenarsari, Kyra Abbu, and **Tanvi Ladha** - three young people who are helping shape the future of tech.",
    link: "https://www.linkedin.com/posts/pivotalventures_meet-hasti-abbasi-kenarsari-kyra-abbu-and-activity-7339275415007502336-Km0n?utm_source=share&utm_medium=member_desktop&rcm=ACoAADttMEMBl7ch3JaZXvMLciWbtKT-0Rp7Kuk",
  },
  {
    id: "2",
    title: "The Daily Nexus",
    description:
      "Conscience Computer Science: UCSB Launches First Embedded Ethics Lab",
    link: "https://dailynexus.com/2025-05-22/conscience-computer-science-ucsb-launches-first-embedded-ethics-lab/",
  },
];

export default FeaturesSection;
