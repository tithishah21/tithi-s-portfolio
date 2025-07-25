import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Award, GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      degree: "Computer Science Engineering Core",
      duration: "2023 - 2027",
      status: "Currently Pursuing",
      cgpa: "8.9",
      maxCgpa: "10.0",
      description: "Pursuing comprehensive education in computer science with focus on modern software development, algorithms, and emerging technologies.",
      highlights: [
        "Strong academic performance with 8.9 CGPA",
        "Active participation in technical societies",
        "Leadership roles in IEEE Computer Society",
        "Hackathon participation and wins"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Machine Learning",
        "Web Development",
        "Computer Networks"
      ]
    }
  ];

  const previousEducation = [
    {
      institution: "Shiv Ashish School",
      location: "Ahmedabad, Gujarat",
      level: "Higher Secondary (XII)",
      year: "2023",
      achievement: "95 Percentile (JEE Mains 2023)",
      description: "Completed higher secondary education with exceptional performance in JEE Mains examination.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      institution: "St. Kabir School",
      location: "Ahmedabad, Gujarat",
      level: "Secondary (X)",
      year: "2021",
      achievement: "97.6% (CBSE X Boards)",
      description: "Completed secondary education with outstanding academic performance in CBSE curriculum.",
      specialAchievement: "Devraj Trophy - Standing academically first among all sections (98.02% in 2019)"
    }
  ];

  const certifications = [
    {
      title: "Full-Stack Web Development",
      provider: "Self-Taught & Projects",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      status: "Ongoing"
    },
    {
      title: "Machine Learning & AI",
      provider: "Academic & Self-Study",
      technologies: ["Python", "PyTorch", "scikit-learn", "MLFlow"],
      status: "In Progress"
    },
    {
      title: "Cloud Technologies",
      provider: "Hands-on Experience",
      technologies: ["Vercel", "Supabase", "Firebase"],
      status: "Practical"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="cyber-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic journey marked by excellence, continuous learning, and passion for 
            computer science and innovative technology solutions.
          </p>
        </div>

        {/* Current Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-primary">Current Education</span>
          </h3>
          
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      <GraduationCap className="h-6 w-6" />
                      {edu.degree}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium text-foreground">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {edu.status}
                      </Badge>
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                        CGPA: {edu.cgpa}/{edu.maxCgpa}
                      </Badge>
                    </div>
                  </div>

                  <div className="text-center lg:text-right">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary text-primary-foreground font-bold text-xl">
                      {edu.cgpa}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">Current CGPA</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 flex items-center gap-2 text-accent">
                      <Award className="h-4 w-4" />
                      Academic Highlights
                    </h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-secondary">Key Courses</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Previous Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-secondary">Previous Education</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousEducation.map((edu, index) => (
              <Card 
                key={index} 
                className="cyber-button border-secondary/20 hover:border-secondary/40 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{edu.level}</CardTitle>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.year}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-3 py-1">
                      {edu.achievement}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.specialAchievement && (
                    <div className="mb-4">
                      <h6 className="font-medium mb-2 text-accent">Special Achievement</h6>
                      <p className="text-sm text-muted-foreground">{edu.specialAchievement}</p>
                    </div>
                  )}
                  
                  {edu.subjects && (
                    <div>
                      <h6 className="font-medium mb-2 text-sm">Subjects</h6>
                      <div className="flex flex-wrap gap-1">
                        {edu.subjects.map((subject, subjectIndex) => (
                          <Badge 
                            key={subjectIndex}
                            variant="outline"
                            className="text-xs border-secondary/30 text-secondary"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-accent">Technical Certifications & Learning</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="cyber-button border-accent/20 hover:border-accent/40 transition-all duration-300 text-center"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {cert.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Education;