import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Leaf } from "lucide-react";
import { Link } from "wouter";
import productBalm from "@assets/generated_images/natural_dog_paw_balm_tin_on_wood.png";
import sanctuaryImage from "@assets/generated_images/scenic_mountain_meadow_for_sanctuary.png";
import gracieHero from "@assets/IMG_0595_1765376060855.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={gracieHero} 
            alt="Gracie - The Soul Dog" 
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-cream space-y-6"
          >
            <span className="inline-block px-3 py-1 border border-sage/50 rounded-full text-xs font-medium tracking-wider uppercase bg-forest/30 backdrop-blur-sm">
              Natural Dog Wellness
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Healing from <br/><span className="italic text-sage">the Heart</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/90 leading-relaxed font-light">
              Handcrafted, organic skincare and wellness products for your soul dog. Inspired by Gracie, made with love.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/shop">
                <a className="px-8 py-4 bg-tan text-forest font-bold rounded hover:bg-cream transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Shop Collection
                </a>
              </Link>
              <Link href="/story">
                <a className="px-8 py-4 bg-transparent border border-cream text-cream font-bold rounded hover:bg-cream/10 transition-colors">
                  Our Story
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center text-forest mb-2">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">100% Organic Ingredients</h3>
              <p className="text-charcoal/70">Sourced from nature, free from harsh chemicals and artificial fragrances.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center text-forest mb-2">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">Mission Driven</h3>
              <p className="text-charcoal/70">A portion of every sale goes towards hemangiosarcoma research and awareness.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center text-forest mb-2">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold">Handcrafted with Care</h3>
              <p className="text-charcoal/70">Small-batch production ensures the highest quality and potency in every jar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={productBalm} 
                alt="Organic Paw Balm" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h4 className="text-sage font-bold tracking-wider uppercase text-sm">Best Seller</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest">Healing Paw Balm</h2>
              </div>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                Our signature blend of organic shea butter, beeswax, and calming lavender. Designed to soothe cracked paws, protect against harsh terrain, and provide deep hydration for your furry friend.
              </p>
              <ul className="space-y-3">
                {['Soothes dry, cracked paws', 'Protects from hot pavement & snow', 'Lick-safe natural ingredients'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-charcoal/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="bg-forest text-cream px-8 py-4 rounded font-bold hover:bg-forest/90 transition-colors inline-flex items-center gap-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sanctuary Teaser */}
      <section className="py-24 relative bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src={sanctuaryImage} 
            alt="Sanctuary Meadow" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">The Future Sanctuary</h2>
          <p className="text-xl text-cream/80 leading-relaxed font-light">
            We are building a 400-acre haven in Utah. A place where dogs can run free, heal, and live their best lives. Gracie's Grove is more than a brand; it's a promise of a better future.
          </p>
          <Link href="/sanctuary">
            <a className="inline-block border-2 border-tan text-tan px-8 py-3 rounded font-bold hover:bg-tan hover:text-forest transition-colors uppercase tracking-widest text-sm">
              Discover Our Vision
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
