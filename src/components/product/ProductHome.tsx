import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { TProduct } from "@/types/product.type";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      <h2 className="text-2xl my-4 font-bold text-center">
        Top Selling Products
      </h2>
      {data.data && data.data.length && (
        <div className="grid grid-cols-4 gap-5 mt-8">
          {data.data.map((item: TProduct) => (
            <Card key={item._id} className="w-full">
              <img
                className="aspect-square object-cover"
                src={item.image}
                alt="Product Image"
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <span className="font-bold">Category:</span> {item.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between gap-4">
                  <p>
                    <span className="text-lg font-bold">Price:</span>{" "}
                    {item.price}$
                  </p>
                  <p>
                    <span className="text-lg font-bold">Rating:</span>{" "}
                    {item.rating}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  to={`/product/${item._id}`}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Details
                </Link>
                <Button>Add To Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductHome;
