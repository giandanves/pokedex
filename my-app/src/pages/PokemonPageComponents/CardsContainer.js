import CardInfo from "./CardInfo";
import getAbilities from "../../getAbilities";

const CardsContainer = ({ height, weight, abilities }) => {
  return (
    <div className="flex">
      <div className="flex">
        <CardInfo
          title={"Height"}
          value={height / 10 + "m"}
          textAlign={"text-center"}
        />
        <CardInfo
          title={"Category"}
          value={"no data"}
          textAlign={"text-center"}
        />
        <CardInfo
          title={"Weight"}
          value={weight / 10 + "kg"}
          textAlign={"text-center"}
        />
        <CardInfo
          title={"Gender"}
          value={"no data"}
          textAlign={"text-center"}
        />
      </div>
      <CardInfo
        title={"Abilities"}
        value={getAbilities(abilities)}
        addClass={"w-full"}
        textAlign={"text-left"}
      />
    </div>
  );
};

export default CardsContainer;
