import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-5 py-[60px]">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-green-500 uppercase text-[36px] leading-none">
              #The Stone Series
            </span>
          </div>
          <h1 className="text-[70px] font-bold leading-none">
            Bonsai Tree Nice Collections
          </h1>
          <p className="text-xl font-medium">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <div>
            <Link
              to="/product"
              className={cn(buttonVariants(), "w-40 h-14 text-lg bg-green-600")}
            >
              Purchase Now
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <img
            src="/images/hero.png"
            alt="Hero Image"
            className="object-cover h-full"
          />
          <img
            src="/images/hero2.png"
            alt="Hero Image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
