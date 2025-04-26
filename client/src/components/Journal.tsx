import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  Save, 
  Download,
  BadgeCheck,
  Mountain,
  Lightbulb,
  Flag,
  GraduationCap,
  Shield
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type JournalEntry = {
  id: number;
  title: string;
  content: string;
  category: string;
  timestamp: string;
};

const Journal = () => {
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");
  const [journalCategory, setJournalCategory] = useState("");
  const [savedJournals, setSavedJournals] = useState<JournalEntry[]>([]);

  useEffect(() => {
    // Load saved journals from localStorage
    const savedData = localStorage.getItem("journals");
    if (savedData) {
      setSavedJournals(JSON.parse(savedData));
    }
  }, []);

  const handleSaveJournal = () => {
    if (journalTitle.trim() && journalContent.trim()) {
      const newEntry: JournalEntry = {
        id: Date.now(),
        title: journalTitle,
        content: journalContent,
        category: journalCategory,
        timestamp: new Date().toLocaleString()
      };

      const updatedJournals = [newEntry, ...savedJournals];
      setSavedJournals(updatedJournals);
      localStorage.setItem("journals", JSON.stringify(updatedJournals));

      // Clear form
      setJournalTitle("");
      setJournalContent("");
      setJournalCategory("");
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "achievement": return <BadgeCheck className="h-4 w-4" />;
      case "challenge": return <Mountain className="h-4 w-4" />;
      case "insight": return <Lightbulb className="h-4 w-4" />;
      case "goal": return <Flag className="h-4 w-4" />;
      case "learning": return <GraduationCap className="h-4 w-4" />;
      case "conflict": return <Shield className="h-4 w-4" />;
      default: return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case "achievement": return "Achievement";
      case "challenge": return "Challenge";
      case "insight": return "Insight";
      case "goal": return "Goal";
      case "learning": return "Learning";
      case "conflict": return "Conflict";
      default: return "General";
    }
  };

  return (
    <section id="journal" className="py-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-heading mb-6">Journal</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Input
                  id="journal-title"
                  placeholder="Entry title..."
                  value={journalTitle}
                  onChange={(e) => setJournalTitle(e.target.value)}
                  className="w-full p-3"
                />
              </div>
              
              <div className="mb-4">
                <Textarea
                  id="journal-entry"
                  placeholder="Write your thoughts here..."
                  value={journalContent}
                  onChange={(e) => setJournalContent(e.target.value)}
                  className="w-full p-3 h-48"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <Select 
                  value={journalCategory} 
                  onValueChange={setJournalCategory}
                >
                  <SelectTrigger className="w-full flex-1">
                    <SelectValue placeholder="Select a category..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Journal Categories</SelectLabel>
                      <SelectItem value="achievement">Achievement</SelectItem>
                      <SelectItem value="challenge">Challenge Overcome</SelectItem>
                      <SelectItem value="insight">New Insight</SelectItem>
                      <SelectItem value="goal">Goal Setting</SelectItem>
                      <SelectItem value="learning">Learning Experience</SelectItem>
                      <SelectItem value="conflict">Conflict Resolution</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                
                <Button 
                  onClick={handleSaveJournal}
                  disabled={!journalTitle.trim() || !journalContent.trim()}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Save className="mr-2 h-4 w-4" /> Save Journal Entry
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-xl mb-4">Your Saved Entries</h3>
              <div className="bg-neutral-lightest p-4 rounded-lg h-80 overflow-y-auto">
                {savedJournals.length === 0 ? (
                  <p className="text-center text-muted-foreground p-4">No journal entries yet. Start writing!</p>
                ) : (
                  <ul>
                    {savedJournals.map((entry) => (
                      <li key={entry.id} className="bg-white p-3 rounded-lg shadow-sm mb-3 cursor-pointer hover:shadow-md transition">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-primary">{entry.title}</h4>
                          {entry.category && (
                            <span className="text-xs bg-primary text-white px-2 py-1 rounded-full flex items-center gap-1">
                              {getCategoryIcon(entry.category)}
                              {getCategoryLabel(entry.category)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 truncate">{entry.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">{entry.timestamp}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-4">
                <Button 
                  className="w-full"
                  disabled={savedJournals.length === 0}
                >
                  <Download className="mr-2 h-4 w-4" /> Export Journal Entries
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Journal;
