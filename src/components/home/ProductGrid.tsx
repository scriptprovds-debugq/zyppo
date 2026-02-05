 import ProductCard, { Product } from "@/components/products/ProductCard";
 
 interface ProductGridProps {
   title: string;
   subtitle?: string;
   products: Product[];
   showViewAll?: boolean;
 }
 
 const ProductGrid = ({ title, subtitle, products, showViewAll = true }: ProductGridProps) => {
   return (
     <section className="py-8 md:py-12">
       <div className="zyppo-container">
         {/* Header */}
         <div className="flex items-end justify-between mb-6">
           <div>
             <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
             {subtitle && (
               <p className="text-muted-foreground mt-1">{subtitle}</p>
             )}
           </div>
           {showViewAll && (
             <button className="text-primary font-medium hover:underline">
               Ver todos
             </button>
           )}
         </div>
 
         {/* Grid */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {products.map((product) => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ProductGrid;