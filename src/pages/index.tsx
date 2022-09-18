import Link from 'next/link'
import Script from 'next/script'
import { InvoiceList } from '../components/InvoiceList'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="StarkBank - Chanllenge">
    <div className="card">
        <div className="card-header">
          <h5 className="card-title">Invoices</h5>
          <p className="card-text">A list of invoices.</p>
        </div>
        <div className="card-body">
          <InvoiceList />
        </div>
    </div>
  </Layout>
)

export default IndexPage
