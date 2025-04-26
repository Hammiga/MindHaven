import Header from "@/components/Header";
import SOS from "@/components/SOS";
import Footer from "@/components/Footer";

const SOSPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">Crisis Resources</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          If you're experiencing a mental health crisis, help is available. These resources provide
          immediate support when you need it most.
        </p>
        <SOS />
      </main>
      
      <Footer />
    </div>
  );
};

export default SOSPage;