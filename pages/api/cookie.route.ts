import { type NextApiRequest, type NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.setHeader('set-cookie', 'Access=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly')
  res.status(200).json([])
}

export default handler
