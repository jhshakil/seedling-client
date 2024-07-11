import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/">Product</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to="/profile">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
