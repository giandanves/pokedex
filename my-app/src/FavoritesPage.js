import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";

export const FavoritesPage = () => {
  return (
    <div>
      <Navbar />
      <p className="h-20 text-center">FAVORITES</p>
      <NavbarMobile />
    </div>
  );
};
