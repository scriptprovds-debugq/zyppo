 import { Heart, ShoppingCart, Star } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { Link } from "react-router-dom";
 
 export interface Product {
   id: string;
   name: string;
   image: string;
   price: number;
   originalPrice?: number;
   discount?: number;
   rating?: number;
   reviews?: number;
   sold?: number;
   freeShipping?: boolean;
   isNew?: boolean;
   isDeal?: boolean;
 }
 
 interface ProductCardProps {
   product: Product;
 }
 
 const ProductCard = ({ product }: ProductCardProps) => {
   const formatPrice = (price: number) => {
     return price.toLocaleString("pt-BR", {
       style: "currency",
       currency: "BRL",
     });
   };
 
   return (
     <Link to={`/produto/${product.id}`}>
       <div className="group bg-card rounded-xl overflow-hidden shadow-card zyppo-card-hover border border-border/50">
         {/* Image container */}
         <div className="relative aspect-square overflow-hidden bg-muted">
           <img
             src={product.image}
             alt={product.name}
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           />
           
           {/* Badges */}
           <div className="absolute top-2 left-2 flex flex-col gap-1">
             {product.discount && (
               <Badge className="zyppo-badge zyppo-badge-deal animate-pulse-deal">
                 -{product.discount}%
               </Badge>
             )}
             {product.isNew && (
               <Badge className="zyppo-badge zyppo-badge-new">
                 Novo
               </Badge>
             )}
           </div>
 
           {/* Wishlist button */}
           <button className="absolute top-2 right-2 p-2 rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card">
             <Heart className="h-4 w-4" />
           </button>
 
           {/* Quick add */}
           <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <Button size="sm" className="w-full gap-2 shadow-button">
               <ShoppingCart className="h-4 w-4" />
               Adicionar
             </Button>
           </div>
         </div>
 
         {/* Content */}
         <div className="p-4">
           <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
             {product.name}
           </h3>
 
           {/* Rating */}
           {product.rating && (
             <div className="flex items-center gap-1 mt-2">
               <Star className="h-3.5 w-3.5 fill-zyppo-warning text-zyppo-warning" />
               <span className="text-xs font-medium">{product.rating}</span>
               {product.reviews && (
                 <span className="text-xs text-muted-foreground">
                   ({product.reviews})
                 </span>
               )}
               {product.sold && (
                 <span className="text-xs text-muted-foreground ml-auto">
                   {product.sold}+ vendidos
                 </span>
               )}
             </div>
           )}
 
           {/* Price */}
           <div className="mt-3">
             <div className="flex items-baseline gap-2">
               <span className="zyppo-price text-lg">
                 {formatPrice(product.price)}
               </span>
               {product.originalPrice && (
                 <span className="zyppo-price-old">
                   {formatPrice(product.originalPrice)}
                 </span>
               )}
             </div>
             
             {product.freeShipping && (
               <span className="inline-block mt-1.5 text-xs font-medium text-zyppo-success">
                 Frete Grátis
               </span>
             )}
           </div>
         </div>
       </div>
     </Link>
   );
 };
 
 export default ProductCard;