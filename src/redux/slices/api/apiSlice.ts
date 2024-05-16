import { createApi } from "@reduxjs/toolkit/query/react";

import { graphqlBaseQuery } from "./apiBaseQuery";
import { getPokemon } from "./graphql/queries/pokemon";
import { GetPokemonArgs } from "./type";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: graphqlBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_GRAPHQL_ENDPOINT!,
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (args: GetPokemonArgs) => ({
        body: getPokemon(args),
      }),
    }),
  }),
});

export const { useGetPokemonQuery } = apiSlice;
export { apiSlice };
