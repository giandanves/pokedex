import classNames from "classnames";

function getBackground(type) {
  return classNames({
    "bg-fire from-fire": type === "fire",
    "bg-water from-water": type === "water",
    "bg-dragon from-dragon": type === "dragon",
    "bg-fairy from-fairy": type === "fairy",
    "bg-ghost from-ghost": type === "ghost",
    "bg-ground from-ground": type === "ground",
    "bg-normal from-normal": type === "normal",
    "bg-bug from-bug": type === "bug",
    "bg-psychic from-psychic": type === "psychic",
    "bg-steel from-steel": type === "steel",
    "bg-dark from-dark": type === "dark",
    "bg-electric from-electric": type === "electric",
    "bg-fighting from-fighting": type === "fighting",
    "bg-flying from-flying": type === "flying",
    "bg-grass from-grass": type === "grass",
    "bg-ice from-ice": type === "ice",
    "bg-poison from-poison": type === "poison",
    "bg-rock from-rock": type === "rock",
  });
}

export default getBackground;
