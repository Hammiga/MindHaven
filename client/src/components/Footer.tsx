import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Facebook, Cloud, CloudSun, CloudMoon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary/90 to-primary/70 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white/10 opacity-30"></div>
      <div className="absolute -top-10 left-20 opacity-10 text-white float">
        <Cloud size={80} />
      </div>
      <div className="absolute top-20 right-10 opacity-10 text-white float-slow">
        <CloudSun size={60} />
      </div>
      <div className="absolute -bottom-10 left-1/3 opacity-10 text-white float-fast">
        <CloudMoon size={70} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm p-6 rounded-2xl bg-white/5">
            <h3 className="font-heading text-xl mb-4">MindHaven</h3>
            <p className="text-white/90">Supporting your mental health journey with trusted resources and tools.</p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-white hover:text-white/80 transition p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-white/80 transition p-2 bg-white/10 rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="backdrop-blur-sm p-6 rounded-2xl bg-white/5">
            <h3 className="font-heading text-lg mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mood-tracker">
                  <a className="text-white/90 hover:text-white transition hover:underline">Mood Tracker</a>
                </Link>
              </li>
              <li>
                <Link href="/journal">
                  <a className="text-white/90 hover:text-white transition hover:underline">Journal</a>
                </Link>
              </li>
              <li>
                <Link href="/affirmations">
                  <a className="text-white/90 hover:text-white transition hover:underline">Affirmations</a>
                </Link>
              </li>
              <li>
                <Link href="/coping-strategies">
                  <a className="text-white/90 hover:text-white transition hover:underline">Coping Strategies</a>
                </Link>
              </li>
              <li>
                <Link href="/chatbot">
                  <a className="text-white/90 hover:text-white transition hover:underline">MindBuddy Chatbot</a>
                </Link>
              </li>
              <li>
                <Link href="/sos">
                  <a className="text-white/90 hover:text-white transition hover:underline">Crisis Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/90 hover:text-white transition hover:underline">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-sm p-6 rounded-2xl bg-white/5">
            <h3 className="font-heading text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.nimh.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition hover:underline">National Institute of Mental Health</a></li>
              <li><a href="https://www.nami.org/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition hover:underline">National Alliance on Mental Illness</a></li>
              <li><a href="https://www.mentalhealth.gov/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition hover:underline">MentalHealth.gov</a></li>
              <li><a href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition hover:underline">Psychology Today</a></li>
              <li>
                <Link href="/sos">
                  <a className="text-white/90 hover:text-white transition hover:underline">Crisis Resources</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/90">&copy; 2025 MindHaven. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white/90 hover:text-white transition hover:underline">Privacy Policy</a>
            <a href="#" className="text-white/90 hover:text-white transition hover:underline">Terms of Service</a>
            <a href="#" className="text-white/90 hover:text-white transition hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
