import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, 
  Bookmark,
  Crown,
  Heart,
  Brain,
  Scale,
  Wind
} from "lucide-react";

const affirmations = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Take it one step at a time.",
  "You are enough just as you are.",
  "Don't forget to breathe.",
  "You have the power to create change.",
  "Today, you will make progress.",
  "You've overcome challenges before.",
  "Your mind is a powerful ally.",
  "Every small step is a victory."
];

const Affirmation = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [favoriteAffirmations, setFavoriteAffirmations] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Load random affirmation on component mount
    getRandomAffirmation();
    
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("favoriteAffirmations");
    if (savedFavorites) {
      setFavoriteAffirmations(JSON.parse(savedFavorites));
    }
  }, []);

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  const saveToFavorites = () => {
    if (!favoriteAffirmations.includes(currentAffirmation)) {
      const updatedFavorites = [...favoriteAffirmations, currentAffirmation];
      setFavoriteAffirmations(updatedFavorites);
      localStorage.setItem("favoriteAffirmations", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <section id="affirmation" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Today's Affirmation</h2>
          
          <div className="text-center">
            <div className="inline-block font-heading text-2xl md:text-3xl text-accent px-8 py-6 my-6 border-2 border-accent/20 rounded-2xl bg-accent/5 max-w-3xl mx-auto">
              {currentAffirmation}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={getRandomAffirmation}
                className="bg-primary hover:bg-primary/90"
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Next Affirmation
              </Button>
              
              <Button 
                variant="outline"
                onClick={saveToFavorites}
                disabled={favoriteAffirmations.includes(currentAffirmation)}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Bookmark className="mr-2 h-4 w-4" /> Save to Favorites
              </Button>
            </div>
            
            <div className="mt-8">
              <h3 className="font-heading text-xl mb-4">Affirmation Categories</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => setActiveCategory("all")}
                  className={activeCategory === "all" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  All
                </Button>
                <Button 
                  variant={activeCategory === "leadership" ? "default" : "outline"}
                  onClick={() => setActiveCategory("leadership")}
                  className={activeCategory === "leadership" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  <Crown className="mr-2 h-4 w-4" /> Leadership
                </Button>
                <Button 
                  variant={activeCategory === "resilience" ? "default" : "outline"}
                  onClick={() => setActiveCategory("resilience")}
                  className={activeCategory === "resilience" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  <Heart className="mr-2 h-4 w-4" /> Resilience
                </Button>
                <Button 
                  variant={activeCategory === "growth" ? "default" : "outline"}
                  onClick={() => setActiveCategory("growth")}
                  className={activeCategory === "growth" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  <Brain className="mr-2 h-4 w-4" /> Growth Mindset
                </Button>
                <Button 
                  variant={activeCategory === "balance" ? "default" : "outline"}
                  onClick={() => setActiveCategory("balance")}
                  className={activeCategory === "balance" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  <Scale className="mr-2 h-4 w-4" /> Work-Life Balance
                </Button>
                <Button 
                  variant={activeCategory === "stress" ? "default" : "outline"}
                  onClick={() => setActiveCategory("stress")}
                  className={activeCategory === "stress" ? "bg-primary" : "border-primary text-primary"}
                  size="sm"
                >
                  <Wind className="mr-2 h-4 w-4" /> Stress Management
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Affirmation;
