const starkbank = require('starkbank');

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

    for(let i = 0; i < quantity; i++) {
        (async() => {
            let invoices = await starkbank.invoice.create([{
                amount: 800000,
                taxId: '012.345.678-90',
                name: names[getRandomInt(0, 8)],
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

function invoiceLogs(){
    let cont = 0;

    return (async() => {
        let invoices = await starkbank.invoice.query({
            after: '2022-09-16',
            before: '2022-10-01',
        });

        for await (let invoice of invoices) {
            cont++
        }
        
    })();
}


module.exports = { inVoiceCreate, transfer, invoiceLogs };
