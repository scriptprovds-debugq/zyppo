 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { 
   ChevronLeft, 
   MapPin, 
   CreditCard, 
   Truck,
   CheckCircle2,
   Lock
 } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
 import { Separator } from "@/components/ui/separator";
 
 const steps = [
   { id: 1, name: "Dados", icon: MapPin },
   { id: 2, name: "Entrega", icon: Truck },
   { id: 3, name: "Pagamento", icon: CreditCard },
   { id: 4, name: "Confirmação", icon: CheckCircle2 },
 ];
 
 const cartItems = [
   {
     id: "1",
     name: "Fone Bluetooth TWS Pro Max",
     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
     price: 89.90,
     quantity: 1,
   },
   {
     id: "2",
     name: "Smartwatch Fitness",
     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80",
     price: 199.90,
     quantity: 2,
   },
 ];
 
 const CheckoutPage = () => {
   const [currentStep, setCurrentStep] = useState(1);
   const [paymentMethod, setPaymentMethod] = useState("pix");
 
   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const shipping = 0;
   const total = subtotal + shipping;
 
   const formatPrice = (price: number) => {
     return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
   };
 
   return (
     <div className="min-h-screen bg-background">
       {/* Header */}
       <header className="bg-card border-b border-border">
         <div className="zyppo-container py-4">
           <div className="flex items-center justify-between">
             <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
               <ChevronLeft className="h-5 w-5" />
               <span className="text-sm">Voltar</span>
             </Link>
             <h1 className="text-xl font-black">
               <span className="text-primary">Zyppo</span>
             </h1>
             <div className="flex items-center gap-1 text-sm text-muted-foreground">
               <Lock className="h-4 w-4" />
               <span>Checkout seguro</span>
             </div>
           </div>
         </div>
       </header>
 
       {/* Steps */}
       <div className="bg-card border-b border-border">
         <div className="zyppo-container py-4">
           <div className="flex items-center justify-between max-w-2xl mx-auto">
             {steps.map((step, index) => (
               <div key={step.id} className="flex items-center">
                 <div className="flex flex-col items-center">
                   <div
                     className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                       currentStep >= step.id
                         ? "bg-primary text-primary-foreground"
                         : "bg-muted text-muted-foreground"
                     }`}
                   >
                     <step.icon className="h-5 w-5" />
                   </div>
                   <span className={`text-xs mt-1 ${
                     currentStep >= step.id ? "text-primary font-medium" : "text-muted-foreground"
                   }`}>
                     {step.name}
                   </span>
                 </div>
                 {index < steps.length - 1 && (
                   <div className={`w-12 md:w-20 h-0.5 mx-2 ${
                     currentStep > step.id ? "bg-primary" : "bg-muted"
                   }`} />
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
 
       <main className="zyppo-container py-8">
         <div className="grid lg:grid-cols-3 gap-8">
           {/* Form */}
           <div className="lg:col-span-2 space-y-6">
             {/* Step 1: Customer Data */}
             {currentStep === 1 && (
               <div className="bg-card rounded-xl p-6 border border-border animate-fade-in-up">
                 <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <MapPin className="h-5 w-5 text-primary" />
                   Seus dados
                 </h2>
                 
                 <div className="grid gap-4">
                   <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                       <Label htmlFor="firstName">Nome</Label>
                       <Input id="firstName" placeholder="Seu nome" className="mt-1" />
                     </div>
                     <div>
                       <Label htmlFor="lastName">Sobrenome</Label>
                       <Input id="lastName" placeholder="Seu sobrenome" className="mt-1" />
                     </div>
                   </div>
                   <div>
                     <Label htmlFor="email">E-mail</Label>
                     <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                   </div>
                   <div>
                     <Label htmlFor="phone">Telefone</Label>
                     <Input id="phone" placeholder="(11) 99999-9999" className="mt-1" />
                   </div>
                   <div>
                     <Label htmlFor="cpf">CPF</Label>
                     <Input id="cpf" placeholder="000.000.000-00" className="mt-1" />
                   </div>
                 </div>
 
                 <Button 
                   className="w-full mt-6 h-12 font-bold" 
                   onClick={() => setCurrentStep(2)}
                 >
                   Continuar para entrega
                 </Button>
               </div>
             )}
 
             {/* Step 2: Address */}
             {currentStep === 2 && (
               <div className="bg-card rounded-xl p-6 border border-border animate-fade-in-up">
                 <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <Truck className="h-5 w-5 text-primary" />
                   Endereço de entrega
                 </h2>
                 
                 <div className="grid gap-4">
                   <div className="grid sm:grid-cols-3 gap-4">
                     <div className="sm:col-span-1">
                       <Label htmlFor="cep">CEP</Label>
                       <Input id="cep" placeholder="00000-000" className="mt-1" />
                     </div>
                   </div>
                   <div>
                     <Label htmlFor="address">Endereço</Label>
                     <Input id="address" placeholder="Rua, avenida..." className="mt-1" />
                   </div>
                   <div className="grid sm:grid-cols-3 gap-4">
                     <div className="sm:col-span-1">
                       <Label htmlFor="number">Número</Label>
                       <Input id="number" placeholder="123" className="mt-1" />
                     </div>
                     <div className="sm:col-span-2">
                       <Label htmlFor="complement">Complemento</Label>
                       <Input id="complement" placeholder="Apto, bloco..." className="mt-1" />
                     </div>
                   </div>
                   <div className="grid sm:grid-cols-2 gap-4">
                     <div>
                       <Label htmlFor="neighborhood">Bairro</Label>
                       <Input id="neighborhood" placeholder="Seu bairro" className="mt-1" />
                     </div>
                     <div>
                       <Label htmlFor="city">Cidade</Label>
                       <Input id="city" placeholder="Sua cidade" className="mt-1" />
                     </div>
                   </div>
                 </div>
 
                 {/* Shipping options */}
                 <div className="mt-6 p-4 bg-zyppo-orange-light rounded-lg">
                   <div className="flex items-center gap-3 text-zyppo-success font-medium">
                     <Truck className="h-5 w-5" />
                     <span>Frete Grátis</span>
                     <span className="text-sm text-muted-foreground ml-auto">
                       Entrega em 3-7 dias úteis
                     </span>
                   </div>
                 </div>
 
                 <div className="flex gap-3 mt-6">
                   <Button variant="outline" onClick={() => setCurrentStep(1)}>
                     Voltar
                   </Button>
                   <Button 
                     className="flex-1 h-12 font-bold" 
                     onClick={() => setCurrentStep(3)}
                   >
                     Continuar para pagamento
                   </Button>
                 </div>
               </div>
             )}
 
             {/* Step 3: Payment */}
             {currentStep === 3 && (
               <div className="bg-card rounded-xl p-6 border border-border animate-fade-in-up">
                 <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <CreditCard className="h-5 w-5 text-primary" />
                   Forma de pagamento
                 </h2>
                 
                 <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                   <div className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                     paymentMethod === "pix" ? "border-primary bg-primary/5" : "border-border"
                   }`}>
                     <RadioGroupItem value="pix" id="pix" />
                     <Label htmlFor="pix" className="flex-1 cursor-pointer">
                       <span className="font-medium">PIX</span>
                       <p className="text-sm text-muted-foreground">Pagamento instantâneo com desconto</p>
                     </Label>
                     <span className="text-xs font-bold text-zyppo-success bg-zyppo-success/10 px-2 py-1 rounded">
                       -5%
                     </span>
                   </div>
 
                   <div className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                     paymentMethod === "credit" ? "border-primary bg-primary/5" : "border-border"
                   }`}>
                     <RadioGroupItem value="credit" id="credit" />
                     <Label htmlFor="credit" className="flex-1 cursor-pointer">
                       <span className="font-medium">Cartão de Crédito</span>
                       <p className="text-sm text-muted-foreground">Até 12x sem juros</p>
                     </Label>
                   </div>
 
                   <div className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                     paymentMethod === "boleto" ? "border-primary bg-primary/5" : "border-border"
                   }`}>
                     <RadioGroupItem value="boleto" id="boleto" />
                     <Label htmlFor="boleto" className="flex-1 cursor-pointer">
                       <span className="font-medium">Boleto Bancário</span>
                       <p className="text-sm text-muted-foreground">Vencimento em 3 dias úteis</p>
                     </Label>
                   </div>
                 </RadioGroup>
 
                 {paymentMethod === "credit" && (
                   <div className="mt-4 p-4 bg-muted rounded-lg space-y-4 animate-fade-in-up">
                     <div>
                       <Label htmlFor="cardNumber">Número do cartão</Label>
                       <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div>
                         <Label htmlFor="expiry">Validade</Label>
                         <Input id="expiry" placeholder="MM/AA" className="mt-1" />
                       </div>
                       <div>
                         <Label htmlFor="cvv">CVV</Label>
                         <Input id="cvv" placeholder="123" className="mt-1" />
                       </div>
                     </div>
                     <div>
                       <Label htmlFor="cardName">Nome no cartão</Label>
                       <Input id="cardName" placeholder="Como está no cartão" className="mt-1" />
                     </div>
                   </div>
                 )}
 
                 <div className="flex gap-3 mt-6">
                   <Button variant="outline" onClick={() => setCurrentStep(2)}>
                     Voltar
                   </Button>
                   <Button 
                     className="flex-1 h-12 font-bold shadow-button" 
                     onClick={() => setCurrentStep(4)}
                   >
                     Finalizar pedido
                   </Button>
                 </div>
               </div>
             )}
 
             {/* Step 4: Confirmation */}
             {currentStep === 4 && (
               <div className="bg-card rounded-xl p-8 border border-border text-center animate-fade-in-up">
                 <div className="w-20 h-20 rounded-full bg-zyppo-success/10 flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="h-10 w-10 text-zyppo-success" />
                 </div>
                 <h2 className="text-2xl font-bold mb-2">Pedido confirmado!</h2>
                 <p className="text-muted-foreground mb-6">
                   Seu pedido #ZYP123456 foi recebido e está sendo processado.
                 </p>
                 
                 <div className="bg-muted rounded-lg p-4 text-left mb-6">
                   <p className="text-sm text-muted-foreground">Resumo do pedido:</p>
                   <p className="font-bold text-lg">{formatPrice(total)}</p>
                   <p className="text-sm text-muted-foreground">
                     Entrega estimada: 20/01/2025 - 25/01/2025
                   </p>
                 </div>
 
                 <Button asChild className="w-full h-12 font-bold">
                   <Link to="/">Continuar comprando</Link>
                 </Button>
               </div>
             )}
           </div>
 
           {/* Order Summary */}
           <div className="lg:col-span-1">
             <div className="bg-card rounded-xl p-6 border border-border sticky top-4">
               <h3 className="font-bold mb-4">Resumo do pedido</h3>
               
               <div className="space-y-3 mb-4">
                 {cartItems.map((item) => (
                   <div key={item.id} className="flex gap-3">
                     <img
                       src={item.image}
                       alt={item.name}
                       className="w-16 h-16 object-cover rounded-lg"
                     />
                     <div className="flex-1 min-w-0">
                       <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                       <p className="text-xs text-muted-foreground">Qtd: {item.quantity}</p>
                       <p className="text-sm font-bold text-primary">
                         {formatPrice(item.price * item.quantity)}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
 
               <Separator className="my-4" />
 
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Subtotal</span>
                   <span>{formatPrice(subtotal)}</span>
                 </div>
                 <div className="flex justify-between text-zyppo-success">
                   <span>Frete</span>
                   <span>Grátis</span>
                 </div>
               </div>
 
               <Separator className="my-4" />
 
               <div className="flex justify-between text-lg font-bold">
                 <span>Total</span>
                 <span className="text-primary">{formatPrice(total)}</span>
               </div>
 
               {paymentMethod === "pix" && currentStep === 3 && (
                 <p className="text-xs text-zyppo-success mt-2">
                   Com PIX: {formatPrice(total * 0.95)}
                 </p>
               )}
             </div>
           </div>
         </div>
       </main>
     </div>
   );
 };
 
 export default CheckoutPage;