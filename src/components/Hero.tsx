import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Rocket, Target, Briefcase } from 'lucide-react';
import Particles from "react-tsparticles";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const terminalLines = [
  '> Initializing creativity...',
  '> Deploying innovation...',
  '> Building solutions...'
];

const AnimatedTerminalPanel = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (charIndex < terminalLines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + terminalLines[currentLine][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % terminalLines.length);
        setDisplayedText('');
        setCharIndex(0);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="glass-terminal w-full max-w-md mx-auto md:mx-0 mt-10 md:mt-0 rounded-xl shadow-lg border border-blue-400/30 bg-white/10 backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <span className="w-3 h-3 rounded-full bg-red-500 border border-red-700"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-700"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 border border-green-700"></span>
      </div>
      <div className="px-6 pb-6 pt-2 font-mono text-gray-200 text-lg min-h-[70px] md:min-h-[90px] flex items-center" style={{textShadow: '0 0 8px #3b82f6, 0 0 2px #fff'}}>
        {displayedText}
        <span className={`ml-1 blink-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </div>
    </div>
  );
};

const stats = [
  { icon: <Rocket className="text-blue-400 w-6 h-6 mb-1" />, label: 'Projects', value: 10, suffix: '+' },
  { icon: <Target className="text-blue-400 w-6 h-6 mb-1" />, label: 'Hackathons', value: 6 },
  { icon: <Briefcase className="text-blue-400 w-6 h-6 mb-1" />, label: 'Internships', value: 1 },
  { icon: <Github className="text-blue-400 w-6 h-6 mb-1" />, label: 'Contributions', value: 450, suffix: '+' },
];

const AnimatedCounter = ({ to, duration = 1.2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;
    let incrementTime = Math.abs(Math.floor((duration * 1000) / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}</span>;
};

const StatsPanel = () => (
  <div className="mt-8 w-full flex justify-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-background/80 rounded-xl shadow-lg px-6 py-6 max-w-2xl mx-auto">
      {stats.map((stat, idx) => (
        <div key={stat.label} className="flex flex-col items-center">
          {stat.icon}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * idx }}
            className="text-2xl font-bold text-blue-400"
          >
            <AnimatedCounter to={stat.value} />{stat.suffix || ''}
          </motion.div>
          <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12 py-12 relative overflow-hidden bg-background">
    {/* Left Column */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-10">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white text-center md:text-left">
        Hi, I'm<br />
        <span className="cyber-text">TITHI SHAH</span>
      </h1>
      <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-8 text-gray-300 text-center md:text-left">
        Full-Stack Developer & Computer Science Student
      </div>
      <div className="flex justify-center md:justify-start w-full mb-4">
        <a
          href="/TithiShah_Resume.pdf" // ← make sure this file exists in your `public/` directory
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button border border-blue-400 hover:scale-105 hover:text-blue-400 hover:shadow-neon transition-all duration-300 px-40 py-3 rounded-lg font-semibold text-white shadow-md"
        >
          <Download className="inline-block mr-2 w-5 h-5" />
          Download Resume
        </a>
      </div>

      <StatsPanel />
    </div>
    {/* Right Column */}
    <div className="w-full md:w-1/2 flex justify-center items-center z-10">
      <AnimatedTerminalPanel />
    </div>
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <span className="scroll-hint-text">Scroll to explore <span className="scroll-arrow">→</span></span>
    </div>
  </section>
);

export default Hero;