import ProductCartCard from "@/components/product/ProductCartCard";
import { useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/product.type";

const Cart = () => {
  const { carts } = useAppSelector((state) => state.carts);

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl my-4 font-bold text-center">Cart List</h2>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {carts && carts.length ? (
            <div className="flex flex-col gap-5 mt-8">
              {carts.map((item: TProduct) => (
                <div key={item._id}>
                  <ProductCartCard product={item} />
                </div>
              ))}
            </div>
          ) : (
            <p>No Cart added</p>
          )}
        </div>
        <div>
          <p>checkout page</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
