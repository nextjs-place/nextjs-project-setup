"use client";

import { apiClient } from "@/configs";
import { PokemonContainer } from "@/containers";
import { ApolloProvider } from "@apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={apiClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}
