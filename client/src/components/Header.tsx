import { Link, useLocation } from "wouter";
import { Cloud, CloudSun } from "lucide-react";

const Header = () => {
  const [location] = useLocation();

  return (
    <header className="bg-gradient-to-b from-primary/90 to-primary/70 backdrop-blur-md text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-6 md:py-8 relative overflow-hidden">
        {/* Decorative clouds */}
        <div className="absolute -top-10 left-5 opacity-20 text-white float-slow">
          <Cloud size={80} />
        </div>
        <div className="absolute top-20 right-10 opacity-10 text-white float">
          <Cloud size={60} />
        </div>
        <div className="absolute -bottom-10 right-1/4 opacity-15 text-white float-fast">
          <Cloud size={70} />
        </div>
        
        <div className="text-center relative z-10">
          <Link href="/">
            <div className="inline-block cursor-pointer group">
              <div className="flex justify-center items-center space-x-3 mb-2">
                <CloudSun className="h-10 w-10 text-white/90 group-hover:text-white transition-all duration-300" />
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-wider">MindHaven</h1>
              </div>
              <p className="mt-1 text-primary-foreground/80">Your sanctuary for mental wellbeing</p>
            </div>
          </Link>
        </div>
        
        <nav className="mt-6 md:mt-8 relative z-10">
          <div className="cloud-gradient rounded-2xl shadow-lg backdrop-blur-md mx-auto max-w-5xl">
            <ul className="flex flex-wrap justify-center p-1 md:p-2 text-sm md:text-base overflow-x-auto whitespace-nowrap">
              <li className="mx-1">
                <Link href="/mood-tracker">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/mood-tracker' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    Mood Tracker
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/journal">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/journal' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    Journal
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/affirmations">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/affirmations' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    Affirmations
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/coping-strategies">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/coping-strategies' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    Coping Strategies
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/chatbot">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/chatbot' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    Chatbot
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/sos">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/sos' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    SOS Help
                  </div>
                </Link>
              </li>
              <li className="mx-1">
                <Link href="/about">
                  <div className={`block px-3 py-2 md:px-5 md:py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    location === '/about' 
                      ? 'bg-white/80 text-primary shadow-md' 
                      : 'hover:bg-white/30 text-primary-foreground hover:text-primary'
                  }`}>
                    About Us
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
