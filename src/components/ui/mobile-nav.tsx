import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

interface MobileNavProps {
  onNavigate: (sectionId: string) => void;
}

export const MobileNav = ({ onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'the-pain', label: 'The Pain', icon: '💀' },
    { id: 'the-solution', label: 'The Solution', icon: '💡' },
    { id: 'join-beta', label: 'Join Beta', icon: '🚀' },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      {/* Mobile Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-black text-white bagr-text tracking-[0.2em]">
            BAGЯ
          </div>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(true)}
            className="p-2 text-white hover:bg-white/10 transition-all duration-200"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-gradient-to-br from-background via-card to-background border-l border-primary/30 shadow-2xl animate-slide-in-right">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20">
              <div className="text-2xl font-black text-white bagr-text tracking-[0.2em]">
                BAGЯ
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:bg-white/10 transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-card/60 to-card/40 border border-primary/20 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group active:scale-95 touch-manipulation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    </div>
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </button>
              ))}

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const signupForm = document.getElementById('signup-form');
                      if (signupForm) {
                        signupForm.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      } else {
                        // Fallback to join-beta section
                        document.getElementById('join-beta')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }, 300);
                  }}
                  className="w-full h-16 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] text-background font-black text-lg rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 active:scale-95 touch-manipulation relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="group-hover:animate-bounce">🔥</span>
                    CLAIM YOUR SPOT
                    <span className="group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}>🔥</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                Beat. Bid. Bag.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
