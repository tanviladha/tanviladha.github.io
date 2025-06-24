import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ContactSectionProps {
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    other?: Array<{
      name: string;
      url: string;
    }>;
  };
}

const ContactSection = ({
  email = "tanviladha@outlook.com",
  socialLinks = {
    github: "https://github.com/tanviladha",
    linkedin: "https://www.linkedin.com/in/tanvi-l/",
  },
}: ContactSectionProps) => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-3xl mx-auto shadow-none border-0 bg-white">
            <CardContent className="p-12">
              <div className="flex flex-col items-center space-y-8">
                <p className="text-center text-gray-600 text-xl font-light leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or
                  just to say hello!
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      aria-label="Email"
                      className="inline-flex items-center transition-colors duration-300 font-light text-lg"
                      style={{ color: "#4e92cf" }}
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      <span>Email</span>
                    </a>
                  )}

                  {socialLinks?.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="inline-flex items-center transition-colors duration-300 font-light text-lg"
                      style={{ color: "#4e92cf" }}
                    >
                      <Github className="h-5 w-5 mr-3" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {socialLinks?.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center transition-colors duration-300 font-light text-lg"
                      style={{ color: "#4e92cf" }}
                    >
                      <Linkedin className="h-5 w-5 mr-3" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {socialLinks?.other &&
                    socialLinks.other.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light text-lg"
                      >
                        <ExternalLink className="h-5 w-5 mr-3" />
                        <span>{link.name}</span>
                      </a>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
