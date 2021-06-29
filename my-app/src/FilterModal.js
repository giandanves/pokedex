import ReactModal from "react-modal";

export const FilterModal = () => {
  return (
    <ReactModal
      isOpen={true}
      bodyOpenClassName="body-open"
      style={{
        overlay: {
          maxWidth: "1440px",
          backgroundColor: "#2B314060",
        },
        content: {
          opacity: "1",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          maxWidth: "666px",
          maxHeight: "720px",
          marginLeft: "auto",
          marginRight: "auto",
        },
      }}
    >
      <div className="h-full w-full bg-white bg-opacity-1">FILTER MODAL</div>
    </ReactModal>
  );
};
