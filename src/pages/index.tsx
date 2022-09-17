import Link from 'next/link'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="StarkBank - Chanllenge">
    <h1>Olá, tudo bem?</h1>
    <p>Essa tela tem como principio demonstrar os Logs 
      das requisições feitas na aplicação
    </p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <a href="../api/cron.ts">
        Teste
      </a>
    </p>
  </Layout>
)

export default IndexPage
