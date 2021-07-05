import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";

export const SignInPage = () => {
  return (
    <div>
      <Navbar />
      <p className="h-20 text-center">SIGN IN</p>
      <NavbarMobile />
    </div>
  );
};
