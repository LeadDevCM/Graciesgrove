import { motion } from "framer-motion";
import { Mountain, TreePine, Heart, Sun, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import sanctuaryImage from "@assets/generated_images/scenic_mountain_meadow_for_sanctuary.png";

export default function Sanctuary() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sanctuaryImage}
            alt="Future Dog Sanctuary in Utah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative h-full flex items-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block px-4 py-1 border border-cream/50 rounded-full text-xs font-bold tracking-wider uppercase bg-forest/40 text-cream backdrop-blur-sm">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-cream">
              The Sanctuary
            </h1>
            <p className="text-xl text-cream/90 leading-relaxed font-light">
              A 400-acre haven in Utah where dogs can run free, heal, and live their best lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/20 rounded-full">
              <Mountain className="w-5 h-5 text-forest" />
              <span className="text-sm font-bold text-forest uppercase tracking-wider">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest leading-tight">
              More Than a Dream—<br/>
              <span className="italic text-tan">A Promise</span>
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
              Gracie's Grove is building toward something bigger. Our vision extends beyond
              products to create a true sanctuary—a place where dogs in need can find safety,
              healing, and unconditional love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Property */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
                400 Acres of Hope
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Nestled in the beautiful landscape of Utah, we're developing a 400-acre
                  property that will become Gracie's Grove Sanctuary—a haven designed
                  specifically for dogs who need a second chance.
                </p>
                <p>
                  This isn't just a shelter. It's a place where dogs can run through
                  open meadows, explore nature trails, and receive the specialized care
                  and attention they deserve.
                </p>
                <p>
                  Every purchase from Gracie's Grove brings us one step closer to
                  making this dream a reality.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/shop">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream font-bold rounded hover:bg-forest/90 transition-colors">
                    Support Our Vision
                  </a>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "400", label: "Acres", icon: TreePine },
                { number: "Utah", label: "Location", icon: Mountain },
                { number: "∞", label: "Love", icon: Heart },
                { number: "Soon", label: "Opening", icon: Sun }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-xl text-center"
                >
                  <item.icon className="w-8 h-8 text-sage mx-auto mb-3" />
                  <p className="text-3xl font-serif font-bold text-forest">{item.number}</p>
                  <p className="text-charcoal/60 text-sm uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What the Sanctuary Will Offer */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
              What We're Building
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              A comprehensive sanctuary designed with dogs' wellbeing at its heart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Open Spaces",
                description: "Acres of meadows and trails where dogs can run, explore, and simply be dogs"
              },
              {
                icon: Shield,
                title: "Medical Care",
                description: "On-site veterinary facilities for health monitoring and specialized treatments"
              },
              {
                icon: Heart,
                title: "Rehabilitation",
                description: "Programs for dogs recovering from trauma, neglect, or medical conditions"
              },
              {
                icon: Users,
                title: "Adoption Services",
                description: "Thoughtful matching to help dogs find their forever families"
              },
              {
                icon: Sun,
                title: "Hospice Care",
                description: "Dignified end-of-life care for senior dogs in a loving environment"
              },
              {
                icon: Mountain,
                title: "Education Center",
                description: "Programs teaching responsible pet ownership and canine wellness"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-tan/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-tan" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-cream">{item.title}</h3>
                <p className="text-cream/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Teaser */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
              The Journey Ahead
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              We're in the early stages of developing the sanctuary. The property has been
              secured, and now the real work begins. Every product sold brings us closer
              to breaking ground on this labor of love.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="font-serif italic text-forest text-xl mb-4">
                "This sanctuary will be Gracie's ultimate legacy—a place where every dog
                is treated as the precious soul they are."
              </p>
              <p className="text-sage font-medium">— Laura, Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stay Updated CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
              Be Part of Something Bigger
            </h2>
            <p className="text-charcoal/70 text-lg">
              Join our community to receive updates on sanctuary progress, exclusive
              content, and ways to get involved.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-forest/20 rounded focus:outline-none focus:border-forest bg-cream"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-forest text-cream font-bold rounded hover:bg-forest/90 transition-colors whitespace-nowrap"
              >
                Stay Updated
              </button>
            </form>
            <p className="text-sm text-charcoal/50">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
