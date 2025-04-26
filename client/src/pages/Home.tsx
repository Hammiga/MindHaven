import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Smile, 
  BookOpen, 
  SunMedium, 
  Brain, 
  Bot, 
  Shield, 
  Cloud, 
  CloudSun, 
  CloudRain, 
  CloudFog
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden">
          {/* Decorative floating clouds */}
          <div className="absolute top-10 left-10 opacity-10 text-primary float-slow">
            <Cloud size={120} />
          </div>
          <div className="absolute top-40 right-10 opacity-10 text-primary float">
            <CloudSun size={80} />
          </div>
          <div className="absolute -bottom-10 left-1/3 opacity-10 text-primary float-fast">
            <CloudFog size={100} />
          </div>
          
          {/* Hero content */}
          <div className="cloud-gradient relative z-10 rounded-3xl p-10 shadow-xl backdrop-blur-md max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary">Welcome to MindHaven</h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground cloud-text">Your sanctuary for mental wellbeing and peaceful reflection</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about">
                  <Button className="bg-primary/90 hover:bg-primary text-lg py-6 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/mood-tracker">
                  <Button variant="outline" className="border-primary/80 text-primary hover:bg-primary/10 text-lg py-6 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 relative">
          <div className="absolute -top-20 right-1/4 opacity-10 text-primary float-slow">
            <CloudRain size={60} />
          </div>
          
          <h2 className="text-3xl font-heading text-center mb-12 text-primary">Find Your Mental Clarity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cloud-card group p-1">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <Smile className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">Mood Tracker</h3>
                <p className="mb-4 cloud-text">Track your emotions and identify patterns to better understand your mental health journey.</p>
                <Link href="/mood-tracker">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    Track Your Mood <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
            
            <div className="cloud-card group p-1 float-slow">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">Journal</h3>
                <p className="mb-4 cloud-text">Document your thoughts and feelings in a safe, private space for personal reflection.</p>
                <Link href="/journal">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    Write a Journal <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
            
            <div className="cloud-card group p-1">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <SunMedium className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">Affirmations</h3>
                <p className="mb-4 cloud-text">Discover daily positive affirmations to boost your mood and reinforce self-confidence.</p>
                <Link href="/affirmations">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    Get Affirmations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
            
            <div className="cloud-card group p-1 float-fast">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">Coping Strategies</h3>
                <p className="mb-4 cloud-text">Learn evidence-based techniques to manage stress, anxiety, and other challenging emotions.</p>
                <Link href="/coping-strategies">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    Explore Strategies <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
            
            <div className="cloud-card group p-1">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">MindBuddy Chatbot</h3>
                <p className="mb-4 cloud-text">Coming soon: AI-powered support for your mental health journey, available 24/7.</p>
                <Link href="/chatbot">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    Preview Chatbot <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
            
            <div className="cloud-card group p-1 float-slow">
              <CardContent className="p-6 backdrop-blur-sm rounded-3xl">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3 text-primary">Crisis Resources</h3>
                <p className="mb-4 cloud-text">Access emergency help and professional resources when you need immediate support.</p>
                <Link href="/sos">
                  <Button className="w-full bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300">
                    View Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-16 my-8 relative">
          <div className="absolute top-0 left-10 opacity-10 text-primary float">
            <CloudSun size={70} />
          </div>
          <div className="absolute bottom-0 right-10 opacity-10 text-primary float-slow">
            <CloudRain size={50} />
          </div>
          
          <div className="cloud-gradient rounded-3xl p-10 shadow-xl max-w-3xl mx-auto relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-heading mb-6 text-primary">Our Mission</h2>
              <p className="text-lg mb-4 cloud-text">
                At MindHaven, we believe that mental health is just as important as physical health. 
                Our mission is to provide accessible, user-friendly tools to help you nurture your 
                mental wellbeing and build resilience in your daily life.
              </p>
              <p className="text-lg cloud-text">
                Whether you're looking to track your moods, practice mindfulness, or find coping 
                strategies during difficult times, we're here to support your journey toward 
                better mental health.
              </p>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-primary/80 hover:bg-primary rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
