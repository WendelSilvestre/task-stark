import Link from 'next/link'
import Layout from '../components/Layout'
require('dotenv').config({path: __dirname + '/.env'})


// const stark = require('../utils/starkBankUtils.Js')

// console.log(stark.add())


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

//export default IndexPage
