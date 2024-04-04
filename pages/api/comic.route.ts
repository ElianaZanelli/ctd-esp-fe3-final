import { NextApiRequest, NextApiResponse } from 'next';
import { getComic } from '../../services/marvel/marvel.service';

type ComicApiRequest = NextApiRequest & { query: { id: string } };

const comicApiHandler = async (req: ComicApiRequest, res: NextApiResponse) => {
  const {id}= req.query;

  if (!id) {
    return res.status(400).json({ error: 'Faltan parámetros' });
  }

  try {
    const response = await getComic(parseInt(id));
    res.status(200).json(response);
  } catch (error) {
    console.error('Error recuperando cómic:', error);
    res.status(500).json({ error: 'Falló al recurerar el cómic' });
  }
};

export default comicApiHandler;