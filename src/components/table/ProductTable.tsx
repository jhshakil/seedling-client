import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProduct } from "@/types/product.type";
import { Button } from "../ui/button";
import { Edit, Trash } from "lucide-react";

type Props = {
  products: TProduct[];
};

const ProductTable = ({ products }: Props) => {
  return (
    <div className="w-full">
      <Table>
        <TableCaption>A list of your Product.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Title</TableHead>
            <TableHead className="font-bold">Category</TableHead>
            <TableHead className="font-bold">Image</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="font-bold">Quantity</TableHead>
            <TableHead className="font-bold">Rating</TableHead>
            <TableHead className="font-bold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.image}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                >
                  <Edit className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                >
                  <Trash className="h-6 w-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
