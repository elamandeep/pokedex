import type { NextPage } from "next";
import { Meta } from "../components/helper/Meta";
import { Group, Stack } from "../components/style/Flex";
import { Grid } from "../components/style/Grid";
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../components/helper/fetcher";
import Link from "next/link";

async function fetchPokemons(pokemons: string) {
  console.log(pokemons);
  try {
    const response = await fetcher.get(
      `/?access_token=${process.env.NEXT_PUBLIC_TOKEN}${
        pokemons !== "" ? `&filter[name][_contains]=${pokemons}` : ""
      } `
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<string>("");
  const { data, isLoading  } = useQuery(
    ["pokemons", pokemons],
    () => fetchPokemons(pokemons),
    {
      onSuccess() {
        console.log("Success!! data is successfully fetched from server 🎉🎉");
      },
      onError() {
        console.log("error!! ☹☹");
      },
    }
  );

  return (
    <>
      <Meta />

      <Group
        justify="justify-around"
        others="p-2 w-full gap-4 fixed top-0 left-0 z-10"
      >
        <Group>
          <div className="w-10 h-10 relative">
            <Image
              src="/pokeball.png"
              blurDataURL="/pokeball.png"
              placeholder="blur"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <h1 className="font-bold text-xl hidden md:block">Pokedex</h1>
        </Group>
        <input
          type="text"
          placeholder="Search your favourite Pokemon"
          className="text-slate-800 font-semibold bg-slate-100 p-3 rounded-lg shadow-md outline-none w-full flex-grow text-md md:text-lg"
          name="pokemons"
          value={pokemons}
          onChange={(e) => setPokemons(e.target.value)}
        />
        <button className="p-3 text-slate-700 bg-slate-100 rounded-lg shadow-md text-2xl">
          <FaSun />
        </button>
      </Group>
      {isLoading ? (
        <Stack> </Stack>
      ) : (
        <Grid columns="grid-cols-2" others="mt-20 gap-2 h-full p-2 md:p-4 md:grid-cols-4">
          {data.data.map(
            (pokedata: { id: number; name: string; image: string }) => {
              const { id, name, image } = pokedata;
              return (
                <Stack
                  others="w-full rounded-lg h-56 md:h-80 border-2 border-slate-300"
                  key={id}
                >
                    <Link href={`/pokemons/${id}`} passHref>
                  <div className="w-full h-40 md:h-64 relative">
                      <Image
                        src={`https://6za5frj3.directus.app/assets/${image}?access_token=${process.env.NEXT_PUBLIC_TOKEN}`}
                        blurDataURL={`https://6za5frj3.directus.app/assets/${image}?access_token=${process.env.NEXT_PUBLIC_TOKEN}`}
                        placeholder="blur"
                        objectFit="contain"
                        layout="fill"
                      />
                  </div>
                    </Link>
                  <h1 className="font-bold text-xl md:text-2xl text-slate-700">{name}</h1>
                </Stack>
              );
            }
          )}
        </Grid>
      )}
    </>
  );
};

export default Home;
