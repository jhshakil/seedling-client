import { useAppSelector } from "@/redux/hooks";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const CheckoutAmount = () => {
  const { carts, totalPayment } = useAppSelector((state) => state.carts);

  return (
    <section className="mt-6">
      <div className="w-full">
        <div className="flex justify-between items-center border-b border-border p-2">
          <p className="text-xl font-medium">Product</p>
          <p className="text-xl font-medium">subTotal</p>
        </div>
        {carts &&
          carts.length > 0 &&
          carts.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-border p-2"
            >
              <p className="font-medium">
                {item.title} * {item.quantity}
              </p>
              <p className="font-medium">${item.price * item.quantity}</p>
            </div>
          ))}
        <div className="flex justify-between items-center p-2">
          <p className="text-xl font-medium">Total</p>
          <p className="text-xl font-medium">${totalPayment}</p>
        </div>
        {totalPayment > 0 && (
          <Link
            to="/checkout"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-8 w-full"
            )}
          >
            Checkout Now
          </Link>
        )}
      </div>
    </section>
  );
};

export default CheckoutAmount;
