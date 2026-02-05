import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import DealsSection from "@/components/home/DealsSection";
import SocialProof from "@/components/home/SocialProof";
import { featuredProducts, dealProducts } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid />
        <ProductGrid 
          title="Mais vendidos" 
          subtitle="Os produtos que todo mundo está comprando"
          products={featuredProducts.slice(0, 5)}
        />
        <DealsSection products={dealProducts} />
        <ProductGrid 
          title="Novidades" 
          subtitle="Acabaram de chegar na Zyppo"
          products={featuredProducts.slice(5, 10)}
        />
        <SocialProof />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
