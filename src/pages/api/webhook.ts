import { NextApiRequest, NextApiResponse } from 'next'
import stark from '../../utils/starkBankUtils'

const handler  = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

        const body = req.body;

        if (body === ""){
          return res.status(400).json({mensagem: "Sem dados de inVoices"})
        }

        if (body.event.log.type == "credited") {
          let amount = body.event.log.invoice.amount
          const fee = body.event.log.invoice.fee

          amount += amount/100 * fee

          console.log(stark.transfer(amount))
        }
        console.log(body.event.log)
        return res.status(200).json(body)
    } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
