import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get affirmations
  app.get('/api/affirmations', (req, res) => {
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
    
    res.json(affirmations);
  });

  // API endpoint to get coping resources
  app.get('/api/coping-resources', (req, res) => {
    const resources = {
      breathing: [
        { name: "4-7-8 Breathing Technique", url: "https://www.headspace.com/meditation/breathing-exercises" },
        { name: "Box Breathing for Focus", url: "https://www.headspace.com/meditation/box-breathing" },
        { name: "Pursed Lip Breathing", url: "https://www.healthline.com/health/pursed-lip-breathing" }
      ],
      mindfulness: [
        { name: "5-Minute Breathing Meditation", url: "https://www.mindful.org/a-five-minute-breathing-meditation/" },
        { name: "Body Scan Meditation", url: "https://www.mindful.org/a-15-minute-body-scan-meditation/" },
        { name: "Gratitude Practice", url: "https://www.mindful.org/a-five-minute-gratitude-practice/" }
      ],
      crisis: [
        { name: "National Suicide Prevention Lifeline", url: "https://988lifeline.org/" },
        { name: "Crisis Text Line", url: "https://www.crisistextline.org/" },
        { name: "SAMHSA's National Helpline", url: "https://www.samhsa.gov/find-help/national-helpline" }
      ]
    };
    
    res.json(resources);
  });

  const httpServer = createServer(app);

  return httpServer;
}
