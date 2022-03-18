import classNames from "classnames";

function getBorderColor(type) {
  return classNames({
    "border-fire": type === "fire",
    "border-water": type === "water",
    "border-dragon": type === "dragon",
    "border-fairy": type === "fairy",
    "border-ghost": type === "ghost",
    "border-ground": type === "ground",
    "border-normal": type === "normal",
    "border-bug": type === "bug",
    "border-psychic": type === "psychic",
    "border-steel": type === "steel",
    "border-dark": type === "dark",
    "border-electric": type === "electric",
    "border-fighting": type === "fighting",
    "border-flying": type === "flying",
    "border-grass": type === "grass",
    "border-ice": type === "ice",
    "border-poison": type === "poison",
    "border-rock": type === "rock",
  });
}

export default getBorderColor;
