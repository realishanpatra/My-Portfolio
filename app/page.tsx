"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Rocket, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { FloatingLaptop } from "@/components/3d/floating-laptop";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div 
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: `radial-gradient(circle ${isHovering ? "40px" : "20px"} at ${mousePosition.x}px ${mousePosition.y}px, 
              hsl(var(--primary) / 0.15), 
              transparent 80%
            )`
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <FloatingLaptop />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Ishan Patra</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A Full Stack Developer passionate about creating innovative web
              solutions and exploring AI technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p className="text-muted-foreground">
                Building robust web applications with modern technologies and best
                practices
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Cpu className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">
                Exploring and implementing AI solutions to enhance user experiences
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Startup Focus</h3>
              <p className="text-muted-foreground">
                Creating innovative solutions with a startup mindset
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Mouse Guide */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 bg-background/80 backdrop-blur-sm p-4 rounded-full shadow-lg"
      >
        <MousePointer2 className="h-6 w-6 text-primary animate-bounce" />
      </motion.div>
    </>
  );
}