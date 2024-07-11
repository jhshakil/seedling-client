import ProductTable from "@/components/table/ProductTable";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.type";

const Profile = () => {
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
    <div className="px-8 py-12">
      <div className="flex justify-between border-b border-border pb-4">
        <h2 className="text-3xl font-bold">Product List</h2>
        <Button>Add Product</Button>
      </div>
      <ProductTable products={data.data as TProduct[]} />
    </div>
  );
};

export default Profile;
