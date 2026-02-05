 import { Link } from "react-router-dom";
 
 const Footer = () => {
   return (
     <footer className="bg-secondary text-secondary-foreground">
       <div className="zyppo-container py-12">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {/* About */}
           <div>
             <h3 className="text-xl font-black mb-4">
               <span className="text-primary">Zyppo</span>
             </h3>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Sua loja online com os melhores preços e entrega rápida para todo o Brasil.
             </p>
           </div>
 
           {/* Help */}
           <div>
             <h4 className="font-bold mb-4">Ajuda</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link to="#" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Como Comprar</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Rastrear Pedido</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Trocas e Devoluções</Link></li>
             </ul>
           </div>
 
           {/* Policies */}
           <div>
             <h4 className="font-bold mb-4">Políticas</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li><Link to="#" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Privacidade</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Cookies</Link></li>
               <li><Link to="#" className="hover:text-primary transition-colors">Segurança</Link></li>
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-bold mb-4">Contato</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
               <li>contato@zyppo.com.br</li>
               <li>0800 123 4567</li>
               <li>Seg-Sex: 8h às 20h</li>
               <li>Sáb: 8h às 14h</li>
             </ul>
           </div>
         </div>
 
         {/* Payment methods */}
         <div className="border-t border-muted/20 mt-8 pt-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
               <span className="text-sm text-muted-foreground">Formas de pagamento:</span>
               <div className="flex gap-2">
                 {["PIX", "Cartão", "Boleto"].map((method) => (
                   <span key={method} className="px-3 py-1 bg-muted/10 rounded text-xs font-medium">
                     {method}
                   </span>
                 ))}
               </div>
             </div>
             <p className="text-xs text-muted-foreground">
               © 2025 Zyppo. Todos os direitos reservados.
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;