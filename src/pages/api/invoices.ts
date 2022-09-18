import { NextApiRequest, NextApiResponse } from 'next'
import stark from '../../utils/starkBankUtils'

const handler  = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const invoices = await stark.invoiceLogs()
        
    res.status(200).json({invoices})
        
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
      }
    }
    
export default handler