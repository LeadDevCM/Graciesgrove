import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import productBalm from "@assets/generated_images/natural_dog_paw_balm_tin_on_wood.png";

const products = [
  {
    id: 1,
    name: "Healing Paw Balm",
    price: 24.00,
    category: "Skincare",
    image: productBalm,
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Calming Hemp Oil",
    price: 45.00,
    category: "Wellness",
    image: productBalm, // Using placeholder
  },
  {
    id: 3,
    name: "Nose & Snout Soother",
    price: 22.00,
    category: "Skincare",
    image: productBalm, // Using placeholder
  },
  {
    id: 4,
    name: "Shiny Coat Chews",
    price: 32.00,
    category: "Wellness",
    image: productBalm, // Using placeholder
  },
  {
    id: 5,
    name: "Lavender Grooming Mist",
    price: 28.00,
    category: "Grooming",
    image: productBalm, // Using placeholder
  },
  {
    id: 6,
    name: "Recovery Salve",
    price: 26.00,
    category: "Skincare",
    image: productBalm, // Using placeholder
    tag: "New"
  }
];

export default function Shop() {
  return (
    <div className="pt-8 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest">Shop Natural Wellness</h1>
          <p className="text-charcoal/70">
            Small-batch, handcrafted products designed to nurture your dog's health from the outside in.
          </p>
        </div>

        {/* Filters & Grid */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-8 flex-shrink-0">
            <div className="pb-4 border-b border-forest/10">
              <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li className="font-bold text-forest cursor-pointer">All Products</li>
                <li className="hover:text-forest cursor-pointer transition-colors">Skincare</li>
                <li className="hover:text-forest cursor-pointer transition-colors">Wellness</li>
                <li className="hover:text-forest cursor-pointer transition-colors">Grooming</li>
                <li className="hover:text-forest cursor-pointer transition-colors">Bundles</li>
              </ul>
            </div>
            
            <div className="pb-4 border-b border-forest/10">
              <h3 className="font-serif font-bold text-lg mb-4">Price</h3>
              <div className="flex items-center gap-2 text-sm text-charcoal/80">
                 <span>$0</span>
                 <input type="range" className="w-full accent-forest" />
                 <span>$100</span>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
             <div className="flex justify-between items-center mb-6">
               <span className="text-sm text-charcoal/60">Showing {products.length} products</span>
               <button className="flex items-center gap-2 text-sm font-medium hover:text-forest">
                 Sort by: Featured <ChevronDown className="w-4 h-4" />
               </button>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
               {products.map((product) => (
                 <motion.div 
                   key={product.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group cursor-pointer"
                 >
                   <div className="relative aspect-square overflow-hidden bg-white rounded-lg mb-4 border border-forest/5 shadow-sm group-hover:shadow-md transition-shadow">
                     {product.tag && (
                       <span className="absolute top-3 left-3 bg-tan text-forest text-xs font-bold px-2 py-1 uppercase tracking-wide z-10">
                         {product.tag}
                       </span>
                     )}
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-4 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                       <button className="w-full bg-forest text-cream py-2 rounded text-sm font-bold hover:bg-forest/90">Add to Cart</button>
                     </div>
                   </div>
                   <div className="text-center space-y-1">
                     <p className="text-xs text-sage uppercase tracking-wider font-bold">{product.category}</p>
                     <h3 className="font-serif font-bold text-lg text-charcoal group-hover:text-forest transition-colors">{product.name}</h3>
                     <p className="text-charcoal/80">${product.price.toFixed(2)}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
