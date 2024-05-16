import { gql } from "@apollo/client";

const getPokemon = gql`
  query getPokemon($limit: Int = 10) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      height
      weight
    }
  }
`;

export { getPokemon };
