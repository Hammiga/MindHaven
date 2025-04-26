import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Stethoscope, Brain, Timer, Users, ActivitySquare, BookOpen } from "lucide-react";

const CopingStrategies = () => {
  return (
    <section id="coping-strategies" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Coping Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Strategy Card 1 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <Stethoscope className="mr-2 h-6 w-6" /> Breathing Techniques
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Quick breathing exercises to help you calm down and center yourself in moments of stress.</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.headspace.com/meditation/breathing-exercises" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">4-7-8 Breathing Technique</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.headspace.com/meditation/box-breathing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Box Breathing for Focus</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.healthline.com/health/pursed-lip-breathing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Pursed Lip Breathing</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Strategy Card 2 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <Brain className="mr-2 h-6 w-6" /> Mindfulness Practices
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Mindfulness exercises to help you stay present and manage overwhelming thoughts and feelings.</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.mindful.org/a-five-minute-breathing-meditation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">5-Minute Breathing Meditation</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.mindful.org/a-15-minute-body-scan-meditation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Body Scan Meditation</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.mindful.org/a-five-minute-gratitude-practice/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Gratitude Practice</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Strategy Card 3 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <Timer className="mr-2 h-6 w-6" /> Time Management
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Strategies to help you manage your time effectively and reduce stress from overwhelm.</p>
                <div className="space-y-2">
                  <a 
                    href="https://todoist.com/productivity-methods/pomodoro-technique" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Pomodoro Technique</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://todoist.com/productivity-methods/eisenhower-matrix" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Eisenhower Matrix</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://todoist.com/productivity-methods/eat-the-frog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Eat The Frog Method</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Strategy Card 4 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <Users className="mr-2 h-6 w-6" /> Social Support
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Resources to help you build and maintain a strong support network.</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.nami.org/Support-Education/NAMI-Programs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Support Groups (NAMI)</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.7cups.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Online Listeners (7 Cups)</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.meetup.com/topics/mental-health/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Mental Health Meetups</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Strategy Card 5 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <ActivitySquare className="mr-2 h-6 w-6" /> Physical Wellbeing
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Strategies to maintain physical health, which directly impacts mental wellbeing.</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Sleep Hygiene Tips</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.health.harvard.edu/blog/how-simply-moving-benefits-your-mental-health-201603289350" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Exercise for Mental Health</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Nutrition and Mental Health</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Strategy Card 6 */}
            <div className="bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-xl flex items-center">
                  <BookOpen className="mr-2 h-6 w-6" /> Educational Resources
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-4">Learn more about mental health and wellbeing with these resources.</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.nimh.nih.gov/health" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">NIMH Resources</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.mentalhealth.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">MentalHealth.gov</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.psychologytoday.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-2 bg-white rounded border border-neutral hover:border-primary transition flex items-center"
                  >
                    <span className="mr-auto">Psychology Today</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CopingStrategies;
