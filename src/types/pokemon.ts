export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Pokemon = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    isHidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  species: {
    name: string;
  };
  sprites: {
    back_default: string;
    front_default: string;
  };
};
