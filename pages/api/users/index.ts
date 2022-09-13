import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {

    res.status(200).json([
      {id: 1, name: 'Wendel Silvestre'},
      {id: 2, name: 'Pedro Silvestre'},
    ])
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
