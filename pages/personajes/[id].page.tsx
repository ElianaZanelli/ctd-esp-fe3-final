import { Box } from '@mui/material'
import CardCharacter from '../../components/Cards/CardCharacter'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutGeneral from '../../components/layouts/layout-general'
import { getCharacter, getCharacters } from '../../services/marvel/marvel.service'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getCharacters()

  const paths = data.map((character: any) => {
    return { params: { id: character.id.toString() } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const character = await getCharacter(id)

  return {
    props: {
      character
    },
    revalidate: 10
  }
}

function CharacterDetails ({ character }: { character: any }) {
  return (
    <>
      <Head>
        <title>{character?.name} | DH MARVEL</title>
        <meta name="description" content={`${character?.name}: página detalle de personaje de cómic`} />
      </Head>
      <LayoutGeneral>
        <Box sx={{ margin: '1rem', width: '400' }}>
          <BodySingle title="Detalle personaje">
            <CardCharacter
              name={character?.name}
              description={character?.description}
              image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              id={character?.id}
            />
          </BodySingle>
        </Box>
      </LayoutGeneral>    
    </>
  )
}

export default CharacterDetails
