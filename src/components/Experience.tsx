import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink, Code, Users, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Program (SEP) Intern",
      company: "JPMorgan Chase & Co.",
      location: "India",
      duration: "May 2026 - July 2026",
      status: "Completed",
      type: "Internship",
      project: "Legacy migration and Builder Brews intern AI challenge project",
      description: "Worked on an enterprise-scale full-stack migration project that modernized legacy Olympics-era systems used across JPMorgan's global infrastructure, and co-developed Builder Brews, a full end-to-end coffee shop application created as part of an intern AI challenge hackathon.",
      achievements: [
        "Contributed to migration from legacy systems to a modern card-based architecture",
        "Built across backend services and frontend integration in a large financial software stack",
        "Co-developed Builder Brews as a team project, delivering a full-stack coffee shop application during the intern AI challenge hackathon",
        "Worked with Java, Spring Boot, SQL, Kubernetes, AWS, Spark, Autosys, React, JavaScript, testing, SQLite, and Big Data tools",
        "Collaborated in an Agile team environment on enterprise-scale systems"
      ],
      technologies: ["Java", "Spring Boot", "SQL", "Kubernetes", "AWS", "Spark", "Autosys", "React", "JavaScript", "Testing", "SQLite", "Big Data", "Agile"]
    },
    {
      title: "SDE Intern",
      company: "Intelivita Pvt. Ltd.",
      location: "Ahmedabad, Gujarat",
      duration: "May 2025 - July 2025",
      status: "Completed",
      type: "Internship",
      project: "ResumeBuilderPro - AI-Powered Resume Creation Platform",
      description: "Built a full-stack, responsive web application focused on resume creation, interview preparation, and secure data handling.",
      achievements: [
        "Developed full-stack web application using Next.js, TypeScript, and Tailwind CSS",
        "Implemented secure authentication and resume storage with Supabase",
        "Designed a step-based resume builder with Formik + Yup and PDF export via html2canvas",
        "Integrated a Gemini API-powered chatbot for personalized behavioral and technical interview Q&A",
        "Implemented Zustand for state management, enforced code quality with ESLint, and deployed on Vercel"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API", "Formik", "Yup", "Zustand", "ESLint", "Vercel"],
      links: [
        { name: "Live Demo of the project created during the internship tenure", url: "https://resume-builder-project-flame.vercel.app" }
      ]
    },
    {
      title: "Senior Core Member",
      company: "IEEE Computer Society",
      location: "VIT Vellore, Tamil Nadu",
      duration: "May 2024 - Aug 2025",
      status: "Completed",
      type: "Leadership",
      description: "Worked on community-facing technical initiatives, frontend development, and team-based execution across IEEE-CS projects.",
      achievements: [
        "Worked on the development of the VIMAANAS aero-design team website",
        "Developed the official HackBattle website frontend for IEEE-CS",
        "Demonstrated strong communication, collaboration, and leadership in team environments"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Project Coordination"],
      responsibilities: [
        "Frontend Development",
        "Technical Project Coordination",
        "Community Engagement"
      ]
    },
    {
      title: "Core Committee Member",
      company: "Mozilla Firefox Club",
      location: "VIT Vellore, Tamil Nadu",
      duration: "April 2024 - December 2024",
      status: "Completed",
      type: "Community Leadership",
      domain: "Tech | Management",
      description: "Contributed across technical and management domains in club activities and events.",
      achievements: [
        "Supported club activities across technical and management responsibilities",
        "Contributed to team coordination and event execution",
        "Built collaboration and project management experience"
      ],
      technologies: ["Community Management", "Event Organization", "Team Collaboration"]
    }
  ];

  const workshops = [
    {
      title: "Prompt Engineering Workshop Facilitator",
      organization: "IEEE Computer Society, VIT Vellore",
      date: "June 2025",
      description: "Conducted a workshop on advanced prompting techniques including zero-shot, few-shot, and chain-of-thought prompting.",
      impact: "Equipped students with practical skills for responsible AI integration in coding workflows",
      topics: ["Zero-shot Prompting", "Few-shot Learning", "Chain-of-thought Prompting", "Developer Tools Integration"]
    },
    {
      title: "HackBattle Tech-Volunteer",
      organization: "IEEE Computer Society, VIT Vellore",
      event: "HackBattle (36-hour hackathon)",
      date: "September 2024",
      role: "Tech Panelist",
      description: "Reviewed and judged over 100 projects ranging from AI-driven ideas to full-stack development solutions.",
      impact: "Supported the hackathon evaluation process while guiding participants through technical feedback"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 0 12px #3b82f6, 0 2px 8px #000'}}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          
        </div>

        {/* Professional Experience */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-white drop-shadow-lg" style={{textShadow: '0 0 8px #3b82f6, 0 2px 8px #000'}}>
            Professional Experience
          </h3>
          
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span className="font-medium text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {exp.status}
                      </Badge>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        {exp.type}
                      </Badge>
                      {exp.domain && (
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {exp.domain}
                        </Badge>
                      )}
                    </div>

                    {exp.project && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          {exp.project}
                        </h4>
                      </div>
                    )}
                  </div>

                  {exp.links && (
                    <div className="flex gap-2">
                      {exp.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          className="cyber-button hover:bg-primary/10"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          {link.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {exp.achievements && (
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                      <Zap className="h-4 w-4" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.responsibilities && (
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-secondary">Key Responsibilities</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <Badge 
                          key={respIndex}
                          variant="outline"
                          className="border-secondary/30 text-secondary hover:bg-secondary/10"
                        >
                          {responsibility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h5 className="font-semibold mb-3 text-accent">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workshops & Community Involvement */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-white drop-shadow-lg" style={{textShadow: '0 0 8px #3b82f6, 0 2px 8px #000'}}>
            Workshops & Community Leadership
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <Card 
                key={index} 
                className="cyber-button border-secondary/20 hover:border-secondary/40 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-secondary text-blue-600">{workshop.title}</CardTitle>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {workshop.organization}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {workshop.date}
                    </div>
                    {workshop.event && (
                      <Badge variant="outline" className="border-accent/30 text-accent w-fit">
                        {workshop.event}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  {workshop.topics && (
                    <div className="mb-4">
                      <h6 className="font-medium mb-2 text-sm">Topics Covered</h6>
                      <div className="flex flex-wrap gap-1">
                        {workshop.topics.map((topic, topicIndex) => (
                          <Badge 
                            key={topicIndex}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm">
                    <span className="font-medium text-accent">Impact: </span>
                    <span className="text-muted-foreground">{workshop.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
