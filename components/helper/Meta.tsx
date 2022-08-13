import Head from "next/head"

interface MetaInterface {
    title?: string;
    description?: string;
}


const MetaDefaultProps = {
    title: "Pokedex | Home",
    description: "Pokedex App"
}


type MetaProps = MetaInterface & typeof MetaDefaultProps


export const Meta = (props: MetaProps) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="author" content="Aman Deep" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/x-icon" href="/pokeball.png" />
        </Head>
    )
}


Meta.defaultProps = MetaDefaultProps