import { Link } from "react-router-dom";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <div className="border-t border-border">
      <div className="container px-12 py-12 grid grid-cols-5 gap-12">
        <div className="flex flex-col gap-6 col-span-2">
          <Logo />
          <p>
            At Seedling, we are passionate about trees and dedicated to helping
            you find the perfect addition to your landscape. Whether you're a
            homeowner, landscaper, or gardener, we offer a wide selection of
            high-quality trees to meet all your needs.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">My Account</h3>
          <p>
            <Link to="/profile">Profile</Link>
          </p>
          <p>
            <Link to="/cart">Cart</Link>
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">Pages</h3>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/product">Product</Link>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">Address:</h3>
            <p>Block #C, House #1-A, 2 Road No. 3, Dhaka</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Need any help? </h3>
            <p>Call Support: +880185189184</p>
            <p>email: support@seedling.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
