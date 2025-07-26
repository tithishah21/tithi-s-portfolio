import { Badge } from '@/components/ui/badge';
import { Code, Briefcase, GraduationCap, Trophy, UserCheck, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL", "Supabase"] },
    { category: "Tools", items: ["Git", "Vercel", "Firebase", "ESLint", "MLFlow"] },
    { category: "Concepts", items: ["Machine Learning", "Full-Stack Web Development", "System Design","UI/UX Design"] }
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Winner of Code4Change 2.0 Hackathon, held during Yantra 2025 at VIT Vellore for building 'PrepMate' - an AI-powered exam prep tool."
    },
    {
      icon: Terminal,
      title: "Shortlisted for J.P. Morgan Chase's prestigious Code for Good Hackathon 2025,selected among the top 255 candidates out of 50,000+ applicants.",
      description: "Selected to participate in the hackathon to develop tech solutions for social good alongside top engineering talented across India."
    },
    {
      icon: Briefcase,
      title: "SDE Intern @ Intelivita",
      description: "Worked on full-stack, responsive ResumeBuilderPro platform with AI Interview Chatbot & dynamic UI using Next.js, TypeScript, and Tailwind CSS with Supabase for authentication and data storage."
    },
    {
      icon: GraduationCap,
      title: "CSE @ VIT Vellore",
      description: "Pre-final year student,pursuing CSE Core at Vellore Institute of Technology ,Vellore campus with CGPA of 8.9."
    },
    {
      icon: UserCheck,
      title: "Conducted Prompt Engineering Workshop for 80+ VITians at IEEE-CS.",
      description: "The session covered key prompting techniques like zero-shot, few-shot, and chain-of-thought prompting, along with real-world developer tools.Participants learned how to craft effective prompts to unlock the true potential of generative Al.The event aimed to equip students with practical skills to responsibly integrate Al into their coding workflows."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-radial from-blue-950 via-blue-900 to-blue-950">
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.18) 0%, rgba(30,41,59,0.9) 80%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{ textShadow: '0 0 12px #3b82f6, 0 2px 8px #000' }}>About Me</h2>
          
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-black/80 border border-blue-400/20 rounded-xl p-6 shadow-md hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-blue-400 w-6 h-6" />
                  <h4 className="text-white font-semibold text-md">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technical Skills Card */}
        <div className="cyber-button border-accent/20 hover:border-blue-400 transition-all duration-300 rounded-xl bg-black/80 shadow-md hover:scale-105 hover:shadow-blue-400/30 cursor-pointer">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent drop-shadow">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium mb-2 text-sm text-gray-400 uppercase tracking-wider">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="border border-blue-400/30 text-blue-400 bg-blue-950/40 rounded px-2 py-1 text-xs font-medium hover:bg-blue-400/10 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;