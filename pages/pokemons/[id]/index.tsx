import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetcher } from "../../../components/helper/fetcher";
import { Meta } from "../../../components/helper/Meta";
import { Group, Stack } from "../../../components/style/Flex";
import { Grid } from "../../../components/style/Grid";

const fetchSinglePokemon = async (id: string | string[] | undefined) => {
  try {
    const { data } = await fetcher.get(
      `${id}?access_token=${process.env.NEXT_PUBLIC_TOKEN}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

const index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery(["pokemon", id], () =>
    fetchSinglePokemon(id)
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Meta title="About" />
      <Stack others="w-full ">
        <div className="w-72  h-72  relative">
          <Image
            src={`https://6za5frj3.directus.app/assets/${data.data.image}?access_token=${process.env.NEXT_PUBLIC_TOKEN}`}
            blurDataURL={`https://6za5frj3.directus.app/assets/${data.data.image}?access_token=${process.env.NEXT_PUBLIC_TOKEN}`}
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            alt="pokemon"
          />
        </div>
        <Group others="gap-2 ">
          {data.data.types.map((type: string, index: number) => {
            return (
              <div
                className="bg-slate-800 font-semibold text-white rounded-full px-4 py-2 w-full"
                key={index}
              >
                {type}
              </div>
            );
          })}
        </Group>

        <Grid columns="grid-cols-2" others="w-64 ">
          <h1 className="font-semibold">Hp</h1>
          <h1 className="font-semibold">{data.data.hp}</h1>
          <h1 className="font-semibold">Attack</h1>
          <h1 className="font-semibold">{data.data.attack}</h1>
          <h1 className="font-semibold">Defense</h1>
          <h1 className="font-semibold">{data.data.defense}</h1>
          <h1 className="font-semibold">Special Attack</h1>
          <h1 className="font-semibold">{data.data.special_attack}</h1>
          <h1 className="font-semibold">Special Defense</h1>
          <h1 className="font-semibold">{data.data.special_defense}</h1>

          <h1 className="font-semibold">Speed</h1>
          <h1 className="font-semibold">{data.data.speed}</h1>
        </Grid>
      </Stack>
    </>
  );
};

export default index;
