import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const SignInPage = () => {
  const { signInIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={signInIsOpen}
      className={"Modal-Teams"}
      overlayClassName={"Overlay-Teams"}
    >
      <p className="h-20">SIGN IN PLACEHOLDER</p>
    </ReactModal>
  );
};
