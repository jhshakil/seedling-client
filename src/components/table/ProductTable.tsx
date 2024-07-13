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
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { useState } from "react";
import ProductUpdateDialog from "../dialog/ProductUpdateDialog";
import DeleteProduct from "../dialog/DeleteProduct";
import { toast } from "sonner";

type Props = {
  products: TProduct[];
};

const ProductTable = ({ products }: Props) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct>();

  const [updateProduct, { error: updateError }] = useUpdateProductMutation();
  const [deleteProduct, { error: deleteError }] = useDeleteProductMutation();

  const updateProductData = (data: TProduct) => {
    data._id = selectedProduct?._id;
    updateProduct(data);
    if (updateError) {
      toast("Update Fail");
    } else {
      toast("Update Successfully");
    }
  };

  const deleteProductData = () => {
    deleteProduct(selectedProduct);
    if (deleteError) {
      toast("Delete Fail");
    } else {
      toast("Delete Successfully");
    }
  };

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
              <TableCell>
                <img
                  width={30}
                  height={30}
                  src={product.image}
                  alt="product image"
                />
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                  onClick={() => {
                    setSelectedProduct(product);
                    setOpenEditDialog(true);
                  }}
                >
                  <Edit className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none hover:bg-background relative"
                  onClick={() => {
                    setSelectedProduct(product);
                    setOpenDeleteDialog(true);
                  }}
                >
                  <Trash className="h-6 w-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedProduct && (
        <>
          <ProductUpdateDialog
            product={selectedProduct}
            open={openEditDialog}
            closeDialog={() => setOpenEditDialog(false)}
            submitData={(data: TProduct) => updateProductData(data)}
          />
          <DeleteProduct
            open={openDeleteDialog}
            closeDialog={() => setOpenDeleteDialog(false)}
            submitData={() => deleteProductData()}
          />
        </>
      )}
    </div>
  );
};

export default ProductTable;
