import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-cream">Gracie's Grove</h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Handcrafted natural skincare & wellness for dogs. Inspired by love, dedicated to awareness.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium text-sage">Shop</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link href="/shop"><a className="hover:text-tan transition-colors">All Products</a></Link></li>
              <li><Link href="/shop?cat=balms"><a className="hover:text-tan transition-colors">Balms & Salves</a></Link></li>
              <li><Link href="/shop?cat=wellness"><a className="hover:text-tan transition-colors">Wellness</a></Link></li>
              <li><Link href="/shop?cat=sets"><a className="hover:text-tan transition-colors">Gift Sets</a></Link></li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium text-sage">Learn</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link href="/story"><a className="hover:text-tan transition-colors">Our Story</a></Link></li>
              <li><Link href="/sanctuary"><a className="hover:text-tan transition-colors">The Sanctuary</a></Link></li>
              <li><Link href="/ingredients"><a className="hover:text-tan transition-colors">Ingredients</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-tan transition-colors">FAQ</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-tan transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium text-sage">Stay Connected</h4>
            <p className="text-sm text-cream/80">Join our pack for wellness tips and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-forest-800 border border-sage/30 rounded px-4 py-2 text-sm w-full text-cream placeholder:text-cream/40 focus:outline-none focus:border-sage"
              />
              <button className="bg-sage text-forest font-bold px-4 py-2 rounded text-sm hover:bg-tan transition-colors">
                Join
              </button>
            </form>
            <div className="flex gap-4 pt-4">
              <Instagram className="w-5 h-5 text-sage hover:text-tan cursor-pointer" />
              <Facebook className="w-5 h-5 text-sage hover:text-tan cursor-pointer" />
              <Twitter className="w-5 h-5 text-sage hover:text-tan cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-sage/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <p>&copy; 2025 Gracie's Grove. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-tan">Privacy Policy</a>
            <a href="#" className="hover:text-tan">Terms of Service</a>
            <a href="#" className="hover:text-tan">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
