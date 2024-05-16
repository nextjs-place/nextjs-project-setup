"use client";

import { Pokemon } from "@/components";
import { StoreProvider } from "@/redux";

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Pokemon />
      </main>
    </StoreProvider>
  );
}
