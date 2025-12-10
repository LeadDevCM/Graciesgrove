import { motion } from "framer-motion";
import { Heart, Ribbon, PawPrint } from "lucide-react";
import { Link } from "wouter";
import gracieImage from "@assets/IMG_0596_1765376260814.jpeg";

export default function Story() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-forest text-cream overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 border border-sage/50 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-cream">
              The Heart Behind <span className="italic text-tan">the Grove</span>
            </h1>
            <p className="text-xl text-cream/80 font-light leading-relaxed">
              Every jar we craft carries a piece of our heart—and the memory of a very special soul dog named Gracie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gracie's Story */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={gracieImage}
                  alt="Gracie - Our Soul Dog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="font-serif italic text-forest text-lg">"Our Soul Dog"</p>
                <p className="text-charcoal/60 text-sm">Gracie, Forever Loved</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest">
                Meet Gracie
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Gracie wasn't just a dog—she was family. From the moment she came into our lives,
                  she filled our home with unconditional love, boundless joy, and a spirit that
                  touched everyone she met.
                </p>
                <p>
                  She loved rolling in the grass, chasing sunbeams, and greeting every person
                  as if they were a long-lost friend. Gracie had a way of making ordinary moments
                  feel extraordinary.
                </p>
                <p>
                  When Gracie was diagnosed with hemangiosarcoma—an aggressive and often silent
                  cancer—our world changed forever. We lost her far too soon, but her spirit
                  inspired us to create something meaningful in her memory.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hemangiosarcoma Awareness */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/20 rounded-full mb-6">
              <Ribbon className="w-5 h-5 text-forest" />
              <span className="text-sm font-bold text-forest uppercase tracking-wider">Awareness Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-6">
              Understanding Hemangiosarcoma
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Hemangiosarcoma is one of the most devastating cancers affecting dogs.
              It often develops silently, making early detection challenging.
              A portion of every Gracie's Grove purchase supports research and awareness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "1 in 5",
                label: "Golden Retrievers",
                description: "May develop hemangiosarcoma in their lifetime"
              },
              {
                stat: "Silent",
                label: "Symptoms",
                description: "Often shows no signs until advanced stages"
              },
              {
                stat: "Urgent",
                label: "Research Needed",
                description: "Early detection methods are critically needed"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-cream rounded-xl"
              >
                <p className="text-4xl font-serif font-bold text-forest mb-2">{item.stat}</p>
                <p className="text-tan font-bold uppercase tracking-wider text-sm mb-3">{item.label}</p>
                <p className="text-charcoal/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laura's Journey */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-6">
                From Grief to Purpose
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg space-y-6 text-charcoal/80 leading-relaxed"
            >
              <p className="text-lg">
                After losing Gracie, I found myself searching for ways to honor her memory.
                I began researching natural remedies and wellness practices for dogs, determined
                to help other pet parents give their furry companions the best possible care.
              </p>
              <p className="text-lg">
                What started as a personal journey became Gracie's Grove—a labor of love where
                every product is handcrafted with the same care I would have given Gracie.
                We use only organic, natural ingredients because our dogs deserve nothing less.
              </p>
              <p className="text-lg">
                But this is more than a business. It's a mission. A portion of every sale goes
                toward hemangiosarcoma research and awareness, so that other families might be
                spared the heartbreak we experienced.
              </p>
              <div className="pt-6 border-t border-forest/10">
                <p className="font-serif italic text-forest text-xl">
                  "Gracie taught me that love doesn't end—it transforms into purpose."
                </p>
                <p className="text-sage font-medium mt-2">— Laura, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
              Our Promise
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Every product we create embodies these core values
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description: "Each batch is handcrafted with the same care we'd give our own pets"
              },
              {
                icon: PawPrint,
                title: "Pet-Safe Always",
                description: "Only natural, organic ingredients that are safe for your furry family"
              },
              {
                icon: Ribbon,
                title: "Purpose-Driven",
                description: "Every purchase supports hemangiosarcoma research and awareness"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-tan" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-cream">{item.title}</h3>
                <p className="text-cream/70">{item.description}</p>
              </motion.div>
            ))}
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
              Join Our Mission
            </h2>
            <p className="text-charcoal/70 text-lg">
              Every purchase helps us honor Gracie's memory while supporting research
              that could save countless canine lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/shop">
                <a className="px-8 py-4 bg-forest text-cream font-bold rounded hover:bg-forest/90 transition-colors">
                  Shop Products
                </a>
              </Link>
              <Link href="/sanctuary">
                <a className="px-8 py-4 border-2 border-forest text-forest font-bold rounded hover:bg-forest hover:text-cream transition-colors">
                  Our Vision
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
