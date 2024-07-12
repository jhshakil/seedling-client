import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetProductQuery({ _id: id });

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
    <section className="px-8 py-12">
      <div className="grid grid-cols-2 gap-5 max-w-[80%] mx-auto">
        <div>
          <img
            className="w-full aspect-square object-cover"
            src={data.data.image}
            alt="Main Image"
          />
        </div>
        <div>
          <h1 className="text-[48px] mb-3">{data.data.title}</h1>
          <p>{data.data.description}</p>
          <p className="text-xl mt-4">
            <span className="font-bold">Category: </span>
            {data.data.category}
          </p>
          <p className="text-xl mt-4">
            <span className="font-bold">Price: </span>
            {data.data.price}
          </p>
          <p className="text-xl mt-4">
            <span className="font-bold">Rating: </span>
            {data.data.rating}
          </p>
          <Button className="mt-5">Add To Cart</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
