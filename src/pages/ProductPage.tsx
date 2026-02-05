 import { useState } from "react";
 import { useParams, Link } from "react-router-dom";
 import { 
   Star, 
   Heart, 
   Share2, 
   Truck, 
   ShieldCheck, 
   RefreshCw,
   Minus,
   Plus,
   ChevronLeft,
   ChevronRight
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { Separator } from "@/components/ui/separator";
 import Header from "@/components/layout/Header";
 import Footer from "@/components/layout/Footer";
 import { featuredProducts } from "@/data/products";
 
 const productImages = [
   "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
   "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
   "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
   "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&q=80",
 ];
 
 const variants = [
   { name: "Preto", available: true },
   { name: "Branco", available: true },
   { name: "Azul", available: false },
   { name: "Rosa", available: true },
 ];
 
 const reviews = [
   {
     id: 1,
     author: "Carlos M.",
     rating: 5,
     date: "15/01/2025",
     text: "Produto excelente! Qualidade de som surpreendente para o preço. Cancelamento de ruído funciona muito bem.",
     helpful: 45,
   },
   {
     id: 2,
     author: "Fernanda S.",
     rating: 4,
     date: "12/01/2025",
     text: "Muito bom, bateria dura bastante. Só achei o estojo um pouco grande.",
     helpful: 23,
   },
   {
     id: 3,
     author: "Roberto L.",
     rating: 5,
     date: "10/01/2025",
     text: "Custo-benefício incrível. Recomendo demais!",
     helpful: 67,
   },
 ];
 
 const ProductPage = () => {
   const { id } = useParams();
   const [selectedImage, setSelectedImage] = useState(0);
   const [selectedVariant, setSelectedVariant] = useState("Preto");
   const [quantity, setQuantity] = useState(1);
 
   const product = featuredProducts.find(p => p.id === id) || featuredProducts[0];
 
   const formatPrice = (price: number) => {
     return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
   };
 
   return (
     <div className="min-h-screen flex flex-col">
       <Header />
       
       <main className="flex-1 bg-background">
         {/* Breadcrumb */}
         <div className="zyppo-container py-4">
           <nav className="text-sm text-muted-foreground">
             <Link to="/" className="hover:text-primary">Início</Link>
             <span className="mx-2">/</span>
             <span className="text-foreground">Eletrônicos</span>
             <span className="mx-2">/</span>
             <span className="text-foreground">{product.name}</span>
           </nav>
         </div>
 
         <div className="zyppo-container pb-12">
           <div className="grid lg:grid-cols-2 gap-8">
             {/* Image Gallery */}
             <div className="space-y-4">
               <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
                 <img
                   src={productImages[selectedImage]}
                   alt={product.name}
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Discount badge */}
                 {product.discount && (
                   <Badge className="absolute top-4 left-4 zyppo-badge zyppo-badge-deal text-base px-3 py-1">
                     -{product.discount}%
                   </Badge>
                 )}
 
                 {/* Navigation arrows */}
                 <button 
                   onClick={() => setSelectedImage(prev => Math.max(0, prev - 1))}
                   className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                 >
                   <ChevronLeft className="h-5 w-5" />
                 </button>
                 <button 
                   onClick={() => setSelectedImage(prev => Math.min(productImages.length - 1, prev + 1))}
                   className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                 >
                   <ChevronRight className="h-5 w-5" />
                 </button>
               </div>
 
               {/* Thumbnails */}
               <div className="flex gap-2 overflow-x-auto pb-2">
                 {productImages.map((img, index) => (
                   <button
                     key={index}
                     onClick={() => setSelectedImage(index)}
                     className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                       selectedImage === index ? "border-primary" : "border-transparent"
                     }`}
                   >
                     <img src={img} alt="" className="w-full h-full object-cover" />
                   </button>
                 ))}
               </div>
             </div>
 
             {/* Product Info */}
             <div className="space-y-6">
               {/* Title & Rating */}
               <div>
                 <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                   {product.name}
                 </h1>
                 
                 <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1">
                     {Array.from({ length: 5 }).map((_, i) => (
                       <Star
                         key={i}
                         className={`h-5 w-5 ${
                           i < Math.floor(product.rating || 0)
                             ? "fill-zyppo-warning text-zyppo-warning"
                             : "fill-muted text-muted"
                         }`}
                       />
                     ))}
                     <span className="ml-1 font-medium">{product.rating}</span>
                   </div>
                   <span className="text-muted-foreground text-sm">
                     ({product.reviews} avaliações)
                   </span>
                   <span className="text-muted-foreground text-sm">
                     {product.sold}+ vendidos
                   </span>
                 </div>
               </div>
 
               {/* Price */}
               <div className="bg-zyppo-orange-light rounded-xl p-4">
                 <div className="flex items-baseline gap-3">
                   <span className="text-4xl font-black text-primary">
                     {formatPrice(product.price)}
                   </span>
                   {product.originalPrice && (
                     <span className="text-lg text-muted-foreground line-through">
                       {formatPrice(product.originalPrice)}
                     </span>
                   )}
                 </div>
                 <p className="text-sm text-muted-foreground mt-1">
                   ou 12x de {formatPrice(product.price / 12)} sem juros
                 </p>
               </div>
 
               {/* Variants */}
               <div>
                 <label className="text-sm font-medium mb-2 block">
                   Cor: <span className="text-primary">{selectedVariant}</span>
                 </label>
                 <div className="flex gap-2">
                   {variants.map((variant) => (
                     <button
                       key={variant.name}
                       onClick={() => variant.available && setSelectedVariant(variant.name)}
                       disabled={!variant.available}
                       className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                         selectedVariant === variant.name
                           ? "border-primary bg-primary/5"
                           : variant.available
                           ? "border-border hover:border-primary/50"
                           : "border-border opacity-40 cursor-not-allowed line-through"
                       }`}
                     >
                       {variant.name}
                     </button>
                   ))}
                 </div>
               </div>
 
               {/* Quantity */}
               <div>
                 <label className="text-sm font-medium mb-2 block">Quantidade</label>
                 <div className="flex items-center gap-4">
                   <div className="flex items-center border border-border rounded-lg">
                     <button
                       onClick={() => setQuantity(q => Math.max(1, q - 1))}
                       className="p-3 hover:bg-muted transition-colors"
                     >
                       <Minus className="h-4 w-4" />
                     </button>
                     <span className="px-6 font-medium">{quantity}</span>
                     <button
                       onClick={() => setQuantity(q => q + 1)}
                       className="p-3 hover:bg-muted transition-colors"
                     >
                       <Plus className="h-4 w-4" />
                     </button>
                   </div>
                   <span className="text-sm text-muted-foreground">
                     143 disponíveis
                   </span>
                 </div>
               </div>
 
               {/* Shipping */}
               <div className="bg-muted rounded-xl p-4">
                 <div className="flex items-center gap-3 text-zyppo-success font-medium">
                   <Truck className="h-5 w-5" />
                   <span>Frete Grátis</span>
                   <Badge variant="outline" className="ml-auto">
                     Entrega em 3-7 dias
                   </Badge>
                 </div>
               </div>
 
               {/* CTA Buttons */}
               <div className="flex gap-3">
                 <Button size="lg" className="flex-1 h-14 text-lg font-bold shadow-button">
                   Comprar Agora
                 </Button>
                 <Button size="lg" variant="outline" className="h-14">
                   <Heart className="h-5 w-5" />
                 </Button>
                 <Button size="lg" variant="outline" className="h-14">
                   <Share2 className="h-5 w-5" />
                 </Button>
               </div>
 
               {/* Trust badges */}
               <div className="grid grid-cols-3 gap-4 text-center pt-4">
                 <div className="space-y-1">
                   <ShieldCheck className="h-6 w-6 mx-auto text-primary" />
                   <p className="text-xs text-muted-foreground">Compra Segura</p>
                 </div>
                 <div className="space-y-1">
                   <RefreshCw className="h-6 w-6 mx-auto text-primary" />
                   <p className="text-xs text-muted-foreground">7 dias para troca</p>
                 </div>
                 <div className="space-y-1">
                   <Truck className="h-6 w-6 mx-auto text-primary" />
                   <p className="text-xs text-muted-foreground">Entrega garantida</p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Reviews Section */}
           <Separator className="my-12" />
           
           <section>
             <h2 className="text-2xl font-bold mb-6">Avaliações dos clientes</h2>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               {reviews.map((review) => (
                 <div key={review.id} className="bg-card rounded-xl p-5 border border-border">
                   <div className="flex items-center justify-between mb-3">
                     <div className="flex items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                         {review.author[0]}
                       </div>
                       <div>
                         <p className="font-medium">{review.author}</p>
                         <p className="text-xs text-muted-foreground">{review.date}</p>
                       </div>
                     </div>
                     <div className="flex gap-0.5">
                       {Array.from({ length: review.rating }).map((_, i) => (
                         <Star key={i} className="h-4 w-4 fill-zyppo-warning text-zyppo-warning" />
                       ))}
                     </div>
                   </div>
                   <p className="text-sm text-muted-foreground">{review.text}</p>
                   <p className="text-xs text-muted-foreground mt-3">
                     👍 {review.helpful} acharam útil
                   </p>
                 </div>
               ))}
             </div>
           </section>
         </div>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default ProductPage;