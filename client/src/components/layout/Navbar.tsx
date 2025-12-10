import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X, Search, Home, ShoppingCart, BookOpen, Heart, Leaf } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/shop", label: "Shop", icon: ShoppingCart },
    { href: "/story", label: "Our Story", icon: BookOpen },
    { href: "/sanctuary", label: "Sanctuary", icon: Heart },
    { href: "/ingredients", label: "Ingredients", icon: Leaf },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-cream/95 backdrop-blur-sm border-b border-forest/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button - High contrast and clear touch target */}
          <button 
            className="md:hidden p-3 -ml-2 text-forest bg-forest/10 rounded-full hover:bg-forest/20 active:bg-forest/30 transition-colors z-50 relative"
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
            {/* Overlay - Darker for better focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-[50] md:hidden backdrop-blur-sm"
            />
            
            {/* Drawer - Higher Z-index */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[60] shadow-2xl md:hidden flex flex-col border-r-2 border-forest"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center bg-forest text-white">
                <span className="font-serif text-2xl font-bold tracking-tight">Gracie's Grove</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 text-white bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Links */}
              <div className="flex flex-col flex-grow py-6 overflow-y-auto bg-white">
                <div className="px-6 pb-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Navigation</div>
                <div className="flex flex-col">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link key={link.href} href={link.href}>
                        <a 
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-6 py-5 border-b border-gray-100 transition-colors ${
                            location === link.href 
                              ? "bg-forest/5 text-forest font-bold border-l-4 border-l-forest" 
                              : "text-gray-800 hover:bg-gray-50 font-medium border-l-4 border-l-transparent"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${location === link.href ? "text-forest" : "text-gray-400"}`} />
                          <span className="text-lg">{link.label}</span>
                        </a>
                      </Link>
                    );
                  })}
                </div>
                
                <div className="mt-8 px-6">
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Account</div>
                   <button className="w-full text-left py-3 px-4 mb-2 rounded bg-gray-50 text-gray-800 font-medium hover:bg-gray-100 border border-gray-200">
                     Log In
                   </button>
                   <button className="w-full text-left py-3 px-4 rounded bg-forest text-white font-bold hover:bg-forest/90 shadow-md">
                     Create Account
                   </button>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <p className="text-sm font-serif italic text-center text-forest">
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
