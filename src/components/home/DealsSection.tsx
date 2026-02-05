 import { Timer, Flame } from "lucide-react";
 import ProductCard, { Product } from "@/components/products/ProductCard";
 
 interface DealsSectionProps {
   products: Product[];
 }
 
 const DealsSection = ({ products }: DealsSectionProps) => {
   return (
     <section className="py-8 md:py-12 bg-gradient-deal">
       <div className="zyppo-container">
         {/* Header */}
         <div className="flex items-center gap-4 mb-6">
           <div className="flex items-center gap-2 text-white">
             <Flame className="h-8 w-8 animate-pulse-deal" />
             <h2 className="text-2xl md:text-3xl font-black">Ofertas do Dia</h2>
           </div>
           <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
             <Timer className="h-4 w-4" />
             <span className="text-sm font-bold">Termina em 12:34:56</span>
           </div>
         </div>
 
         {/* Products */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {products.map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default DealsSection;