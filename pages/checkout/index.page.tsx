import { Box, Stack } from '@mui/material'
import CardCheckout from '../../components/Cards/CardCheckout'
import Stepper from '../../components/Form/Stepper'
import BodySingle from '../../components/layouts/body/single/body-single'
import LayoutCheckout from '../../components/layouts/layout-checkout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout (): JSX.Element {
  const router = useRouter()
  const { comic } = router.query
  const [comicData, setComicData] = useState<any>()
  useEffect(() => {
    const fetchComic = async () => {
      if (comic !== undefined && comic !== null) {
        const id = parseInt(comic as string)
        const response = await fetch(`/api/comic?id=${id}`)
        const data = await response.json()
        setComicData(data)
      } else {
        router.push('/')
      }
    }
    fetchComic()
  }, [comic, router])

  return (
    <>
      <Head>
        <title>Checkout | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle title="Checkout">
          <Box sx={{ padding: { xs: '20px', sm: '20px' } }} display={'flex'} justifyContent={'center'}>
            <Stack
              direction={{ sm: 'column', md: 'row-reverse' }}
              spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
              alignItems={'center'}
            >
              <CardCheckout
                title={comicData?.title}
                image={`${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`}
                price={comicData?.price}
                id={comicData?.id}
              />
              <Stepper
                title={comicData?.title}
                image={`${comicData?.images[0]?.path}.${comicData?.images[0]?.extension}`}
                price={comicData?.price}
              />
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout
