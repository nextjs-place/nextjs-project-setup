import { gql } from "graphql-request";
import { GetPokemonArgs } from "../../type";

function getPokemon(args: GetPokemonArgs) {
  return gql`
    query Pokemon_V2_Pokemon($limit: Int) {
      pokemon_v2_pokemon(limit: ${args?.limit}) {
        height
        id
        name
        order
        pokemon_species_id
        weight
      }
    }
  `;
}

export { getPokemon };
