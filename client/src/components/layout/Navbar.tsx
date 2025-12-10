import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/story", label: "Our Story" },
    { href: "/sanctuary", label: "The Sanctuary" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-forest/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button - Increased contrast and touch target */}
          <button 
            className="md:hidden p-3 -ml-2 text-forest bg-forest/5 rounded-full hover:bg-forest/10 active:bg-forest/20 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/">
            <a className="text-2xl md:text-3xl font-serif font-bold text-forest tracking-tight">
              Gracie's Grove
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`text-sm uppercase tracking-wider font-medium hover:text-forest transition-colors ${
                  location === link.href ? "text-forest border-b-2 border-forest" : "text-charcoal/80"
                }`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-charcoal/80 hover:text-forest transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-charcoal/80 hover:text-forest transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-0 w-2 h-2 bg-tan rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-cream z-50 shadow-2xl md:hidden flex flex-col border-r border-forest/10"
            >
              <div className="p-6 flex justify-between items-center border-b border-forest/10 bg-white">
                <span className="font-serif text-2xl text-forest font-bold tracking-tight">Gracie's Grove</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 text-forest bg-forest/5 hover:bg-forest/10 rounded-full transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col p-6 gap-3 overflow-y-auto">
                <div className="text-xs font-bold text-sage uppercase tracking-widest mb-2 px-4">Menu</div>
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-bold px-4 py-4 rounded-xl transition-all flex items-center justify-between group ${
                        location === link.href 
                          ? "bg-forest text-cream shadow-md" 
                          : "text-forest hover:bg-forest/5 border border-transparent hover:border-forest/10"
                      }`}
                    >
                      {link.label}
                      {/* Add subtle arrow for affordance */}
                      <span className={`opacity-0 group-hover:opacity-100 transition-opacity ${location === link.href ? "opacity-100" : ""}`}>→</span>
                    </a>
                  </Link>
                ))}
                
                <div className="border-t border-forest/10 my-4 pt-6">
                  <div className="text-xs font-bold text-sage uppercase tracking-widest mb-4 px-4">Account</div>
                  <button className="w-full text-left text-lg font-medium text-charcoal/80 px-4 py-3 hover:text-forest transition-colors">
                    Log In
                  </button>
                  <button className="w-full text-left text-lg font-medium text-charcoal/80 px-4 py-3 hover:text-forest transition-colors">
                    Create Account
                  </button>
                </div>
              </div>
              
              {/* Mobile Footer in Menu */}
              <div className="mt-auto p-6 bg-forest text-cream">
                <p className="text-sm font-serif italic text-center text-cream/90">
                  "Healing from the Heart"
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
