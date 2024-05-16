interface Endpoints {
  [key: string]: string;
}

interface GetPokemonArgs {
  limit: number;
}

export type { Endpoints, GetPokemonArgs };
