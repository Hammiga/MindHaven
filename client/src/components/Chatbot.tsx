import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Check, Bell, User } from "lucide-react";

const Chatbot = () => {
  return (
    <section id="chatbot" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">MindBuddy Chatbot</h2>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="md:w-2/3">
              <div className="bg-neutral-lightest p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-heading text-lg">MindBuddy Assistant</h3>
                    <p className="text-sm text-muted-foreground">Mental health guidance</p>
                  </div>
                  <span className="ml-auto px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">Coming Soon</span>
                </div>
                
                <p className="mb-4">MindBuddy is being developed to provide personalized, AI-powered guidance for mental health challenges.</p>
                
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="text-muted-foreground">Hello! I'm MindBuddy, your mental health assistant. How can I support your wellbeing today?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-light flex items-center justify-center text-muted-foreground shrink-0 mt-1">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="text-muted-foreground">I'm feeling anxious about an upcoming deadline.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="text-muted-foreground">I understand how deadlines can create anxiety. Let's explore some strategies to manage that anxiety and help you focus on what you can control...</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Join our waitlist to be notified when MindBuddy launches..."
                    disabled
                    className="w-full pl-10 bg-white/50 opacity-75"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-heading text-xl mb-4">Features Coming Soon</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                    <span>24/7 automated support for mental health concerns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                    <span>Personalized coping strategies based on your mood data</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                    <span>Evidence-based techniques for anxiety, stress, and low mood</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                    <span>Integration with your journal and mood tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                    <span>Wellness check-ins and progress monitoring</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button className="w-full">
                    <Bell className="mr-2 h-4 w-4" /> Join MindBuddy Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Chatbot;
