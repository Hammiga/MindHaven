import Header from "@/components/Header";
import Journal from "@/components/Journal";
import Footer from "@/components/Footer";

const JournalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">Journal</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Express yourself freely in your personal journal. Organize your thoughts, process emotions, 
          and track your personal growth over time.
        </p>
        <Journal />
      </main>
      
      <Footer />
    </div>
  );
};

export default JournalPage;