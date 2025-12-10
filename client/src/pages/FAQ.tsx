import { motion } from "framer-motion";
import { ChevronDown, Package, Truck, RotateCcw, Leaf, Heart, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "products",
    title: "Products & Ingredients",
    icon: Leaf,
    faqs: [
      {
        question: "What ingredients are in your paw balm?",
        answer: "Our Healing Paw Balm contains organic shea butter, pure beeswax from local Utah apiaries, organic coconut oil, therapeutic-grade lavender essential oil, vitamin E, and calendula extract. All ingredients are 100% natural, organic, and safe if licked by your dog."
      },
      {
        question: "Are your products safe if my dog licks them?",
        answer: "Yes! All Gracie's Grove products are formulated to be completely safe if ingested by your pet. We use only food-grade, natural ingredients and avoid any harsh chemicals or toxic substances. However, we recommend allowing the product to absorb for a few minutes before your dog has access to the treated area for maximum effectiveness."
      },
      {
        question: "Are your products tested on animals?",
        answer: "We never test on animals in laboratory settings. All our products are developed with the guidance of veterinary professionals and tested only on willing volunteer dogs (including our own furry family members) in their natural home environments."
      },
      {
        question: "What is the shelf life of your products?",
        answer: "Our balms and salves have a shelf life of approximately 12-18 months when stored properly. Keep products in a cool, dry place away from direct sunlight. The natural vitamin E in our formulas acts as a preservative while also nourishing your dog's skin."
      },
      {
        question: "Do you offer products for cats or other pets?",
        answer: "Currently, our products are formulated specifically for dogs. Some ingredients safe for dogs (like certain essential oils) can be harmful to cats. We're researching feline-safe formulations for the future, but for now, we recommend consulting your veterinarian before using our products on non-canine pets."
      }
    ]
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    faqs: [
      {
        question: "Where do you ship to?",
        answer: "We currently ship throughout the United States. International shipping is coming soon! Sign up for our newsletter to be notified when we expand our shipping options."
      },
      {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days. Expedited shipping (2-3 business days) is available at checkout for an additional fee. Orders are processed within 1-2 business days before shipping."
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on all orders over $50 within the continental United States. Orders under $50 have a flat-rate shipping fee of $5.95."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive an email with a tracking number and link. You can use this to monitor your package's journey to your doorstep. If you created an account, you can also view order status in your account dashboard."
      }
    ]
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    icon: RotateCcw,
    faqs: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day satisfaction guarantee. If you or your dog aren't completely happy with your purchase, contact us within 30 days for a full refund or exchange. Products must be at least 75% full for returns."
      },
      {
        question: "How do I initiate a return?",
        answer: "To start a return, email us at returns@graciesgrove.com with your order number and reason for return. We'll provide you with return instructions and a prepaid shipping label for defective products."
      },
      {
        question: "How long do refunds take to process?",
        answer: "Once we receive your return, refunds are processed within 5-7 business days. The refund will be credited to your original payment method. Please note that your bank may take additional time to post the refund to your account."
      }
    ]
  },
  {
    id: "orders",
    title: "Orders & Payment",
    icon: Package,
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "Orders can be modified or canceled within 2 hours of placement. After that, orders enter our fulfillment process and cannot be changed. Contact us immediately at hello@graciesgrove.com if you need to make changes."
      },
      {
        question: "Do you offer subscription or auto-ship options?",
        answer: "Yes! Subscribe & Save is available on most products. You'll receive 15% off every order and can choose delivery frequency (every 30, 60, or 90 days). Cancel or modify your subscription anytime from your account dashboard."
      },
      {
        question: "Do you offer wholesale pricing?",
        answer: "Yes, we partner with select retailers who share our values. Wholesale inquiries can be submitted through our Contact page. Minimum order quantities and terms apply."
      }
    ]
  },
  {
    id: "mission",
    title: "Our Mission",
    icon: Heart,
    faqs: [
      {
        question: "What is hemangiosarcoma and why do you support research?",
        answer: "Hemangiosarcoma is an aggressive cancer that affects dogs, particularly Golden Retrievers, German Shepherds, and Labrador Retrievers. It often develops silently in the spleen, heart, or liver with few symptoms until advanced stages. Our founder lost her soul dog Gracie to this disease, inspiring our mission to raise awareness and fund research."
      },
      {
        question: "How much of each purchase goes to hemangiosarcoma research?",
        answer: "We donate a portion of every sale to hemangiosarcoma research organizations and canine cancer awareness initiatives. Our annual giving report is published on our website each year, detailing exactly where funds are directed."
      },
      {
        question: "What is the Gracie's Grove Sanctuary?",
        answer: "The sanctuary is our long-term vision: a 400-acre haven in Utah where dogs can receive specialized care, rehabilitation, and love. It will offer adoption services, hospice care for senior dogs, and education programs. Every purchase brings us closer to making this dream a reality."
      },
      {
        question: "How can I get involved beyond purchasing products?",
        answer: "There are many ways to support our mission! Follow us on social media to help spread awareness, share our story with fellow dog lovers, sign up for our newsletter to stay informed, or contact us about volunteer and partnership opportunities."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("products");

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-cream">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              Find answers to common questions about our products, shipping,
              returns, and mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-serif font-bold text-forest mb-4">Categories</h2>
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeCategory === category.id
                          ? "bg-forest text-cream"
                          : "text-charcoal/70 hover:bg-sage/10"
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{category.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* FAQ List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className={activeCategory === category.id ? "block" : "hidden"}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-forest" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-forest">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const itemId = `${category.id}-${index}`;
                      const isOpen = openItems.has(itemId);

                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl shadow-sm overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage/5 transition-colors"
                          >
                            <span className="font-medium text-forest pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-sage flex-shrink-0 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5">
                              <p className="text-charcoal/70 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-forest" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-forest mb-4">
              Still Have Questions?
            </h2>
            <p className="text-charcoal/70 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
              We typically respond within 24-48 hours.
            </p>
            <Link href="/contact">
              <a className="inline-block px-8 py-4 bg-forest text-cream font-bold rounded hover:bg-forest/90 transition-colors">
                Contact Us
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEO-Rich Schema Data (rendered as JSON-LD in production) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
}
