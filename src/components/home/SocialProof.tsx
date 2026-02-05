 import { Star, Users, Package, Award } from "lucide-react";
 
 const stats = [
   { icon: Users, value: "2M+", label: "Clientes satisfeitos" },
   { icon: Package, value: "5M+", label: "Pedidos entregues" },
   { icon: Star, value: "4.8", label: "Avaliação média" },
   { icon: Award, value: "500+", label: "Marcas parceiras" },
 ];
 
 const testimonials = [
   {
     name: "Maria S.",
     avatar: "M",
     rating: 5,
     text: "Entrega super rápida! Recebi em 2 dias. Produto excelente.",
   },
   {
     name: "João P.",
     avatar: "J",
     rating: 5,
     text: "Melhor custo-benefício. Compro sempre aqui.",
   },
   {
     name: "Ana L.",
     avatar: "A",
     rating: 5,
     text: "Atendimento nota 10! Resolveram minha dúvida na hora.",
   },
 ];
 
 const SocialProof = () => {
   return (
     <section className="py-12 md:py-16 bg-muted">
       <div className="zyppo-container">
         {/* Stats */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
           {stats.map((stat) => (
             <div key={stat.label} className="text-center">
               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-3">
                 <stat.icon className="h-7 w-7" />
               </div>
               <div className="text-3xl font-black text-foreground">{stat.value}</div>
               <div className="text-sm text-muted-foreground">{stat.label}</div>
             </div>
           ))}
         </div>
 
         {/* Testimonials */}
         <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold">O que nossos clientes dizem</h2>
         </div>
 
         <div className="grid md:grid-cols-3 gap-6">
           {testimonials.map((testimonial) => (
             <div
               key={testimonial.name}
               className="bg-card rounded-xl p-6 shadow-card"
             >
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                   {testimonial.avatar}
                 </div>
                 <div>
                   <div className="font-medium">{testimonial.name}</div>
                   <div className="flex gap-0.5">
                     {Array.from({ length: testimonial.rating }).map((_, i) => (
                       <Star
                         key={i}
                         className="h-3.5 w-3.5 fill-zyppo-warning text-zyppo-warning"
                       />
                     ))}
                   </div>
                 </div>
               </div>
               <p className="text-muted-foreground text-sm">{testimonial.text}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default SocialProof;