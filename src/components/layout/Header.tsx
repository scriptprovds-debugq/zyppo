 import { useState } from "react";
 import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Badge } from "@/components/ui/badge";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
 import { Link } from "react-router-dom";
 import CartDrawer from "@/components/cart/CartDrawer";
 
 const categories = [
   "Eletrônicos",
   "Moda",
   "Casa",
   "Beleza",
   "Esportes",
   "Brinquedos",
   "Automotivo",
 ];
 
 interface HeaderProps {
   cartItemsCount?: number;
   onCartOpen?: () => void;
 }
 
 const Header = ({ cartItemsCount = 3, onCartOpen }: HeaderProps) => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
 
   return (
     <header className="sticky top-0 z-50 bg-card border-b border-border">
       {/* Top bar - Promos */}
       <div className="bg-secondary text-secondary-foreground text-xs py-1.5">
         <div className="zyppo-container text-center font-medium">
           🔥 FRETE GRÁTIS em pedidos acima de R$ 99 | Use o cupom ZYPPO10 e ganhe 10% OFF
         </div>
       </div>
 
       {/* Main header */}
       <div className="zyppo-container py-3">
         <div className="flex items-center gap-4">
           {/* Mobile menu button */}
           <button
             className="lg:hidden p-2 -ml-2"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
 
           {/* Logo */}
           <Link to="/" className="flex-shrink-0">
             <h1 className="text-2xl md:text-3xl font-black tracking-tight">
               <span className="text-primary">Zyppo</span>
             </h1>
           </Link>
 
           {/* Search bar */}
           <div className="hidden md:flex flex-1 max-w-2xl">
             <div className="relative w-full">
               <Input
                 type="text"
                 placeholder="Buscar produtos, marcas e mais..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full pl-4 pr-12 h-11 rounded-full border-2 border-muted focus:border-primary transition-colors"
               />
               <Button
                 size="sm"
                 className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-9 w-9 p-0"
               >
                 <Search className="h-4 w-4" />
               </Button>
             </div>
           </div>
 
           {/* Actions */}
           <div className="flex items-center gap-2 ml-auto">
             <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
               <User className="h-5 w-5" />
               <span className="hidden lg:inline">Entrar</span>
             </Button>
 
             <Sheet>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="sm" className="relative">
                   <ShoppingCart className="h-5 w-5" />
                   {cartItemsCount > 0 && (
                     <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                       {cartItemsCount}
                     </Badge>
                   )}
                 </Button>
               </SheetTrigger>
               <SheetContent className="w-full sm:max-w-lg p-0">
                 <CartDrawer />
               </SheetContent>
             </Sheet>
           </div>
         </div>
 
         {/* Mobile search */}
         <div className="md:hidden mt-3">
           <div className="relative">
             <Input
               type="text"
               placeholder="Buscar..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-4 pr-12 h-10 rounded-full border-2 border-muted focus:border-primary"
             />
             <Button
               size="sm"
               className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 p-0"
             >
               <Search className="h-4 w-4" />
             </Button>
           </div>
         </div>
       </div>
 
       {/* Categories bar */}
       <nav className="border-t border-border bg-card">
         <div className="zyppo-container">
           <ul className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
             <li>
               <Button variant="ghost" size="sm" className="text-sm font-medium whitespace-nowrap flex items-center gap-1">
                 Todas as categorias
                 <ChevronDown className="h-4 w-4" />
               </Button>
             </li>
             {categories.map((category) => (
               <li key={category}>
                 <Button variant="ghost" size="sm" className="text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-foreground">
                   {category}
                 </Button>
               </li>
             ))}
           </ul>
         </div>
       </nav>
 
       {/* Mobile menu */}
       {mobileMenuOpen && (
         <div className="lg:hidden border-t border-border bg-card">
           <div className="zyppo-container py-4">
             <ul className="space-y-2">
               {categories.map((category) => (
                 <li key={category}>
                   <Button variant="ghost" className="w-full justify-start text-left">
                     {category}
                   </Button>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       )}
     </header>
   );
 };
 
 export default Header;