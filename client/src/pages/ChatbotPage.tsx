import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const ChatbotPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-heading text-center mb-8">MindBuddy Chatbot</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Meet MindBuddy, your AI companion for mental wellness support. Ask questions, get resources,
          or simply chat when you need someone to talk to.
        </p>
        <Chatbot />
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatbotPage;