import { motion } from "framer-motion";
import { Leaf, CheckCircle, ShieldCheck, Droplets, Sun, Heart } from "lucide-react";
import { Link } from "wouter";
import botanicalPattern from "@assets/generated_images/watercolor_botanical_leaves_pattern.png";

const ingredients = [
  {
    name: "Organic Shea Butter",
    source: "West Africa",
    benefits: ["Deep moisturizing", "Skin barrier protection", "Natural vitamins A & E"],
    description: "Cold-pressed and unrefined to preserve all natural healing properties. Provides intense hydration for dry, cracked paws."
  },
  {
    name: "Pure Beeswax",
    source: "Local Utah Apiaries",
    benefits: ["Creates protective barrier", "Antibacterial properties", "Locks in moisture"],
    description: "Sustainably sourced from local beekeepers. Forms a breathable protective layer without clogging pores."
  },
  {
    name: "Organic Coconut Oil",
    source: "Philippines",
    benefits: ["Antimicrobial", "Soothes irritation", "Promotes healing"],
    description: "Virgin, cold-pressed coconut oil rich in lauric acid. Safe if licked and supports skin health."
  },
  {
    name: "Lavender Essential Oil",
    source: "France",
    benefits: ["Calming aromatherapy", "Natural antiseptic", "Promotes relaxation"],
    description: "Therapeutic-grade lavender oil that soothes both skin and spirit. Pet-safe concentration levels."
  },
  {
    name: "Vitamin E",
    source: "Plant-derived",
    benefits: ["Antioxidant protection", "Skin repair", "Natural preservative"],
    description: "Natural d-alpha tocopherol that extends shelf life while nourishing and protecting skin."
  },
  {
    name: "Calendula Extract",
    source: "Organic Farms",
    benefits: ["Anti-inflammatory", "Wound healing", "Gentle on sensitive skin"],
    description: "Infused in carrier oils to extract soothing properties. Perfect for irritated or damaged skin."
  }
];

const promises = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Every ingredient comes from nature—no synthetics, ever"
  },
  {
    icon: ShieldCheck,
    title: "Pet-Safe Tested",
    description: "Formulated to be safe even if your dog licks the product"
  },
  {
    icon: Droplets,
    title: "No Harsh Chemicals",
    description: "Free from parabens, sulfates, artificial fragrances, and dyes"
  },
  {
    icon: Sun,
    title: "Small-Batch Fresh",
    description: "Made in small batches to ensure maximum potency and freshness"
  }
];

export default function Ingredients() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-sage/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={botanicalPattern}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 border border-forest/30 rounded-full text-xs font-bold tracking-wider uppercase mb-6 bg-white/50">
              Transparency
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-forest">
              Pure Ingredients, <span className="italic text-tan">Pure Love</span>
            </h1>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              We believe you deserve to know exactly what goes into every product
              that touches your beloved pet. Here's our commitment to transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                  <promise.icon className="w-7 h-7 text-forest" />
                </div>
                <h3 className="text-lg font-serif font-bold text-forest mb-2">{promise.title}</h3>
                <p className="text-charcoal/70 text-sm">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients List */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">
              What's Inside
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Every ingredient is carefully selected for its healing properties and safety.
              We source responsibly and always prioritize quality over cost.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-forest">{ingredient.name}</h3>
                    <p className="text-sage text-sm font-medium">{ingredient.source}</p>
                  </div>
                  <Leaf className="w-6 h-6 text-sage/50" />
                </div>
                <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                  {ingredient.description}
                </p>
                <div className="space-y-2">
                  {ingredient.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-charcoal/80">
                      <CheckCircle className="w-4 h-4 text-sage" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Never Use */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
              What You'll Never Find
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              We're just as proud of what we leave out as what we put in
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Parabens",
              "Sulfates",
              "Artificial Fragrances",
              "Synthetic Dyes",
              "Phthalates",
              "Petroleum",
              "Mineral Oil",
              "Alcohol"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center"
              >
                <span className="text-cream/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">
                Our Sourcing Philosophy
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-8 md:p-12 rounded-2xl space-y-6 text-charcoal/80 leading-relaxed"
            >
              <p className="text-lg">
                Every ingredient we use is carefully vetted for quality, purity, and ethical sourcing.
                We work directly with suppliers who share our values and can provide full transparency
                about their practices.
              </p>
              <p className="text-lg">
                When possible, we source locally—like our beeswax from Utah apiaries. For ingredients
                that must come from farther away, we prioritize fair trade and organic certifications.
              </p>
              <p className="text-lg">
                We test every batch of raw materials before they go into production, ensuring
                consistency and safety in every product we make.
              </p>
              <div className="pt-6 border-t border-forest/10 flex items-center gap-4">
                <Heart className="w-8 h-8 text-tan flex-shrink-0" />
                <p className="font-serif italic text-forest text-lg">
                  "If I wouldn't put it on Gracie, I won't put it in our products."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
              Experience the Difference
            </h2>
            <p className="text-charcoal/70 text-lg">
              Pure ingredients. Handcrafted with love. Safe for your furry family.
            </p>
            <div className="pt-4">
              <Link href="/shop">
                <a className="inline-block px-8 py-4 bg-forest text-cream font-bold rounded hover:bg-forest/90 transition-colors">
                  Shop Our Products
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
