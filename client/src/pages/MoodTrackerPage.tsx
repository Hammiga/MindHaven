import Header from "@/components/Header";
import MoodTracker from "@/components/MoodTracker";
import Footer from "@/components/Footer";

const MoodTrackerPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">Mood Tracker</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Monitor your emotional wellbeing over time. Identify patterns and triggers to better 
          understand your mental health journey.
        </p>
        <MoodTracker />
      </main>
      
      <Footer />
    </div>
  );
};

export default MoodTrackerPage;