import { Link } from "react-router-dom";
import Button from "../../components/Button";
import favIcon from "../../img/favorite-icon.svg";
import previous from "../../img/previous.svg";

function MobileHeader() {
  return (
    <div className="flex justify-between w-full sm:hidden">
      <Link to="/">
        <img className="ml-5 mt-4" src={previous} alt="back to home" />
      </Link>
      <div className="flex">
        <div className="py-2">
          <Button
            textColor={"white"}
            bg={"primary"}
            children={"+ Add to team"}
            addClass={"py-2 px-3"}
          />
        </div>
        <img
          className="h-5 mr-5 ml-4 mt-4"
          src={favIcon}
          alt="add to favorite"
        />
      </div>
    </div>
  );
}

export default MobileHeader;
