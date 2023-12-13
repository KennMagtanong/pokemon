import { PokemonList } from "@/types/pokemon";
import Link from "next/link";

export default async function Home() {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
  const data: PokemonList = await result.json();
  return (
    <main className="flex flex-col">
      {data.results.map((pokemon, index) => (
        <Link
          key={index}
          href={`/${pokemon.name}`}
          className="underline underline-offset-4 text-blue-500"
        >
          {pokemon.name}
        </Link>
      ))}
    </main>
  );
}
