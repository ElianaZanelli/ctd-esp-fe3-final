import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CharactersAccordion from '../Accordions/CharactersAccordion'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Typography from '@mui/material/Typography'

interface Character {
    id: string
    name: string
    role: string
}

export interface CardComicProps {
    title: string
    description: string
    image: string
    id: number
    price: number
    oldPrice: number
    stock: number
    characters: Character[]
}

// Especifica el tipo de retorno de la función
export default function CardComic({
    title,
    description,
    image,
    price,
    id,
    oldPrice,
    stock,
    characters
}: CardComicProps): JSX.Element {
    return (
        <Card sx={{ width: 400 }}>
            <CardMedia sx={{ height: 350 }} image={image} title={`${title} imagen`} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    <span style={{ textDecoration: 'line-through' }}>${oldPrice}</span>
                    <span style={{ marginLeft: '0.5rem' }}>${price}</span>
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description?.length === 0 ? 'Sin descripción disponible' : description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {stock > 0 ? `${stock} disponibles!`:''}
                </Typography>
            </CardContent>
            <CardActions>
                {stock > 0
                    ? (
                        <Link href={{ pathname: '/checkout/', query: `comic=${id}` }}>
                            <Button variant="contained" endIcon={<ShoppingCartOutlinedIcon />}>
                                Comprar
                            </Button>
                            
                        </Link>
                    )
                    : (
                        <Button variant="contained" disabled>
                            Sin stock disponible
                        </Button>
                    )}
            </CardActions>
            <CharactersAccordion title="Personajes en cómic" characters={characters} />
        </Card>
    )
}
