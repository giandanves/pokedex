import ReactModal from "react-modal";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const FavoritesPage = () => {
  const { favoritesIsOpen } = useContext(FilterContext);

  return (
    <ReactModal
      isOpen={favoritesIsOpen}
      className={"Modal-Teams"}
      overlayClassName={"Overlay-Teams"}
    >
      <p className="h-20">OUVE AQUIIIIIIIIII</p>
    </ReactModal>
  );
};
