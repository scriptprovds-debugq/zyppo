 import { useState } from "react";
 import { Minus, Plus, Trash2, ShoppingBag, Tag } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Separator } from "@/components/ui/separator";
 import { Link } from "react-router-dom";
 
 interface CartItem {
   id: string;
   name: string;
   image: string;
   price: number;
   quantity: number;
   variant?: string;
 }
 
 const mockCartItems: CartItem[] = [
   {
     id: "1",
     name: "Fone Bluetooth TWS Pro Max com Cancelamento de Ruído",
     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
     price: 89.90,
     quantity: 1,
     variant: "Preto",
   },
   {
     id: "2",
     name: "Smartwatch Fitness com Monitor Cardíaco e GPS",
     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80",
     price: 199.90,
     quantity: 2,
     variant: "Prata",
   },
   {
     id: "3",
     name: "Carregador Portátil 20000mAh Carga Rápida",
     image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&q=80",
     price: 79.90,
     quantity: 1,
   },
 ];
 
 const CartDrawer = () => {
   const [items, setItems] = useState<CartItem[]>(mockCartItems);
   const [coupon, setCoupon] = useState("");
   const [couponApplied, setCouponApplied] = useState(false);
 
   const updateQuantity = (id: string, delta: number) => {
     setItems(items.map(item => 
       item.id === id 
         ? { ...item, quantity: Math.max(1, item.quantity + delta) }
         : item
     ));
   };
 
   const removeItem = (id: string) => {
     setItems(items.filter(item => item.id !== id));
   };
 
   const applyCoupon = () => {
     if (coupon.toUpperCase() === "ZYPPO10") {
       setCouponApplied(true);
     }
   };
 
   const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const discount = couponApplied ? subtotal * 0.1 : 0;
   const total = subtotal - discount;
 
   const formatPrice = (price: number) => {
     return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
   };
 
   if (items.length === 0) {
     return (
       <div className="flex flex-col items-center justify-center h-full p-8 text-center">
         <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
         <h3 className="text-lg font-bold mb-2">Seu carrinho está vazio</h3>
         <p className="text-muted-foreground text-sm mb-6">
           Adicione produtos para continuar comprando
         </p>
         <Button asChild>
           <Link to="/">Continuar comprando</Link>
         </Button>
       </div>
     );
   }
 
   return (
     <div className="flex flex-col h-full">
       {/* Header */}
       <div className="p-4 border-b border-border">
         <h2 className="text-lg font-bold flex items-center gap-2">
           <ShoppingBag className="h-5 w-5 text-primary" />
           Carrinho ({items.length})
         </h2>
       </div>
 
       {/* Items */}
       <div className="flex-1 overflow-y-auto p-4 space-y-4">
         {items.map((item) => (
           <div key={item.id} className="flex gap-3 animate-fade-in-up">
             <img
               src={item.image}
               alt={item.name}
               className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
             />
             <div className="flex-1 min-w-0">
               <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
               {item.variant && (
                 <p className="text-xs text-muted-foreground mt-0.5">
                   {item.variant}
                 </p>
               )}
               <p className="text-primary font-bold mt-1">
                 {formatPrice(item.price)}
               </p>
               
               {/* Quantity controls */}
               <div className="flex items-center gap-2 mt-2">
                 <div className="flex items-center border border-border rounded-lg">
                   <button
                     onClick={() => updateQuantity(item.id, -1)}
                     className="p-1.5 hover:bg-muted transition-colors"
                   >
                     <Minus className="h-3.5 w-3.5" />
                   </button>
                   <span className="px-3 text-sm font-medium">{item.quantity}</span>
                   <button
                     onClick={() => updateQuantity(item.id, 1)}
                     className="p-1.5 hover:bg-muted transition-colors"
                   >
                     <Plus className="h-3.5 w-3.5" />
                   </button>
                 </div>
                 <button
                   onClick={() => removeItem(item.id)}
                   className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                 >
                   <Trash2 className="h-4 w-4" />
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
 
       {/* Footer */}
       <div className="border-t border-border p-4 space-y-4 bg-muted/30">
         {/* Coupon */}
         <div className="flex gap-2">
           <div className="relative flex-1">
             <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
             <Input
               placeholder="Cupom de desconto"
               value={coupon}
               onChange={(e) => setCoupon(e.target.value)}
               className="pl-9"
               disabled={couponApplied}
             />
           </div>
           <Button 
             variant="outline" 
             onClick={applyCoupon}
             disabled={couponApplied || !coupon}
           >
             {couponApplied ? "Aplicado!" : "Aplicar"}
           </Button>
         </div>
 
         {/* Summary */}
         <div className="space-y-2 text-sm">
           <div className="flex justify-between">
             <span className="text-muted-foreground">Subtotal</span>
             <span>{formatPrice(subtotal)}</span>
           </div>
           {couponApplied && (
             <div className="flex justify-between text-zyppo-success">
               <span>Desconto (ZYPPO10)</span>
               <span>-{formatPrice(discount)}</span>
             </div>
           )}
           <Separator />
           <div className="flex justify-between text-lg font-bold">
             <span>Total</span>
             <span className="text-primary">{formatPrice(total)}</span>
           </div>
         </div>
 
         {/* CTA */}
         <Button asChild className="w-full h-12 text-base font-bold shadow-button">
           <Link to="/checkout">Finalizar Compra</Link>
         </Button>
 
         <p className="text-xs text-center text-muted-foreground">
           Frete calculado no checkout
         </p>
       </div>
     </div>
   );
 };
 
 export default CartDrawer;