import getBackground from "../../getBackground";
import classNames from "classnames";
import MobileHeader from "./MobileHeader";

const PictureContainer = ({ type, picture }) => {
  return (
    <div
      className={classNames(
        getBackground(type),
        "to-transparent w-full aspect-w-1 aspect-h-1  sm:aspect-none sm:w-5/12 bg-opacity-20 bg-gradient-to-br flex items-center justify-center sm:p-2"
      )}
    >
      <MobileHeader />
      <div className="w-full  flex items-center sm:max-w-sm">
        <img
          className="h-1/2 w-1/2 relative z-10 sm:h-full sm:w-full mx-auto"
          src={picture}
          alt="name"
        />
      </div>
    </div>
  );
};

export default PictureContainer;
