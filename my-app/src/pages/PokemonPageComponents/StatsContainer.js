import StatBar from "./StatBar";

function StatsContainer({ pokemon }) {
  const hp = pokemon.stats.find((stat) => stat.stat.name === "hp");
  const attack = pokemon.stats.find((stat) => stat.stat.name === "attack");
  const defense = pokemon.stats.find((stat) => stat.stat.name === "defense");
  const specialAttack = pokemon.stats.find(
    (stat) => stat.stat.name === "special-attack"
  );
  const specialDefense = pokemon.stats.find(
    (stat) => stat.stat.name === "special-defense"
  );
  const speed = pokemon.stats.find((stat) => stat.stat.name === "speed");

  return (
    <article className="sm:w-5/12">
      <h2 className="pt-6 pb-4 text-base font-bold text-black">Stats</h2>
      <StatBar title={"HP"} stat={hp.base_stat} />
      <StatBar title={"Attack"} stat={attack.base_stat} />
      <StatBar title={"Defense"} stat={defense.base_stat} />
      <StatBar title={"Special attack"} stat={specialAttack.base_stat} />
      <StatBar title={"Special defense"} stat={specialDefense.base_stat} />
      <StatBar title={"Speed"} stat={speed.base_stat} />
    </article>
  );
}

export default StatsContainer;
