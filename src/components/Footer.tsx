import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Heart, Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:shahtithi21@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-primary/20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold cyber-text mb-4">TITHI.DEV</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-Stack Developer & Computer Science Engineering student passionate about 
                transforming innovative ideas into meaningful technological solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Full-Stack Developer
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                CS Engineering Student
              </Badge>
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Problem Solver
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>📍 Ahmedabad, Gujarat, India</div>
              <div>📧 shahtithi21@gmail.com</div>
              <div>📱 +91 8780358139</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start hover:text-primary transition-colors p-0 h-auto"
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {social.name}
                  </Button>
                );
              })}
            </div>

            {/* Current Status */}
            <div className="mt-6">
              <Badge className="bg-primary-glow/20 text-primary-glow border-primary-glow/30 animate-pulse-glow">
                🚀 Available for Opportunities
              </Badge>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Tithi Shah. Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-secondary" />
            <span>using React + TypeScript</span>
          </div>

          {/* Scroll to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="cyber-button hover:bg-primary/10 border-primary/30 hover:border-primary"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Tech Stack Credits */}
        <div className="border-t border-primary/10 py-4">
          <div className="text-center text-xs text-muted-foreground">
            <p className="mb-2">Built with modern technologies:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'].map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-xs border-primary/20 text-primary/70"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full cyber-button bg-gradient-primary hover:shadow-neon transition-all duration-300 z-50 md:hidden"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;