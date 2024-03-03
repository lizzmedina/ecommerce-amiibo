import Card from "@/components/common/card/Card";
import Layaut from "@/components/layouts/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCharacter } from "@/services/getCharacter";
import { Character } from "@/interface";
import { getCharacters } from "@/services/getCharacters";

  const CharacterPage = ({character}: {character: Character})=>{

  return (
    <Layaut title={character.name} description={character.amiiboSeries} keywords={character.gameSeries}>
      { character.name && <Card character={character}/> }      
    </Layaut>      
  )
}

export const getStaticPaths: GetStaticPaths = async ({locales}) => {

  const languajes = locales as string[];
  const characters =  await getCharacters();

  const paths = characters.flatMap((character: Character)=>
    languajes.map((languaje) => ({params: { id: character.tail, locale: languaje}})
    )
  )
  return {
    paths,
    fallback: "blocking",
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id as string;
  const character = await getCharacter(id);

  return {
    props: {
      character
    },
  }
}


export default  CharacterPage;