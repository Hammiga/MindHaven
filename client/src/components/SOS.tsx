import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Globe, MessageSquare, Heart, Building2, ZoomOut } from "lucide-react";

const SOS = () => {
  return (
    <section id="sos" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Emergency Help</h2>
          
          <div className="bg-accent/10 p-6 rounded-lg mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h3 className="font-heading text-xl text-accent mb-2">Need immediate support?</h3>
                <p className="text-muted-foreground max-w-xl">If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out to one of these resources immediately.</p>
              </div>
              
              <a 
                href="tel:988" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" /> Call 988 Crisis Hotline
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource 1 */}
            <div className="border border-neutral rounded-lg overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-lg">National Crisis Resources</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://988lifeline.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      <span>National Suicide Prevention Lifeline</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.crisistextline.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Crisis Text Line (Text HOME to 741741)</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.samhsa.gov/find-help/national-helpline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <span>SAMHSA's National Helpline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Resource 2 */}
            <div className="border border-neutral rounded-lg overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-lg">Specialized Support</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.veteranscrisisline.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      <span>Veterans Crisis Line</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.thetrevorproject.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      <span>The Trevor Project (LGBTQ+)</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.thehotline.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <span>National Domestic Violence Hotline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Resource 3 */}
            <div className="border border-neutral rounded-lg overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="font-heading text-lg">Find Professional Help</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.psychologytoday.com/us/therapists" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <ZoomOut className="mr-2 h-4 w-4" />
                      <span>Find a Therapist</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://findtreatment.samhsa.gov/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Building2 className="mr-2 h-4 w-4" />
                      <span>SAMHSA Treatment Locator</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.nami.org/Support-Education/NAMI-HelpLine" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/90"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      <span>NAMI HelpLine</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SOS;
