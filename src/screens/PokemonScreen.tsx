interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

interface PokemonScreenProps {
  pokemons: Array<Pokemon>;
}

function PokemonScreen(props: PokemonScreenProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Height
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
          </tr>
        </thead>
        <tbody>
          {props?.pokemons?.map((pokemon) => (
            <tr
              key={pokemon?.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{pokemon?.id}</td>
              <td className="px-6 py-4">{pokemon?.name}</td>
              <td className="px-6 py-4">{pokemon?.height}</td>
              <td className="px-6 py-4">{pokemon?.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { Pokemon, PokemonScreenProps };
export { PokemonScreen };
