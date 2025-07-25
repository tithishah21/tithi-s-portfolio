import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Full-Stack Developer',
    'Computer Science Student',
    'Problem Solver',
    'Innovation Creator'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (typedText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-accent rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary-glow rounded-full animate-float"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors">
                <MapPin className="h-3 w-3 mr-1" />
                Ahmedabad, Gujarat, India
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block cyber-text glitch" data-text="TITHI SHAH">
                TITHI SHAH
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 h-12">
              <span className="text-muted-foreground">I'm a </span>
              <span className="cyber-text">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Transforming innovative ideas into tangible solutions that drive meaningful progress. 
              Passionate about harnessing technology to elevate our daily lives and create smarter, 
              more efficient digital experiences.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <a 
                href="tel:+918780358139" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 8780358139
              </a>
              <a 
                href="mailto:shahtithi21@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                shahtithi21@gmail.com
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="cyber-button bg-gradient-primary hover:shadow-neon transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="cyber-button hover:bg-primary/10"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-cyber animate-pulse-glow">
                <img 
                  src={profileAvatar} 
                  alt="Tithi Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Tech Stack Badges */}
              <div className="absolute -top-4 -right-4 animate-float">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                  React
                </Badge>
              </div>
              <div className="absolute top-16 -left-8 animate-float" style={{ animationDelay: '1s' }}>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  TypeScript
                </Badge>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '2s' }}>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Next.js
                </Badge>
              </div>
              <div className="absolute bottom-16 -right-8 animate-float" style={{ animationDelay: '3s' }}>
                <Badge className="bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                  Node.js
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;