import React, { useEffect } from 'react'
import LayoutCheckout from '../../components/layouts/layout-checkout'
import Head from 'next/head'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BodySingle from '../../components/layouts/body/single/body-single'
import { type CheckoutInput } from '../../features/checkout/checkout.types' // Modificar esta línea
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

function PurchaseConfirmation (): JSX.Element {
  const [purchase, setPurchase] = React.useState<CheckoutInput | undefined>() // Modificar esta línea

  useEffect(() => {
    const item = localStorage.getItem('purchase-data')
    if (item !== null) {
      const parsedData: CheckoutInput | undefined = JSON.parse(item).data
      if (typeof parsedData === 'object' && parsedData !== null) {
        setPurchase(parsedData)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Compra exitosa | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle>
          <Box
            sx={{ padding: { xs: '20px', sm: '20px' } }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Box
              sx={{
                marginBottom: '5px',
                backgroundColor: '#43a14d',
                color: 'white',
                paddingLeft: '50px',
                paddingRight: '50px',
                borderRadius: '10px',
                minHeight: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <CheckCircleIcon sx={{ marginRight: '10px', fontSize: '30px' }} />
                ¡Que disfrutes de tu compra!
              </Typography>
            </Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 300 }} image={purchase?.order?.image} title={purchase?.order?.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {purchase?.order?.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Nombre y apellido: {purchase?.customer?.name} {purchase?.customer?.lastname}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Email: {purchase?.customer?.email}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Dirección de entrega: {purchase?.customer?.address?.address1} {purchase?.customer?.address?.address2} - {purchase?.customer?.address?.city} - {purchase?.customer?.address?.state} 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Pagás ${purchase?.order?.price}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default PurchaseConfirmation
