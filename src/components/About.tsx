import { Briefcase, GraduationCap, Trophy, UserCheck, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "React DOM", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS", "CSS Grid", "CSS Flexbox", "Formik", "Zustand"]
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Express.js", "Java", "Spring Boot", "Supabase", "MySQL", "Oracle SQL", "PostgreSQL", "DBMS", "SQL", "Apache Spark"]
    },
    {
      category: "AI / ML",
      items: ["Machine Learning", "Artificial Intelligence", "TensorFlow", "Scikit-Learn", "MLflow", "Big Data Systems"]
    },
    {
      category: "Cloud & Tools",
      items: ["Amazon Web Services (AWS)", "Cloud Computing", "Kubernetes", "Docker", "Autosys", "Git", "GitHub", "Vercel", "ESLint", "Packet Tracer"]
    },
    {
      category: "Core CS",
      items: ["C++", "C", "Python", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Object-Oriented Programming", "Full-Stack Development"]
    }
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Completed SEP Internship @ JPMorgan Chase & Co.",
      description: "Contributed to a full-stack migration initiative modernizing legacy systems into a card-based architecture using Java, Spring Boot, SQL, Kubernetes, AWS, Spark, Autosys, and Big Data tooling."
    },
    {
      icon: Terminal,
      title: "Selected for JPMorgan Chase Code for Good 2025",
      description: "Chosen for JPMorgan Chase's flagship social hackathon, competing alongside top engineering students to build technology solutions for nonprofit organizations."
    },
    {
      icon: Trophy,
      title: "Yantra'25 Hackathon Winner",
      description: "Built PrepMate, a RAG-powered study assistant that converts PDFs and YouTube content into flashcards and summaries, and won at VIT Vellore in February 2025."
    },
    {
      icon: Briefcase,
      title: "SDE Intern @ Intelivita",
      description: "Built ResumeBuilderPro, a full-stack AI-powered resume platform using Next.js, TypeScript, Tailwind CSS, Supabase, Formik, Zustand, and Gemini API integration."
    },
    {
      icon: GraduationCap,
      title: "CSE @ VIT Vellore",
      description: "Pre-final year B.Tech Computer Science Engineering (Core) student at VIT Vellore with a CGPA of 9.04."
    },
    {
      icon: UserCheck,
      title: "Prompt Engineering Workshop Facilitator",
      description: "Conducted a workshop at IEEE Computer Society, VIT Vellore on zero-shot, few-shot, and chain-of-thought prompting with real-world developer tooling and responsible AI usage."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-radial from-blue-950 via-blue-900 to-blue-950">
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(59,130,246,0.18) 0%, rgba(30,41,59,0.9) 80%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{ textShadow: '0 0 12px #3b82f6, 0 2px 8px #000' }}>About Me</h2>
        </div>

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
