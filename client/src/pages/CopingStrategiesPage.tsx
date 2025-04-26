import Header from "@/components/Header";
import CopingStrategies from "@/components/CopingStrategies";
import Footer from "@/components/Footer";

const CopingStrategiesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">Coping Strategies</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Explore evidence-based techniques to manage stress, anxiety, and challenging emotions.
          Find healthy ways to cope during difficult times.
        </p>
        <CopingStrategies />
      </main>
      
      <Footer />
    </div>
  );
};

export default CopingStrategiesPage;