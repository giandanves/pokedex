import React from "react";
import Button from "../../components/Button";
import favIcon from "../../img/favorite-icon.svg";

function ActionsCard() {
  return (
    <div className="hidden sm:flex items-center">
      <Button
        textColor={"white"}
        bg={"primary"}
        children={"+ Add to team"}
        addClass={"py-2 px-3"}
      />
      <img
        className="h-5 mr-[10px] ml-[18px]"
        src={favIcon}
        alt="add to favorite"
      />
    </div>
  );
}

export default ActionsCard;
