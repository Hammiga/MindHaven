import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">About Us</h1>
        
        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading mb-4 text-center text-primary">Our Mission</h2>
            <div className="bg-primary/5 p-6 rounded-xl">
              <p className="mb-4 text-lg">
                At MindHaven, we believe that mental health is just as important as physical health. 
                Our mission is to provide accessible, user-friendly tools to help you nurture your 
                mental wellbeing and build resilience in your daily life.
              </p>
              <p className="mb-4 text-lg">
                We created MindHaven to be a sanctuary for your mental health journey - a place where 
                you can track your moods, express your thoughts, find daily affirmations, and access 
                helpful resources during difficult times.
              </p>
              <p className="text-lg">
                Whether you're experiencing a mental health condition or simply looking to maintain 
                good mental health practices, MindHaven is designed to support your unique journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* Creators Section */}
        <section>
          <h2 className="text-2xl font-heading mb-8 text-center text-primary">Meet the Creators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Hamzah Choudhry */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/80 to-primary h-24"></div>
              <div className="relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-3xl font-heading text-primary">HC</span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-20 text-center">
                <h3 className="text-xl font-heading mb-2 mt-4">Hamzah Choudhry</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Developer</p>
                <p className="mb-6 text-sm px-4">
                  Passionate about using technology to create positive impact in mental health. 
                  Hamzah brings expertise in web development and user experience design.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* Manav Raghuram */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/80 to-primary h-24"></div>
              <div className="relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-3xl font-heading text-primary">MR</span>
                  </div>
                </div>
              </div>
              <CardContent className="pt-20 text-center">
                <h3 className="text-xl font-heading mb-2 mt-4">Manav Raghuram</h3>
                <p className="text-muted-foreground mb-4">Co-Founder & Developer</p>
                <p className="mb-6 text-sm px-4">
                  Dedicated to making mental health resources more accessible. Manav combines his 
                  technical skills with a deep interest in mental wellness.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading mb-6 text-center text-primary">Our Values</h2>
          <div className="grid gap-6">
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="text-lg font-heading mb-3">Accessibility</h3>
              <p>Mental health resources should be available to everyone. We strive to make our tools straightforward and easy to use.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="text-lg font-heading mb-3">Empowerment</h3>
              <p>We believe in giving people the tools they need to take control of their mental wellness journey.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="text-lg font-heading mb-3">Privacy</h3>
              <p>Your personal data and thoughts are yours alone. We prioritize security and privacy in everything we build.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl">
              <h3 className="text-lg font-heading mb-3">Community</h3>
              <p>Mental health is a shared human experience. While respecting privacy, we aim to foster a sense of connection.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;