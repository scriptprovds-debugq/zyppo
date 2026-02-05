 import { 
   Smartphone, 
   Shirt, 
   Home, 
   Sparkles, 
   Dumbbell, 
   Gamepad2, 
   Car,
   Baby
 } from "lucide-react";
 
 const categories = [
   { name: "Eletrônicos", icon: Smartphone, color: "bg-blue-500" },
   { name: "Moda", icon: Shirt, color: "bg-pink-500" },
   { name: "Casa", icon: Home, color: "bg-amber-500" },
   { name: "Beleza", icon: Sparkles, color: "bg-purple-500" },
   { name: "Esportes", icon: Dumbbell, color: "bg-green-500" },
   { name: "Games", icon: Gamepad2, color: "bg-red-500" },
   { name: "Automotivo", icon: Car, color: "bg-slate-500" },
   { name: "Infantil", icon: Baby, color: "bg-cyan-500" },
 ];
 
 const CategoryGrid = () => {
   return (
     <section className="py-8 bg-card">
       <div className="zyppo-container">
         <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
           {categories.map((category) => (
             <button
               key={category.name}
               className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors group"
             >
               <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                 <category.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
               </div>
               <span className="text-xs md:text-sm font-medium text-center">
                 {category.name}
               </span>
             </button>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default CategoryGrid;