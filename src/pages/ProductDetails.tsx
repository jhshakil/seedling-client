/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { addCart } from "@/redux/features/cart/cartSlice";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);

  const { data, isLoading, error } = useGetProductQuery({ _id: id });

  const disableCart = useCallback(
    (data: TProduct) => {
      if (data.inStock) {
        if (carts) {
          const productData = carts.find((el) => el._id === data._id);
          if (productData) {
            if (data.quantity <= productData.quantity) {
              setDisableBtn(true);
            } else {
              setDisableBtn(false);
            }
          }
        }
      } else {
        setDisableBtn(true);
      }
    },
    [carts]
  );

  useEffect(() => {
    if (data?.data) {
      disableCart(data.data);
    }
  }, [data?.data, disableCart]);

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

  const addToCart = (product: TProduct) => {
    if (!disableBtn) {
      dispatch(addCart(product));
      toast("Product AddToCart");
    }
    disableCart(product);
  };

  return (
    <section className="px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:max-w-[80%] mx-auto">
        <div>
          <img
            className="w-full aspect-square object-cover"
            src={data.data.image}
            alt="Main Image"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-[48px] mb-3">{data.data.title}</h1>
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
          <Button
            disabled={disableBtn}
            variant={disableBtn ? "destructive" : "default"}
            onClick={() => addToCart(data.data)}
            className="mt-5"
          >
            {disableBtn ? "Stock Out" : "Add To Cart"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
