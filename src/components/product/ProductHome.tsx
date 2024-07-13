import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { Skeleton } from "../ui/skeleton";
import { TProduct } from "@/types/product.type";
import ProductCard from "./ProductCard";

const ProductHome = () => {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center space-y-3 px-8 py-12">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error);
    return;
  }

  if (!data) {
    return;
  }

  return (
    <section className="container my-12">
      <h2 className="text-3xl my-4 font-bold text-center">
        Top Selling Products
      </h2>
      {data.data && data.data.length && (
        <div className="grid grid-cols-4 gap-5 mt-8">
          {data.data.map((item: TProduct) => (
            <div key={item._id}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductHome;
