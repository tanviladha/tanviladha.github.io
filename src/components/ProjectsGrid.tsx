import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-light mb-6">
                        {project.description}
                      </p>
                    </div>
                    {project.imageUrl && (
                      <div className="ml-6 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain opacity-80"
                        />
                      </div>
                    )}
                  </div>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200 font-light px-4 py-2 rounded-full border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "ADHD Prediction in Female Brains",
    description:
      "Built an XGBoost model for ADHD diagnosis using neuroimaging and behavioral data, addressing the underdiagnosed population of females for WiDS Datathon 2025.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Seaborne",
      "Iterative Development",
    ],
    repoUrl: "https://github.com/UCLA-WiDS-Team23/WiDS-Team23",
    imageUrl:
      "https://static.wixstatic.com/media/f15460_ed7cf64a8dfa45c591451f0657f7f481~mv2.png/v1/fill/w_560,h_560,al_c,lg_1,q_85,enc_avif,quality_auto/fullcolor_horizontal_edited.png",
  },
  {
    id: "2",
    title: "PrepBot",
    description:
      "Developed an AI interview prep chatbot progressing from DiffLib to OpenAI API integration for enhanced accuracy.",
    technologies: ["Python", "NLTK", "DiffLib", "OpenAI APIs"],
    repoUrl: "https://github.com/tanviladha/Prep-Bot",
    imageUrl:
      "https://i.fbcd.co/products/original/art-1-57bc6f3a35001ad375aa65558958e1d48a40a4df5e4cb45bd23a9f89d1a8ca3d.jpg",
  },
  {
    id: "3",
    title: "Writer for the Daily Nexus",
    description:
      "Write for the Science and Tech Section of the Daily Nexus, UCSB's student newspaper, making digestible content for varying audiences covering emerging scientific developments.",
    technologies: ["Journalism", "Technology and Science", "Communication"],
    imageUrl:
      "https://pbs.twimg.com/profile_images/967547872508968961/3AJbKH2R_400x400.jpg",
  },
];

export default ProjectsGrid;
