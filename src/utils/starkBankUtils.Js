const starkbank = require('starkbank');

let privateKeyContent =  process.env.PRIVATE_KEY_STARK

let user = new starkbank.Project({
    environment: 'sandbox',
    id: process.env.PROJECT_ID_STARK,
    privateKey: privateKeyContent
});

starkbank.user = user;


function inVoiceCreate(){


(async() => {
    let invoices = await starkbank.invoice.create([{
        amount: 400000,
        taxId: '012.345.678-90',
        name: 'Jon Snow',
        expiration: 123456789,
        fine: 2.5,
        interest: 1.3,
        tags: ['War supply', 'Invoice #1234'],
        descriptions: [
            {
                'key': 'Field1',
                'value': 'Something'
            }
        ]
    }]);

    for (let invoice of invoices) {
        console.log(invoice);
    }
})();

}

module.exports = { inVoiceCreate, transfer };


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