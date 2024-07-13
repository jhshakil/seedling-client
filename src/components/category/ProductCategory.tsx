import { useGetCategoriesQuery } from "@/redux/features/product/productApi";
import { Skeleton } from "../ui/skeleton";
import { Card, CardHeader, CardTitle } from "../ui/card";

const ProductCategory = () => {
  const { data, isLoading, error } = useGetCategoriesQuery(undefined);

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
      <h2 className="text-3xl my-4 font-bold text-center">Top Category</h2>
      {data.data && data.data.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {data.data.map((item: string) => (
            <Card key={item} className="w-full">
              <CardHeader>
                <CardTitle>{item}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCategory;
