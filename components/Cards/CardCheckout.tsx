import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

export interface CardCheckoutProps {
  title: string
  image: string
  id: number
  price: number
}
const CardCheckout: React.FC<CardCheckoutProps> = ({ title, image, price, id }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia sx={{ height: 300 }} image={image} title={`${title} imagen`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
          <span>${price}</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardCheckout