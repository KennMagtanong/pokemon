import { Pokemon } from "@/types/pokemon";
import Link from "next/link";

interface Props {
  params: {
    name: string;
  };
}

export default async function Page({ params }: Props) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data: Pokemon = await res.json();
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="group">
        <div className="text-3xl capitalize">{data.name}</div>
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="group-hover:hidden"
        />
        <img
          src={data.sprites.back_default}
          alt={data.name}
          className="group-hover:block hidden"
        />
        <div>
          <div className="text-xl font-bold">Abilities:</div>
          {data.abilities.map((abi) => (
            <div key={abi.slot} className="uppercase">
              - {abi.ability.name}
            </div>
          ))}
        </div>
      </div>
      <Link href="/" className="absolute top-2 left-2">
        <button className="px-4 py-2.5 outline-dashed outline-blue-500 rounded-lg hover:-outline-offset-4">
          Back
        </button>
      </Link>
    </main>
  );
}
