import React from 'react'
import { Box } from '@mui/material'
import CardComic from '../../components/Cards/CardComic'
import BodySingle from '../../components/layouts/body/single/body-single'
import { getCharacterByComic, getComic, getComics } from '../../services/marvel/marvel.service'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getComics()
  const val = response.data.results.map(({ id }: {id:any})=> ({params:{id: id?.toString()}}));
  console.log(val)
  const paths = response.data.results.map(({ id }: { id: any }) => ({
    params: {
      id: id?.toString()
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string)
  const comic = await getComic(id)
  const characters = await getCharacterByComic(id)

  return {
    props: {
      comic,
      characters
    },
    revalidate: 10
  }
}

function ComicDetails ({ comic, characters }: { comic: any, characters: any }): React.ReactNode {
  return (
    <>
      <Head>
        <title>{comic?.title} | DH MARVEL</title>
        <meta name="description" content={`${comic?.title}: página detalle de cómic `} />
      </Head>
        <Box sx={{ marginBottom: '1rem' }}>
          <BodySingle title="Detalle cómic">
            <CardComic
              title={comic?.title}
              description={comic?.description}
              image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              id={comic?.id}
              price={comic?.price}
              oldPrice={comic?.oldPrice}
              stock={comic?.stock}
              characters={characters}
            />
          </BodySingle>
        </Box>
    </>
  )
}

export default ComicDetails