"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-48 h-48 rounded-full overflow-hidden glow-effect"
            >
              <Image
                src="C:\Users\Ishan\Downloads\project-bolt-sb1-g1bbws7m\project\app\about\newjpg.jpg"
                alt="Ishan Patra"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold mb-4 gradient-text"
              >
                My Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-6"
              >
                I'm a 3rd-year BE student specializing in Electronics and Telecommunication at PICT. 
                My passion lies in creating innovative web solutions and exploring the possibilities of AI technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4"
              >
                <Link
                  href="https://github.com/ishanpatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ishanpatra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:contact@ishanpatra.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-card p-6 rounded-lg shadow-lg card-hover">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">BE in Electronics and Telecommunication</h3>
                  <p className="text-muted-foreground">PICT, Pune</p>
                  <p className="text-sm text-muted-foreground">2021 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg card-hover">
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full Stack Web Development</li>
                <li>• AI and Machine Learning</li>
                <li>• Startup Creation</li>
                <li>• UI/UX Design</li>
                <li>• Open Source Contribution</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg card-hover">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">BE in Electronics and Telecommunication</h3>
                  <p className="text-muted-foreground">PICT, Pune</p>
                  <p className="text-sm text-muted-foreground">2021 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg card-hover">
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full Stack Web Development</li>
                <li>• AI and Machine Learning</li>
                <li>• Startup Creation</li>
                <li>• UI/UX Design</li>
                <li>• Open Source Contribution</li>
              </ul>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 bg-card p-8 rounded-lg shadow-lg card-hover"
          >
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology began with a curiosity about how things work. 
              As a student at PICT, I've had the opportunity to explore various aspects of electronics and telecommunications, 
              but my true passion emerged in web development and artificial intelligence.
              <br /><br />
              I'm particularly interested in creating innovative solutions that combine modern web technologies with AI capabilities. 
              My experience includes working on various projects, from full-stack web applications to experimenting with AI models.
              <br /><br />
              Currently, I'm focused on developing a ticket reselling platform and exploring ways to integrate AI to enhance user experiences. 
              I believe in the power of technology to solve real-world problems and am always eager to learn and apply new technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}