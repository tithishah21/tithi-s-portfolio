import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Award, Zap, Code, Users, Target } from 'lucide-react';
import resumeBuilderMockup from '@/assets/resume-builder-mockup.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "ResumeBuilderPro",
      subtitle: "AI-Powered Resume Creation Platform",
      category: "full-stack",
      status: "Professional Project",
      image: resumeBuilderMockup,
      description: "A comprehensive full-stack resume builder featuring AI-powered interview preparation. Built during SDE internship at Intelivita Pvt. Ltd.",
      features: [
        "Secure authentication and resume storage",
        "Step-based resume creation with real-time validation",
        "AI-powered chatbot for personalized interview Q&A",
        "PDF export functionality with html2canvas",
        "Global state management with Zustand and deployment on Vercel"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Formik", "Zustand", "Gemini API", "Vercel"],
      achievements: ["Production internship project", "AI integration", "Responsive full-stack build"],
      links: [
        { name: "Live Preview", url: "https://resume-builder-project-flame.vercel.app", icon: ExternalLink }
      ],
      highlights: ["AI Integration", "Full-Stack"]
    },
    {
      title: "NGO Support Platform",
      subtitle: "BUDS of Christ Management System",
      category: "full-stack",
      status: "JPMC's Code for <Good> Project",
      description: "Comprehensive platform for BUDS of Christ NGO built during J.P. Morgan's Code for Good Hackathon 2025. Selected among top engineering students to build a social impact solution.",
      features: [
        "Custom forms for volunteer data management",
        "Document upload and real-time CSV syncing",
        "Digital progress tracking for child development",
        "Vulnerability-based indexing for prioritized care",
        "Role-based dashboards for different user types",
        "Python ML model for predicting school dropout risks"
      ],
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase", "Python", "ML"],
      achievements: ["Social impact solution", "ML integration", "Hackathon build"],
      links: [],
      highlights: ["Social Impact", "ML Integration", "Hackathon"]
    },
    {
      title: "Bitcoin Fraud Ring Detection Research",
      subtitle: "TDA + GNN Research Project",
      category: "ai-ml",
      status: "Research Paper in Progress",
      description: "Ongoing team research with fellow VIT Vellore students under professor mentorship on detecting coordinated fraud rings in Bitcoin transaction networks using topological data analysis and graph neural networks.",
      features: [
        "Works on the Elliptic Bitcoin Transaction Dataset for licit vs illicit transaction analysis",
        "Extracts persistent homology based topological features to capture cycles and higher-order fraud patterns",
        "Combines topology-derived signals with transaction attributes inside a GNN pipeline",
        "Focuses on improving fraud ring detection in dense decentralized financial graphs"
      ],
      technologies: ["Python", "Machine Learning", "Artificial Intelligence", "TensorFlow", "Scikit-Learn", "MLflow"],
      achievements: ["Research paper in progress", "Team project with professor guidance", "Applied graph-based fraud detection"],
      links: [],
      highlights: ["Research", "Team Project", "AI/ML"]
    },
    {
      title: "E-Commerce Backend System",
      subtitle: "Production-ready REST API backend",
      category: "backend",
      status: "Backend Project",
      description: "Designed and built a scalable e-commerce backend with modular architecture, authentication, and relational data modeling.",
      features: [
        "RESTful APIs for products, carts, orders, and users",
        "JWT-based authentication and authorization flows",
        "Input validation middleware and structured SQL schemas",
        "Modular MVC architecture with TypeScript type safety"
      ],
      technologies: ["Node.js", "Express", "TypeScript", "SQL", "REST APIs", "JWT"],
      achievements: ["Scalable backend design", "Typed architecture", "Relational data modeling"],
      links: [],
      highlights: ["Backend", "APIs", "Type Safety"]
    },
    {
      title: "JPMorgan Migration Project",
      subtitle: "Legacy to modern card-based architecture",
      category: "full-stack",
      status: "Current Internship Project",
      description: "Enterprise-scale full-stack migration project at JPMorgan Chase & Co., modernizing legacy systems used across global infrastructure.",
      features: [
        "Migration from legacy systems to a modern card-based architecture",
        "Backend services and frontend integration workstreams",
        "Agile collaboration on enterprise financial software",
        "Exposure to cloud-native and data-heavy system design"
      ],
      technologies: ["Java", "Spring Boot", "SQL", "Kubernetes", "AWS", "Big Data"],
      achievements: ["Enterprise-scale exposure", "Current SEP internship project", "Modernization initiative"],
      links: [],
      highlights: ["Enterprise", "Internship", "Full-Stack"]
    },
    {
      title: "PrepMate",
      subtitle: "Educational Platform",
      category: "ai-ml",
      status: "Hackathon Winner",
      description: "A hackathon-winning educational platform that converts PDFs and YouTube videos into flashcards and summaries using RAG workflows.",
      features: [
        "PDF to flashcard generation system",
        "YouTube video summarization using RAG",
        "Study-focused revision flows for students",
        "Fast content extraction for bite-sized learning"
      ],
      technologies: ["RAG", "PDF Processing", "YouTube API", "AI/ML"],
      achievements: ["Yantra'25 winner", "RAG implementation", "Student-focused product"],
      links: [],
      highlights: ["Award Winner", "AI/ML", "Education"]
    },
    {
      title: "Vimaanas Website",
      subtitle: "Aero Design Team Platform",
      category: "frontend",
      status: "Frontend Project",
      description: "Frontend development for VIT Vellore's aero-design team website, focused on clear team presentation and a polished responsive experience.",
      features: [
        "Modern responsive design",
        "Interactive team showcase",
        "Project portfolio display",
        "Performance-optimized architecture"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
      achievements: ["IEEE-CS project", "Responsive frontend"],
      links: [
        { name: "Live Preview", url: "https://vimaanas.vercel.app/", icon: ExternalLink }
      ],
      highlights: ["UI/UX", "Team Project", "Leadership"]
    },
    {
      title: "HackBattle Website",
      subtitle: "Official hackathon website frontend",
      category: "frontend",
      status: "Completed",
      description: "Developed the frontend for IEEE-CS VIT's official HackBattle website with a strong visual identity and event-focused information architecture.",
      features: [
        "Event landing pages and information flows",
        "Responsive interface for speakers, sponsors, and FAQs",
        "Modern animation and visual storytelling"
      ],
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "CSS"],
      achievements: ["Institutional website delivery", "Modern event frontend"],
      links: [
        { name: "Live Preview", url: "https://hackbattle.ieeecsvit.com/", icon: ExternalLink }
      ],
      highlights: ["Institution", "Complex UI", "Replication"]
    },
    {
      title: "Task Tracker Website",
      subtitle: "Productivity Enhancement Tool",
      category: "frontend",
      status: "Completed",
      description: "A fully responsive task management website featuring eye-catching animations and an intuitive interface built for everyday productivity.",
      features: [
        "Responsive design across all devices",
        "Eye-catching animations and transitions",
        "Intuitive user interface",
        "Task organization and management"
      ],
      technologies: ["React.js", "JavaScript", "CSS", "CSS Flexbox", "Tailwind CSS"],
      achievements: ["Fully responsive", "Animation-rich interface"],
      links: [],
      highlights: ["Animations", "Responsive", "UX"]
    },
    {
      title: "TechBeat",
      subtitle: "Technology News Platform",
      category: "frontend",
      status: "In Progress",
      description: "A dedicated technology news website currently being optimized for responsiveness and a smoother reading experience.",
      features: [
        "Technology news aggregation",
        "Responsive design optimization",
        "Enhanced user experience",
        "Content management system"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "CSS Grid", "Front-End Development"],
      achievements: ["News platform development", "UX optimization"],
      links: [],
      highlights: ["News Platform", "Responsive", "Optimization"]
    },
    {
      title: "Amazon Website Clone",
      subtitle: "E-commerce Interface Recreation",
      category: "frontend",
      status: "Completed",
      description: "Precisely designed replica of three key Amazon pages (Home, Electronics, Cart) demonstrating advanced frontend development skills.",
      features: [
        "Pixel-perfect design replication",
        "Three complete page recreations",
        "Responsive layout implementation",
        "Advanced CSS techniques"
      ],
      technologies: ["HTML5", "CSS", "JavaScript", "CSS Grid", "CSS Flexbox"],
      achievements: ["Precise design replication", "Advanced frontend skills"],
      links: [],
      highlights: ["Clone Project", "Precision", "Frontend"]
    },
    {
      title: "VTOP Website Clone",
      subtitle: "Portal Interface Recreation",
      category: "frontend",
      status: "Completed",
      description: "Frontend clone project focused on recreating the VTOP experience with careful layout matching and responsive design practice.",
      features: [
        "Recreated key student portal screens and layout flows",
        "Applied CSS Grid and Flexbox for structured responsive layouts",
        "Focused on UI consistency and faithful portal-style replication",
        "Strengthened frontend fundamentals through interface reproduction"
      ],
      technologies: ["HTML5", "CSS", "JavaScript", "CSS Grid", "CSS Flexbox"],
      achievements: ["Strong layout replication", "Frontend fundamentals strengthened"],
      links: [],
      highlights: ["Clone Project", "Responsive", "Frontend"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'full-stack', name: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'ai-ml', name: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { label: "Total Projects", value: "12", icon: Code },
    { label: "Technologies", value: "20+", icon: Zap },
    { label: "Hackathon Wins", value: "1", icon: Award },
    { label: "Team Projects", value: "7+", icon: Users }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 0 12px #3b82f6, 0 2px 8px #000'}}>
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcase of innovative solutions, award-winning projects, and technical expertise
            across full-stack development, AI/ML, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                <CardContent className="p-4">
                  <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold cyber-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-28 lg:mt-0 md:mt-0 mb-12">
          <TabsList className="w-full flex flex-col md:flex-row items-center md:justify-center gap-[0.3rem] bg-transparent p-0 border-none shadow-none">
            <div className="flex justify-center gap-2 flex-wrap bg-[#0d0d0d] px-4 py-3 rounded-xl w-full md:w-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 rounded-md text-sm font-mono data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-white"
                >
                  {category.name}
                  <Badge className="ml-2 bg-primary/20 text-primary text-xs">{category.count}</Badge>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                  {project.image && project.title !== "ResumeBuilderPro" && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {project.status}
                          </Badge>
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Badge key={highlightIndex} variant="outline" className="border-secondary/30 text-secondary text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.links.length > 0 && (
                        <div className="flex gap-2">
                          {project.links.map((link, linkIndex) => {
                            const Icon = link.icon;
                            return (
                              <Button
                                key={linkIndex}
                                variant="outline"
                                size="sm"
                                className="cyber-button hover:bg-primary/10 flex items-center gap-1 text-sm px-3 py-1"
                                onClick={() => window.open(link.url, '_blank')}
                              >
                                <Icon className="h-4 w-4" />
                                <span>{link.name}</span>
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 flex items-center gap-2 text-accent">
                        <Target className="h-4 w-4" />
                        Key Features
                      </h5>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-muted-foreground ml-4">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-primary">Technologies</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold mb-2 flex items-center gap-2 text-secondary">
                          <Award className="h-4 w-4" />
                          Achievements
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <Badge key={achievementIndex} className="text-xs bg-secondary/20 text-secondary border-secondary/30">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button
            size="lg"
            className="cyber-button bg-gradient-primary hover:shadow-neon transition-all duration-300"
            onClick={() => window.open('https://github.com/tithishah21', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
