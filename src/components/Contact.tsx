import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahtithi21@gmail.com",
      href: "mailto:shahtithi21@gmail.com",
      description: "Feel free to reach out for collaborations or opportunities"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8780358139",
      href: "tel:+918780358139",
      description: "Available for calls during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
      description: "Open to remote opportunities worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      description: "Check out my latest projects and contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      description: "Connect with me professionally"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:shahtithi21@gmail.com",
      description: "Direct email communication"
    }
  ];

  const quickLinks = [
    {
      title: "Resume/CV",
      description: "Download my latest resume with detailed experience",
      icon: Download,
      action: "Download",
      color: "primary"
    },
    {
      title: "GitHub Portfolio",
      description: "Explore my projects and code repositories",
      icon: Github,
      action: "Visit",
      color: "secondary"
    },
    {
      title: "LinkedIn Profile",
      description: "Connect and view my professional network",
      icon: Linkedin,
      action: "Connect",
      color: "accent"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:shahtithi21@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Show success toast
    toast({
      title: "Email Client Opened",
      description: "Your email client should open with the pre-filled message. Please send the email to complete your message.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 0 12px #3b82f6, 0 2px 8px #000'}}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect and explore opportunities to create innovative solutions together. 
            I'm always excited to discuss new projects and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl cyber-text flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="cyber-button"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="cyber-button"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="cyber-button"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      required
                      className="cyber-button resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full cyber-button bg-gradient-primary hover:shadow-neon transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-6">
            
            {/* Contact Info */}
            <Card className="cyber-button border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group">
                      <a 
                        href={info.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-secondary mt-1 group-hover:text-primary transition-colors" />
                        <div className="flex-1">
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {info.description}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Links */}
            

            {/* Social Links */}
            <Card className="cyber-button border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start cyber-button hover:bg-primary/10 border-primary/30 hover:border-primary"
                        onClick={() => window.open(social.href, "_blank")}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        <div className="flex-1 text-left">
                          <div className="font-medium">{social.label}</div>
                          <div className="text-xs text-muted-foreground">{social.description}</div>
                        </div>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="cyber-button border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Badge className="bg-primary-glow/20 text-primary-glow border-primary-glow/30 mb-2">
                  Available for Opportunities
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Currently open to internships, full-time positions, and exciting project collaborations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;