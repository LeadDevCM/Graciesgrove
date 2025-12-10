import { motion } from "framer-motion";
import { Mail, MessageSquare, Package, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

type InquiryType = "general" | "wholesale" | "press" | "sanctuary";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", { inquiryType, ...formData });
  };

  const inquiryTypes = [
    { id: "general" as const, label: "General Question", icon: MessageSquare },
    { id: "wholesale" as const, label: "Wholesale Inquiry", icon: Package },
    { id: "press" as const, label: "Press & Media", icon: Mail },
    { id: "sanctuary" as const, label: "Sanctuary Info", icon: MapPin }
  ];

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
              Get in Touch
            </h1>
            <p className="text-xl text-cream/80 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our products,
              want to partner with us, or just want to say hello—we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-forest mb-4">
                  Contact Information
                </h2>
                <p className="text-charcoal/70 leading-relaxed">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Email</p>
                    <a href="mailto:hello@graciesgrove.com" className="text-charcoal/70 hover:text-forest transition-colors">
                      hello@graciesgrove.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Response Time</p>
                    <p className="text-charcoal/70">24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-forest">Location</p>
                    <p className="text-charcoal/70">Utah, United States</p>
                  </div>
                </div>
              </div>

              {/* Wholesale Info Box */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif font-bold text-forest mb-3">
                  Wholesale Partners
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  Interested in carrying Gracie's Grove in your store?
                  We'd love to partner with retailers who share our values.
                </p>
                <button
                  onClick={() => setInquiryType("wholesale")}
                  className="text-tan font-medium text-sm hover:underline"
                >
                  Start a wholesale inquiry →
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-forest mb-6">
                  Send Us a Message
                </h2>

                {/* Inquiry Type Selector */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setInquiryType(type.id)}
                        className={`p-3 rounded-lg border-2 transition-all text-center ${
                          inquiryType === type.id
                            ? "border-forest bg-forest/5 text-forest"
                            : "border-gray-200 text-charcoal/60 hover:border-sage"
                        }`}
                      >
                        <type.icon className={`w-5 h-5 mx-auto mb-1 ${
                          inquiryType === type.id ? "text-forest" : "text-charcoal/40"
                        }`} />
                        <span className="text-xs font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-forest bg-cream/50"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-forest bg-cream/50"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  {inquiryType === "wholesale" && (
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                        Company/Store Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-forest bg-cream/50"
                        placeholder="Your Business Name"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-forest bg-cream/50"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-forest bg-cream/50 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-charcoal/50">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-forest text-cream font-bold rounded-lg hover:bg-forest/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-serif font-bold text-forest mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-charcoal/70 mb-6">
              Check out our frequently asked questions for information about shipping,
              returns, ingredients, and more.
            </p>
            <a
              href="/faq"
              className="inline-block px-6 py-3 border-2 border-forest text-forest font-bold rounded hover:bg-forest hover:text-cream transition-colors"
            >
              View FAQ
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
