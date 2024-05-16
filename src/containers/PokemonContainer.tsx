import { useQuery } from "@apollo/client";
import { PokemonScreen } from "@/screens";
import { getPokemon } from "@/api";

function PokemonContainer() {
  const { data, loading } = useQuery(getPokemon, { variables: { limit: 10 } });

  return <PokemonScreen pokemons={data?.pokemon_v2_pokemon} />;
}

export { PokemonContainer };
