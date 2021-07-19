import { capitalize } from "lodash";

const getAbilities = (abilities) => {
  let abilitiesList = "";
  abilities.forEach((ability) => {
    if (abilitiesList.length === 0) {
      abilitiesList += capitalize(ability.ability.name);
    } else {
      abilitiesList += ", " + capitalize(ability.ability.name);
    }
  });
  return abilitiesList;
};

export default getAbilities;
