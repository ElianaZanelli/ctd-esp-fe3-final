import * as React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'
import Typography from '@mui/material/Typography'

export interface CardHomeProps {
  title: string
  image: string
  id: number
}

const CardHome: React.FC<CardHomeProps> = ({ title, image, id }) => {
  return (
    <Card sx={{ minHeight: '490px' }}>
      <CardMedia component="img" title={`${title} imagen`} height="300" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled>
          Comprar
        </Button>
        <Link href={`comics/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardHome
