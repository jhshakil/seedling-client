import { useGetProductsQuery } from "@/redux/features/product/productApi";

const Home = () => {
  const { data } = useGetProductsQuery(undefined);

  console.log(data);
  return <div className="min-h-screen">Home</div>;
};

export default Home;
