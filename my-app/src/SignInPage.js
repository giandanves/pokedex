import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const SignInPage = () => {
  const { signInIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={signInIsOpen}
      style={{
        overlay: {
          top: "64px",
          width: "100%",
        },
        content: {
          border: 0,
          padding: 0,
          inset: 0,
        },
      }}
    >
      <p>SIGN IN PLACEHOLDER</p>
    </ReactModal>
  );
};
