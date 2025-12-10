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
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-forest hover:bg-forest/5 rounded-full"
            onClick={() => setIsOpen(true)}
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
              className="fixed inset-0 bg-black/20 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-cream z-50 shadow-xl md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-forest/10">
                <span className="font-serif text-xl text-forest font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-charcoal/60 hover:text-forest">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        location === link.href ? "text-forest" : "text-charcoal/80"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
