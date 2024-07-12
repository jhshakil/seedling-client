"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { TProduct } from "@/types/product.type";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
  description: z.string(),
  image: z.string(),
  isStock: z.boolean(),
  price: z.coerce.number().min(1, {
    message: "price must be at least 1.",
  }),
  quantity: z.coerce.number().min(1, {
    message: "quantity must be at least 1.",
  }),
  rating: z.coerce
    .number()
    .min(1, {
      message: "rating must be at least 1.",
    })
    .max(5, {
      message: "rating must be at less than or equal to 5.",
    }),
});

type Props = {
  product: TProduct;
  open: boolean;
  closeDialog: () => void;
  submitData: (data: TProduct) => void;
};

const ProductUpdateDialog = ({
  product,
  open,
  closeDialog,
  submitData,
}: Props) => {
  const [defaultValues, setDefaultValues] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    isStock: true,
    price: 0,
    quantity: 3,
    rating: 2,
  });

  useEffect(() => {
    setTimeout(() => {
      setDefaultValues({
        title: product.title,
        description: product.description,
        category: product.category,
        image: product.image,
        isStock: product.isStock,
        price: product.price,
        quantity: product.quantity,
        rating: product.rating,
      });
    }, 1000);
  }, [product]);

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: defaultValues,
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("hi");
    console.log(data);
    submitData(data);
    toast("Submit Successfully");
    form.reset({
      title: "",
      description: "",
      category: "",
      image: "",
      isStock: true,
      price: 0,
      quantity: 1,
      rating: 1,
    });
    closeDialog();
  }

  const dialogClose = () => {
    closeDialog();
  };

  return (
    <Dialog open={open} onOpenChange={dialogClose}>
      <DialogContent className="overflow-y-scroll max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Product</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Type your category" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your description"
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
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input placeholder="type your image url" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isStock"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>IsStock</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your price"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your quantity"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your rating"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductUpdateDialog;
