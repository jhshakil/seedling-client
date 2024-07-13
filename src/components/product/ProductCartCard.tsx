import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { removeCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/product.type";
import { toast } from "sonner";

type Props = {
  product: TProduct;
};

const ProductCartCard = ({ product }: Props) => {
  const { _id, title, image, category, price, rating, quantity } = product;

  const dispatch = useAppDispatch();

  return (
    <Card className="w-full grid grid-cols-3 gap-4">
      <div>
        <img
          className="aspect-square object-cover"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div>
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
              <p>
                <span className="text-lg font-bold">quantity:</span> {quantity}
              </p>
            </div>
          </CardContent>
        </div>
        <CardFooter className="flex justify-between">
          <Button
            variant="destructive"
            onClick={() => {
              dispatch(removeCart(_id as string));
              toast("Product Remove from Cart");
            }}
          >
            Remove
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCartCard;
