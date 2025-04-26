import Header from "@/components/Header";
import Affirmation from "@/components/Affirmation";
import Footer from "@/components/Footer";

const AffirmationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">Daily Affirmations</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Discover positive affirmations to boost your mood, build confidence, and cultivate a 
          healthy mindset. Save your favorites for daily inspiration.
        </p>
        <Affirmation />
      </main>
      
      <Footer />
    </div>
  );
};

export default AffirmationPage;