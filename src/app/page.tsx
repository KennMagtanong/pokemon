import Image from "next/image";

export default async function Home() {
  const result = await fetch("https://pokeapi.co/api/v2/type/3");
  const data = await result.json();
  console.log(data.pokemon);
  return (
    <main className="text-white bg-black">
      {/* {JSON.stringify(data.damage_relations.double_damage_from)}
      {data.pokemon.map((pokemon, index) => <div key={index}>
        {pokemon.pokemon.name}
      </div>)} */}
      {data.damage_relations.double_damage_from.map((pokemon, index) => (
        <div className={`${index === 1 && "text-red-500"}`} key={index}>{pokemon.name} {index}</div>
      ))}
    </main>
  );
}
