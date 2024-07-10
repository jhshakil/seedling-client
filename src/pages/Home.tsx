import { useGetProductsQuery } from "@/redux/features/product/productApi";

const Home = () => {
  const { data } = useGetProductsQuery(undefined);

  console.log(data);
  return <div>Home</div>;
};

export default Home;
