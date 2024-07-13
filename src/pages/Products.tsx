import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.type";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const { data, isLoading, error } = useGetProductsQuery({
    category: selectedCategory,
    sort: defileSort(),
  });
  const { data: categoryData } = useGetCategoriesQuery(undefined);

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

  const filtering = (data: string) => {
    setSelectedCategory(data);
  };

  const sorting = (data: string) => {
    setSelectedSort(data);
  };

  function defileSort() {
    if (selectedSort === "lth") {
      return "price";
    } else if (selectedSort === "htl") {
      return "-price";
    } else if (selectedSort === "name") {
      return "name";
    }
  }

  return (
    <section className="container my-12">
      <h2 className="text-2xl my-4 font-bold text-center">All Products</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="text-xl font-medium">Filter by category</p>
          <Select onValueChange={(e) => filtering(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              {categoryData &&
                categoryData.data &&
                categoryData.data.length && (
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {categoryData.data.map((item: string) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select onValueChange={(e) => sorting(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="lth">Price Low to Heigh</SelectItem>
                <SelectItem value="htl">Price Heigh to Low</SelectItem>
                <SelectItem value="name">Sorted by Name</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
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

export default Products;
