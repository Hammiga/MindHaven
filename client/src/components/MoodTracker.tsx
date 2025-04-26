import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Frown, 
  Loader, 
  AlertTriangle,
  Clock,
  Rocket,
  BrainCircuit
} from "lucide-react";

type Mood = "Happy" | "Sad" | "Stressed" | "Focused" | "Productive" | "Overwhelmed" | "None";

const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState<Mood>("None");
  const [moodHistory, setMoodHistory] = useState<Array<{mood: Mood, timestamp: string}>>([]);

  useEffect(() => {
    // Load mood from localStorage on component mount
    const savedMood = localStorage.getItem("mood") as Mood;
    if (savedMood) {
      setCurrentMood(savedMood);
    }

    // Load mood history from localStorage
    const savedHistory = localStorage.getItem("moodHistory");
    if (savedHistory) {
      setMoodHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleMoodSelection = (mood: Mood) => {
    setCurrentMood(mood);
    
    // Save to localStorage
    localStorage.setItem("mood", mood);
    
    // Update mood history
    const newMoodEntry = {
      mood: mood,
      timestamp: new Date().toLocaleString()
    };
    
    const updatedHistory = [newMoodEntry, ...moodHistory.slice(0, 9)]; // Keep last 10 entries
    setMoodHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
  };

  const getMoodIcon = (mood: Mood) => {
    switch(mood) {
      case "Happy": return <Smile className="h-6 w-6 text-primary" />;
      case "Sad": return <Frown className="h-6 w-6 text-primary" />;
      case "Stressed": return <AlertTriangle className="h-6 w-6 text-primary" />;
      case "Focused": return <BrainCircuit className="h-6 w-6 text-primary" />;
      case "Productive": return <Rocket className="h-6 w-6 text-primary" />;
      case "Overwhelmed": return <Loader className="h-6 w-6 text-primary" />;
      default: return <Clock className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="mood-tracker" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Mood Tracker</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Track your emotional well-being to identify patterns and triggers.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <Button
                  variant={currentMood === "Happy" ? "default" : "outline"} 
                  onClick={() => handleMoodSelection("Happy")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <Smile className="h-6 w-6" />
                  <span>Happy</span>
                </Button>
                
                <Button
                  variant={currentMood === "Sad" ? "default" : "outline"}
                  onClick={() => handleMoodSelection("Sad")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <Frown className="h-6 w-6" />
                  <span>Sad</span>
                </Button>
                
                <Button
                  variant={currentMood === "Stressed" ? "default" : "outline"}
                  onClick={() => handleMoodSelection("Stressed")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <AlertTriangle className="h-6 w-6" />
                  <span>Stressed</span>
                </Button>
                
                <Button
                  variant={currentMood === "Focused" ? "default" : "outline"}
                  onClick={() => handleMoodSelection("Focused")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <BrainCircuit className="h-6 w-6" />
                  <span>Focused</span>
                </Button>
                
                <Button
                  variant={currentMood === "Productive" ? "default" : "outline"}
                  onClick={() => handleMoodSelection("Productive")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <Rocket className="h-6 w-6" />
                  <span>Productive</span>
                </Button>
                
                <Button
                  variant={currentMood === "Overwhelmed" ? "default" : "outline"}
                  onClick={() => handleMoodSelection("Overwhelmed")}
                  className="flex flex-col items-center gap-2 p-4 h-auto"
                >
                  <Loader className="h-6 w-6" />
                  <span>Overwhelmed</span>
                </Button>
              </div>
              
              <div className="p-4 bg-neutral-lightest rounded-lg">
                <p className="mb-2">Your current mood:</p>
                <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-xl font-semibold text-primary flex items-center gap-2">
                    {currentMood === "None" ? "None recorded yet" : (
                      <>
                        {getMoodIcon(currentMood)} {currentMood}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mood-history">
              <h3 className="font-heading text-xl mb-4">Your Mood History</h3>
              <div className="bg-neutral-lightest p-4 rounded-lg h-64 overflow-y-auto">
                {moodHistory.length === 0 ? (
                  <p className="text-center text-muted-foreground p-4">No mood history recorded yet.</p>
                ) : (
                  moodHistory.map((entry, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm mb-3 flex justify-between items-center">
                      <div>
                        <span className="text-primary font-semibold">{entry.mood}</span>
                        <p className="text-sm text-muted-foreground">{entry.timestamp}</p>
                      </div>
                      {getMoodIcon(entry.mood)}
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-4">
                <Button 
                  className="w-full"
                  disabled={moodHistory.length === 0}
                >
                  Generate Weekly Mood Report
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MoodTracker;
