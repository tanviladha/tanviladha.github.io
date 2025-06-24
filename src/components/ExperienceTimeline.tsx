import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
  skills?: string[];
  relevance?: number;
}

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  // Sort experiences by relevance (highest first)
  const sortedExperiences = [...experiences].sort(
    (a, b) => (b.relevance || 0) - (a.relevance || 0),
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sortedExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-none hover:shadow-lg transition-all duration-500 p-8">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-900 mb-3 leading-tight">
                        {experience.role}
                      </h3>
                      <p className="text-gray-600 font-light mb-2 text-lg">
                        {experience.company}
                      </p>
                      <p className="text-gray-400 font-light">
                        {experience.period}
                      </p>
                    </div>
                    {experience.logo && (
                      <div className="ml-6 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="max-w-full max-h-full object-contain opacity-80"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                    {experience.description}
                  </p>

                  {experience.skills && experience.skills.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {experience.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200 font-light px-4 py-2 rounded-full border-0"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

// Default experiences data (ordered by relevance)
const defaultExperiences: Experience[] = [
  {
    id: "1",
    company: "Altoura - Bangalore, India",
    role: "Software Engineering Intern",
    period: "July 2025 - Sept 2025",
    description:
      "Contributing to an AI-powered learning platform infrastructure for industrial metaverse applications, serving Fortune 100 clients.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF7sCx_pxFVqA/company-logo_200_200/company-logo_200_200/0/1630528681778/studio_216_logo?e=2147483647&v=beta&t=vyB6WQ00VhoZ7wHI_BLLESlbZs42LpMEcKRdoOU6XJM",
    skills: ["AI tools", "Full-stack Dev"],
    relevance: 10,
  },
  {
    id: "2",
    company: "UCSB CS3E Lab - Santa Barbara, CA",
    role: "Research Assistant",
    period: "Jan 2024 - Present",
    description:
      "Co-authoring comprehensive curriculum module on IP and Generative AI integrating legal frameworks with technical computer science education. Conducting legal and technical research to build programming exercises.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/UC_Santa_Barbara_Seal.png",
    skills: ["Research", "C++", "Project Management", "Technical Writing"],
    relevance: 9,
  },
  {
    id: "3",
    company: "Freedom 4 Youth - Santa Barbara, CA",
    role: "Web Developer and Innovation Leader",
    period: "Sept 2024 - Present",
    description:
      "Led redesign of the organization’s website, turning it into a responsive layout using HTML, CSS, JavaScript, and React to improve engagement by implementing SEO strategies. Founded digital literacy and AI education program addressing digital divide for underserved youth. ",
    logo: "https://freedom4youth.org/wp-content/uploads/2020/10/f4y_logo1-.jpg",
    skills: [
      "JavaScript",
      "React",
      "CSS",
      "Responsive Design",
      "Prompt-engineering",
    ],
    relevance: 8,
  },
  {
    id: "4",
    company: "UCSB CS Undergraduate Affairs Committee",
    role: "Student Representative",
    period: "Sept 2024 - Present",
    description:
      "Faculty-nominated student representative organizing technical workshops, mentorship programs, and development initiatives for computer science department.",
    logo: "https://www.cs.ucsb.edu/sites/default/files/images/Computer-Science-emblem.png",
    skills: ["Leadership", "Mentoring", "Problem-Solving", "Communication"],
    relevance: 7,
  },
  {
    id: "5",
    company: "Qualcomm - Remote",
    role: "AI Fellow",
    period: "Aug 2024 - Dec 2024",
    description:
      " Led a project with Qualcomm and Break Through Tech to develop a vision-language model for automated caption generation on chest x-rays, enhancing diagnostic efficiency.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/1200px-Qualcomm-Logo.svg.png",
    skills: [
      "Python",
      "TensorFlow",
      "NLP",
      "Vision-Language",
      "ML Development",
      "Fine-tuning",
    ],
    relevance: 6,
  },
];

export default ExperienceTimeline;
