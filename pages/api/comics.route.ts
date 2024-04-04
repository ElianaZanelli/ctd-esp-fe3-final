import { NextApiRequest, NextApiResponse } from 'next';
import { getComics } from '../../services/marvel/marvel.service';

type ComicsApiRequest = NextApiRequest & { query: { offset: string, limit: string } };

const comicsApiHandler = async (req: ComicsApiRequest, res: NextApiResponse) => {
  const { offset, limit } = req.query;

  if (!offset || !limit) {
    return res.status(400).json({ error: 'Faltan parámetros' });
  }

  try {
    const response = await getComics(parseInt(offset), parseInt(limit));
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error recuperando los cómics:', error);
    res.status(500).json({ error: 'Falló al recuperar los cómics' });
  }
};

export default comicsApiHandler;