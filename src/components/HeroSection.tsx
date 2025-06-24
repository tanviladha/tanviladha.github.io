import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroSectionProps {
  name?: string;
  title?: string;
  summary?: string;
  avatarUrl?: string;
}

const HeroSection = ({
  name = "Tanvi Ladha",
  title = "CS @ UC Santa Barbara",
  summary = "Regents Scholar, Honors Program, Dean's Honors Engineering",
  avatarUrl = "https://media.licdn.com/dms/image/v2/D4E03AQFY8oOGjHVYjQ/profile-displayphoto-shrink_800_800/B4EZdlRr.wG4Ag-/0/1749750825778?e=1755734400&v=beta&t=tkSADlB9vl9YFc0RoM0ee13YUo90tgaUCNI7CzNcwz4",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[600px] flex flex-col items-center justify-center py-32 px-6 bg-white">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Avatar className="h-40 w-40 border-2 border-gray-200 shadow-sm">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-gray-100 text-gray-700 text-3xl font-light">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight"
        >
          {name}
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-12 font-light"
          style={{ color: "#4e92cf" }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-light"
        >
          {summary}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
