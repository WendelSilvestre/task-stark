import starkbank from 'starkbank';

let privateKeyContent =  process.env.PRIVATE_KEY_STARK

let user = new starkbank.Project({
    environment: 'sandbox',
    id: process.env.PROJECT_ID_STARK,
    privateKey: privateKeyContent
});

starkbank.user = user;


function inVoiceCreate(){

    const quantity = getRandomInt(8, 12)

    const names = ['Pam Beasley', 'Michael Scott', 'Dwight Schrute', 'Andy Bernard',
                    'Phyllis Vance', 'Stanley Hudson', 'Meredith Palmer', 'Gabe Lewis', 'Jo Benett'];

    const CNPJ = ['26.587.914/0001-94', '87.616.045/0001-73', '77.582.605/0001-62', '92.857.748/0001-23',
                    '18.606.277/0001-28', '66.032.216/0001-47', '67.582.551/0001-81', '50.440.783/0001-00', '19.738.777/0001-86' ]

    for(let i = 0; i < quantity; i++) {
        (async() => {
            const random = getRandomInt(0, 8)
            let invoices = await starkbank.invoice.create([{
                amount: getRandomInt(200000, 500000),
                taxId: CNPJ[random],
                name: names[random],
                expiration: 5097600,
                fine: 2.5,
                interest: 1.3,
                tags: ['Paper for Company Dunder-Mifflin', 'Invoice #1234'],
                descriptions: [
                    {
                        'key': 'Paper',
                        'value': 'R$4000,00'
                    },
                    {
                        'key': 'Saber Printers',
                        'value': 'R$4000,00'
                    }
                ]
            }]);
    
            for (let invoice of invoices) {
                console.log(invoice);
            }
        })();
    }

}

function transfer(amount){

(async() => {
    let transfers = await starkbank.transfer.create([
        {
            amount: amount,
            bankCode: '20018183',
            branchCode: '0001',
            accountNumber: '6341320293482496',
            taxId: '20.018.183/0001-80',
            name: 'Stark Bank S.A.'
        }
    ])

    for (let transfer of transfers) {
        console.log(transfer);
    }
})();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function invoiceLogs(){
    let contTotal = 0;
    let contCredited = 0;
    let contPendent = 0;

    let invoices = await starkbank.invoice.query({
        after: '2022-09-16',
        before: '2022-10-01',
    });

    for await (let invoice of invoices) {
        contTotal++
    }

    let invoicesPaid = await starkbank.invoice.query({
        after: '2022-09-16',
        before: '2022-10-01',
        status: "created"
    });

    for await (let invoicesPaid of invoices) {
        contCredited++
    }

    contPendent = contTotal - contCredited;

    console.log("Total: " + contTotal + "\nPagos: " + contCredited + "\nPendentes: " + contPendent )
    return contTotal
        
}

export default {inVoiceCreate, transfer, invoiceLogs }
