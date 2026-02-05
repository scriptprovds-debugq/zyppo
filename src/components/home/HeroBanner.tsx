 import { ArrowRight, Zap, Truck, ShieldCheck } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const HeroBanner = () => {
   return (
     <section className="relative overflow-hidden bg-gradient-hero">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
       </div>
 
       <div className="zyppo-container relative">
         <div className="py-12 md:py-20 lg:py-28">
           <div className="max-w-2xl">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6">
               <Zap className="h-4 w-4" />
               Ofertas exclusivas de até 70% OFF
             </div>
 
             {/* Title */}
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
               Compre rápido,
               <br />
               <span className="text-secondary">receba fácil.</span>
             </h1>
 
             {/* Subtitle */}
             <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
               Milhares de produtos com os melhores preços e entrega para todo o Brasil.
             </p>
 
             {/* CTAs */}
             <div className="flex flex-col sm:flex-row gap-3">
               <Button 
                 size="lg" 
                 variant="secondary"
                 className="h-12 px-8 font-bold text-base gap-2"
               >
                 Explorar ofertas
                 <ArrowRight className="h-5 w-5" />
               </Button>
               <Button 
                 size="lg" 
                 variant="outline"
                 className="h-12 px-8 font-bold text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
               >
                 Cadastre-se grátis
               </Button>
             </div>
 
             {/* Trust badges */}
             <div className="flex flex-wrap gap-6 mt-10 text-white/80 text-sm">
               <div className="flex items-center gap-2">
                 <Truck className="h-5 w-5" />
                 <span>Frete grátis +R$99</span>
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5" />
                 <span>Compra segura</span>
               </div>
               <div className="flex items-center gap-2">
                 <Zap className="h-5 w-5" />
                 <span>Entrega rápida</span>
               </div>
             </div>
           </div>
         </div>
       </div>
 
       {/* Decorative image placeholder */}
       <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full">
         <div className="relative w-full h-full">
           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/50" />
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroBanner;