import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { resetCart } from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/checkout/checkoutApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phone_number: z.string(),
  address: z.string(),
  cash_on_delivery: z.boolean(),
});

const Checkout = () => {
  const { carts } = useAppSelector((state) => state.carts);
  const [createOrder, { error }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      address: "",
      cash_on_delivery: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const orderData = { ...data, products: carts };
    createOrder(orderData);
    if (error) {
      toast("Order Fail");
    } else {
      toast("Order Successfully");
      form.reset({
        name: "",
        phone_number: "",
        address: "",
        cash_on_delivery: true,
      });
      dispatch(resetCart());
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <section className="px-8 py-12 max-w-[600px] mx-auto">
      <h2 className="text-2xl my-4 font-bold text-center">Checkout Form</h2>
      {carts && carts.length ? (
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your phone number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your Address"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cash_on_delivery"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Cash On Delivery</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        disabled
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Place Order</Button>
            </form>
          </Form>
        </div>
      ) : (
        <p className="text-lg text-center">Please add product in cart</p>
      )}
    </section>
  );
};

export default Checkout;
