"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { addCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type Props = {
  product: TProduct;
};

const ProductCard = ({ product }: Props) => {
  const { title, image, category, price, rating, _id } = product;

  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.carts);

  const addToCart = (product: TProduct) => {
    if (!disableBtn) {
      dispatch(addCart(product));
      toast("Product AddToCart");
    }
    disableCart(product);
  };

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
    if (product) {
      disableCart(product);
    }
  }, [product, disableCart]);

  return (
    <Card className="w-full h-full">
      <img
        className="aspect-square object-cover"
        src={image}
        alt="Product Image"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span className="font-bold">Category:</span> {category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-4">
          <p>
            <span className="text-lg font-bold">Price:</span> {price}$
          </p>
          <p>
            <span className="text-lg font-bold">Rating:</span> {rating}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          to={`/product/${_id}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Details
        </Link>
        <Button
          disabled={disableBtn}
          variant={disableBtn ? "destructive" : "default"}
          onClick={() => addToCart(product)}
        >
          {disableBtn ? "Stock Out" : "Add To Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
