import { NextApiRequest, NextApiResponse } from 'next'

const handler =  (req: NextApiRequest, res: NextApiResponse) => {
  try {

    let data = [
      {}
    ]

    switch (req.method) {
      case 'GET':
        res.status(200).json({data})
        break
      case 'POST':
        const body = req.body;

        if (body === ""){
          return res.status(400).json({mensagem: "Sem dados de inVoices"})
        }

        data.push({body})

        if (body.event.log.invoice.status == "credited") {
          const amount = body.event.log.invoice.amount
          //get amount e diminuir taxas
          //chamar a requisição da API transfer(amount)
        }
        console.log(body.event.log.invoice)
        return res.status(200).json([data])
        
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Metodo ${req.method} Nao Permitido`)
    }

  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
