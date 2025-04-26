import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import MoodTrackerPage from "@/pages/MoodTrackerPage";
import JournalPage from "@/pages/JournalPage";
import AffirmationPage from "@/pages/AffirmationPage";
import CopingStrategiesPage from "@/pages/CopingStrategiesPage";
import ChatbotPage from "@/pages/ChatbotPage";
import SOSPage from "@/pages/SOSPage";
import AboutPage from "@/pages/AboutPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mood-tracker" component={MoodTrackerPage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/affirmations" component={AffirmationPage} />
      <Route path="/coping-strategies" component={CopingStrategiesPage} />
      <Route path="/chatbot" component={ChatbotPage} />
      <Route path="/sos" component={SOSPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
