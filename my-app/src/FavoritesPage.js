import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const FavoritesPage = () => {
  const { favoritesIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={favoritesIsOpen}
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
      <p>OUVE AQUIIIIIIIIII</p>
    </ReactModal>
  );
};
