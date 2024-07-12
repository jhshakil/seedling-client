import Hero from "@/components/hero/Hero";
import ProductHome from "@/components/product/ProductHome";
import { useGetProductsQuery } from "@/redux/features/product/productApi";

const Home = () => {
  const { data } = useGetProductsQuery(undefined);

  console.log(data);
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductHome />
    </div>
  );
};

export default Home;
