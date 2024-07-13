import { ShoppingBag, Users } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Logo from "./Logo";
import Search from "./Search";
import { Badge } from "../ui/badge";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
  const { carts } = useAppSelector((state) => state.carts);

  return (
    <div>
      <div className="border-b border-border">
        <div className="container flex justify-between items-center gap-12 py-7">
          <Logo />
          <div className="flex-1">
            <Search />
          </div>
          <div className="flex gap-3">
            <Link
              to="/profile"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-none hover:bg-background"
              )}
            >
              <Users className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-none hover:bg-background relative"
              )}
            >
              <ShoppingBag className="h-6 w-6" />
              <Badge className="absolute -top-1 -end-1 px-1.5">
                {carts.length}
              </Badge>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="container flex justify-between items-center gap-12 py-2">
          <div className="flex-1">
            <Navigation />
          </div>
          <p>Call Support: +880185189184</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
