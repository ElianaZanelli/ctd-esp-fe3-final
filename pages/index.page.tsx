
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import BodySingle from '../components/layouts/body/single/body-single'
import { getComics } from '../services/marvel/marvel.service'
import React, { useEffect, useState } from 'react'
import PaginationOutlined from '../components/Pagination'
import ResponsiveGrid from '../components/Grid'

const INITIAL_OFFSET = 0
const INITIAL_LIMIT = 12

interface Comic {
  id: number
  title: string
}

interface IndexProps {
  initialComics: Comic[]
  initialTotal: number
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const response = await getComics(INITIAL_OFFSET, INITIAL_LIMIT)
  return {
    props: {
      initialComics: response.data.results,
      initialTotal: response.data.total
    }
  }
}

const Index: NextPage<IndexProps> = ({ initialComics, initialTotal }: IndexProps) => {
  const [comics, setComics] = useState<Comic[]>(initialComics)
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(initialTotal)
  const LIMIT = 12

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
  }

  async function deleteCookie (): Promise<void> {
    await fetch('/api/cookie')
  }

  useEffect(() => {
    const fetchDataAndCleanUp = async (): Promise<void> => {
      try {
        const offset = LIMIT * (page - 1)
        const response = await getComics(offset, LIMIT)
        setComics(response?.data?.results ?? [])
        setTotal(response?.data?.total ?? 0)
      } catch (error) {
        console.error('Error fetching comics:', error)
      }
      try {
        await deleteCookie()
        localStorage.clear()
      } catch (error) {
        console.error('Error deleting cookie:', error)
      }
    }

    fetchDataAndCleanUp().catch((error) => {
      console.error('Error in fetchDataAndCleanUp:', error)
    })
  }, [page])

  return (
    <>
      <Head>
        <title>Inicio | DH MARVEL</title>
        <meta name="description" content="Marvel's Store Sitio Web" />
      </Head>
        <BodySingle title={'Aplicación Marvel'}>
          <ResponsiveGrid data={comics} />
          <PaginationOutlined count={Math.round(total / 12)} page={page} handleChange={handleChange} />
        </BodySingle>
    </>
  )
}

export default Index

