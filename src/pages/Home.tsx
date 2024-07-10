import Hero from "@/components/hero/Hero";
import { useGetProductsQuery } from "@/redux/features/product/productApi";

const Home = () => {
  const { data } = useGetProductsQuery(undefined);

  console.log(data);
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
};

export default Home;
