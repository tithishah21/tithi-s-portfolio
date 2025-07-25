import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies with focus on React, Next.js, and TypeScript"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Passionate about transforming ideas into practical solutions that make a difference"
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description: "Active community member with proven leadership skills in tech organizations"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Committed to building efficient, scalable solutions with exceptional user experiences"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL", "Supabase"] },
    { category: "Tools", items: ["Git", "Vercel", "Firebase", "ESLint", "MLFlow"] },
    { category: "Concepts", items: ["Machine Learning", "Full-Stack Architecture", "UI/UX Design"] }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about creating innovative solutions 
            that bridge the gap between complex technology and everyday user needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 cyber-text">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm deeply passionate about harnessing technology to elevate our daily lives, 
                  making processes smarter, more efficient, and seamlessly integrated. Currently 
                  pursuing Computer Science Engineering at VIT Vellore with a CGPA of 8.9, 
                  I've been recognized for academic excellence and innovative problem-solving.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My ambition is to transform innovative ideas into tangible solutions that 
                  drive meaningful progress. With a strong foundation in strategic communication 
                  and project management, I thrive on solving real-world challenges and 
                  delivering results that matter.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From winning hackathons to being selected among the top 250 candidates from 
                  50,000+ applicants for J.P. Morgan's Code for Good Hackathon, I'm committed 
                  to pushing the boundaries of what's possible in technology.
                </p>
              </CardContent>
            </Card>

            {/* Academic Achievement */}
            <Card className="cyber-button border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary">Academic Excellence</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current CGPA</span>
                    <Badge className="bg-primary/20 text-primary border-primary/30">8.9 / 10</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">JEE Mains 2023</span>
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">95 Percentile</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CBSE XII Boards</span>
                    <Badge className="bg-accent/20 text-accent border-accent/30">97.6%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Highlights */}
          <div className="space-y-6">
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card 
                    key={index} 
                    className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-colors" />
                      <h4 className="font-semibold mb-2 text-sm">{highlight.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Technical Skills */}
            <Card className="cyber-button border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="cyber-button border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-glow">Languages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <Badge className="bg-primary/20 text-primary">Professional</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hindi</span>
                    <Badge className="bg-secondary/20 text-secondary">Bilingual</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Gujarati</span>
                    <Badge className="bg-accent/20 text-accent">Native</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;