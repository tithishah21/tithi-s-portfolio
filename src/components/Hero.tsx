import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-accent rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary-glow rounded-full animate-float"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center animate-slide-up">
          
          {/* Text Content */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors">
                <MapPin className="h-3 w-3 mr-1" />
                Ahmedabad, Gujarat, India
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block cyber-text">
                TITHI SHAH
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              <span className="text-muted-foreground">Full-Stack Developer & Computer Science Student</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed mx-auto">
              Transforming innovative ideas into tangible solutions that drive meaningful progress. 
              Passionate about harnessing technology to elevate our daily lives and create smarter, 
              more efficient digital experiences.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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
            <div className="flex justify-center gap-4">
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