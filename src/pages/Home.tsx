import ProductCategory from "@/components/category/ProductCategory";
import MosaicGallery from "@/components/gallery/MosaicGallery";
import Hero from "@/components/hero/Hero";
import ProductHome from "@/components/product/ProductHome";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCategory />
      <ProductHome />
      <MosaicGallery />
    </div>
  );
};

export default Home;
