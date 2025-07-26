import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink, Code, Users, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SDE Intern",
      company: "Intelivita Pvt. Ltd.",
      location: "Ahmedabad, Gujarat",
      duration: "May 2025 - July 2025",
      status: "Current Position",
      type: "Internship",
      project: "ResumeBuilderPro - AI-Powered Resume Creation Platform",
      description: "Built a comprehensive full-stack, responsive web application using cutting-edge technologies. Implemented secure authentication, AI-powered features, and seamless user experience.",
      achievements: [
        "Developed full-stack web application using Next.js, TypeScript, and Tailwind CSS",
        "Implemented secure authentication and resume storage with Supabase",
        "Created intuitive step-based resume builder with Formik + Yup validation",
        "Integrated Gemini API-powered AI chatbot for interview preparation",
        "Achieved seamless deployment with performance-first architecture on Vercel"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API", "Formik", "Yup", "Vercel"],
      links: [
        { name: "Live Demo", url: "https://resume-builder-project-flame.vercel.app" }
      ]
    },
    {
      title: "Senior Core Member",
      company: "IEEE Computer Society",
      location: "VIT Vellore, Tamil Nadu",
      duration: "May 2024 - Currently",
      status: "Active",
      type: "Leadership",
      description: "Leading frontend development initiatives and demonstrating excellence in technical project management and team collaboration.",
      achievements: [
        "Leading frontend development for VIMAANAS (aero-design team) website",
        "Developed Hackbattle hackathon website frontend for IEEE-CS",
        "Demonstrated exceptional communication skills in technical presentations",
        "Proven ability to work independently and collaborate effectively in teams",
        "Facilitating learning and development for fellow students"
      ],
      technologies: ["Next.js", "React", "TypeScript", "UI/UX Design", "Project Management"],
      responsibilities: [
        "Frontend Development Leadership",
        "Technical Project Coordination",
        "Community Engagement",
        "Workshop Facilitation"
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
      description: "Contributed to technical initiatives and community building activities while developing leadership and project management skills.",
      achievements: [
        "Participated in technical workshop organization",
        "Contributed to open-source community initiatives",
        "Developed project management and teamwork skills",
        "Engaged in technology advocacy and education"
      ],
      technologies: ["Open Source", "Community Management", "Event Organization"]
    }
  ];

  const workshops = [
    {
      title: "Prompt Engineering Workshop Facilitator",
      organization: "IEEE Computer Society, VIT Vellore",
      date: "June 2025",
      description: "Conducted comprehensive workshop on advanced prompting techniques including zero-shot, few-shot, and chain-of-thought prompting.",
      impact: "Equipped students with practical skills for responsible AI integration in coding workflows",
      topics: ["Zero-shot Prompting", "Few-shot Learning", "Chain-of-thought Prompting", "Developer Tools Integration"]
    },
    {
      title: "Hackathon Volunteer Representative",
      organization: "IEEE Computer Society, VIT Vellore",
      event: "HackBattle (36-hour hackathon)",
      date: "September 2024",
      role: "Tech Panelist",
      description: "Served as technical panelist reviewing diverse projects from AI-driven applications to full-stack development solutions.",
      impact: "Enhanced event management skills while inspiring participants in their learning journey"
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
                  <CardTitle className="text-lg text-secondary">{workshop.title}</CardTitle>
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