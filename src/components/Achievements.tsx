import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Calendar, Award, Target, Zap, Star, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const majorAchievements = [
    {
      title: "J.P. Morgan Chase Code for Good Hackathon 2025",
      subtitle: "Top 250 from 50,000+ Applicants",
      category: "Professional Recognition",
      description: "Shortlisted among top 250 candidates from 50,000+ applicants through rigorous multi-stage selection process.",
      details: [
        "Completed Data Structures & Algorithms coding round",
        "Successfully cleared behavioral interview",
        "Resume evaluation and technical assessment",
        "Selected for final hackathon developing tech solutions for social good",
        "Collaborated with top engineering talent across India"
      ],
      impact: "0.5% Selection Rate",
      date: "2025",
      icon: Trophy,
      color: "primary"
    },
    {
      title: "Yantra'25 Hackathon Winner",
      subtitle: "Best UI/UX Award - VIT Vellore",
      category: "Technical Innovation",
      description: "Won hackathon with PrepMate, an innovative educational assistance platform featuring RAG implementation.",
      details: [
        "Developed RAG (Retrieval-Augmented Generation) application",
        "Created exceptional UI/UX design recognized by judges",
        "Built PDF to flashcard conversion system",
        "Implemented YouTube video summarization",
        "Designed collaborative learning platform"
      ],
      impact: "Best UI/UX Award",
      date: "2025",
      icon: Award,
      color: "secondary"
    },
    {
      title: "Devraj Trophy - Academic Excellence",
      subtitle: "Standing Academically First",
      category: "Academic Achievement",
      description: "Received prestigious Devraj Trophy for outstanding academic performance at St. Kabir School.",
      details: [
        "Achieved 98.02% in academic evaluation",
        "Stood first among all sections in the school",
        "Demonstrated consistent academic excellence",
        "Recognition for dedication and hard work"
      ],
      impact: "98.02% Score",
      date: "June 2019",
      icon: Star,
      color: "accent"
    }
  ];

  const leadershipAchievements = [
    {
      title: "Senior Core Member",
      organization: "IEEE Computer Society, VIT Vellore",
      duration: "May 2024 - Currently",
      responsibilities: [
        "Leading frontend development for VIMAANAS website",
        "Developed Hackbattle hackathon website",
        "Facilitating technical workshops and events",
        "Mentoring junior members in web development"
      ],
      icon: Users,
      color: "primary"
    },
    {
      title: "Prompt Engineering Workshop Facilitator",
      organization: "IEEE Computer Society, VIT Vellore",
      duration: "June 2025",
      responsibilities: [
        "Conducted advanced prompting techniques workshop",
        "Taught zero-shot, few-shot, and chain-of-thought prompting",
        "Demonstrated real-world developer tools integration",
        "Equipped students with responsible AI integration skills"
      ],
      icon: Zap,
      color: "secondary"
    },
    {
      title: "Hackathon Tech Panelist",
      organization: "HackBattle - IEEE Computer Society",
      duration: "September 2024",
      responsibilities: [
        "Reviewed diverse projects from AI to full-stack development",
        "Provided technical feedback to participants",
        "Enhanced event management skills",
        "Inspired learning journey for participants"
      ],
      icon: Target,
      color: "accent"
    }
  ];

  const stats = [
    { label: "Hackathons Won", value: "1", icon: Trophy },
    { label: "Leadership Positions", value: "3+", icon: Users },
    { label: "Technical Workshops", value: "5+", icon: Zap },
    { label: "Academic Excellence Awards", value: "3", icon: Star }
  ];

  const recognitions = [
    {
      title: "95 Percentile JEE Mains 2023",
      description: "Exceptional performance in one of India's most competitive engineering entrance examinations",
      category: "Academic"
    },
    {
      title: "97.6% CBSE XII Boards",
      description: "Outstanding results in higher secondary education demonstrating academic consistency",
      category: "Academic"
    },
    {
      title: "8.9 CGPA at VIT Vellore",
      description: "Maintaining excellent academic performance in Computer Science Engineering",
      category: "Current"
    },
    {
      title: "Technical Leadership Recognition",
      description: "Recognized for leadership skills in IEEE Computer Society and technical organizations",
      category: "Leadership"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 0 12px #3b82f6, 0 2px 8px #000'}}>
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition of excellence in academics, technical innovation, leadership, 
            and impactful contributions to the technology community.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-primary">Major Achievements</span>
          </h3>
          
          <div className="space-y-8">
            {majorAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className={`cyber-button border-${achievement.color}/20 hover:border-${achievement.color}/40 transition-all duration-300 group`}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`h-6 w-6 text-${achievement.color}`} />
                          <CardTitle className={`text-xl group-hover:text-${achievement.color} transition-colors`}>
                            {achievement.title}
                          </CardTitle>
                        </div>
                        <p className={`text-${achievement.color} font-medium mb-2`}>{achievement.subtitle}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={`bg-${achievement.color}/20 text-${achievement.color} border-${achievement.color}/30`}>
                            {achievement.category}
                          </Badge>
                          <Badge variant="outline" className="border-muted text-muted-foreground">
                            {achievement.date}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-center lg:text-right">
                        <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground font-bold`}>
                          {achievement.impact}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div>
                      <h5 className={`font-semibold mb-3 flex items-center gap-2 text-${achievement.color}`}>
                        <TrendingUp className="h-4 w-4" />
                        Key Accomplishments
                      </h5>
                      <ul className="space-y-2">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className={`text-${achievement.color} mt-1`}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-secondary">Leadership & Community Impact</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className={`cyber-button border-${achievement.color}/20 hover:border-${achievement.color}/40 transition-all duration-300`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`h-5 w-5 text-${achievement.color}`} />
                      <CardTitle className={`text-lg text-${achievement.color}`}>
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="h-3 w-3" />
                        {achievement.organization}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {achievement.duration}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <h6 className="font-medium mb-3 text-sm">Key Responsibilities</h6>
                    <ul className="space-y-2">
                      {achievement.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className={`text-${achievement.color} mt-1`}>•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Academic & Professional Recognition */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-accent">Academic & Professional Recognition</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <Card 
                key={index} 
                className="cyber-button border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-accent mb-2">
                        {recognition.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                        {recognition.category}
                      </Badge>
                    </div>
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {recognition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;