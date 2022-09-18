import Link from 'next/link'
import Script from 'next/script'
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="StarkBank - Chanllenge">
    <h1>Olá, tudo bem?</h1>
    <p>Essa tela tem como principio demonstrar os Logs 
      das requisições feitas na aplicação
    </p>

    {/* <table>
      <tr>
          <th>&nbsp;</th>
          <th>Pagas</th>
          <th>Pendentes</th>
      </tr>
      <tr>
          <td>Invoices</td>
          <td>Valorx</td>
          <td>ValorxP</td>
      </tr>
      <tr>
          <td>Transferidas</td>
          <td>ValorYx</td>
      </tr>
    </table> 

    function loadLogs() {
      fetch('/api/webhook')
      .then(function (response){
        return response.json();
      }). then(function(div){
        const tr = document.createElement('tr');
        tr.innerHTML = div.tr;
      })
    }
    loadLogs(); */}

  </Layout>
)

export default IndexPage
