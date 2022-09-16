const starkbank = require('starkbank');

let privateKeyContent = '-----BEGIN EC PRIVATE KEY-----MHQCAQEEICtwSwxEZS4P5O4gfTw1RszXgppC0Icg4u3OvVB75JJmoAcGBSuBBAAKoUQDQgAEG4gu8eVpKyVAyN6b6f+6No+Jx2IAqpa6mBTgMDOsvY2jEkUJDdf0vtt5RX+3iU1gZRXVSZeqyLlnMSNPU33jMQ==-----END EC PRIVATE KEY-----'

let user = new starkbank.Project({
    environment: 'sandbox',
    id: 5609313628323840,
    privateKey: privateKeyContent
});

starkbank.user = user;


function inVoiceCreate(){

(async() => {
    let invoices = await starkbank.invoice.create([{
        amount: 400000,
        due: '2022-16-09T16:27:37.585+00:00',
        taxId: '012.345.678-90',
        name: 'Jon Snow',
        expiration: 123456789,
        fine: 2.5,
        interest: 1.3,
        discounts: [
            {
                'percentage': 10,
                'due': '2020-11-25T17:59:26.249976+00:00'
            }
        ],
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

function add(){
    return "10"; 
}

module.exports = { inVoiceCreate, add };


function transfer(amount){
    const starkbank = require('starkbank');

(async() => {
    let transfers = await starkbank.transfer.create([
        {
            amount: amount,
            bankCode: '20018183',
            branchCode: '0001',
            accountNumber: '6341320293482496',
            taxId: '20.018.183/0001-80',
            name: 'Stark Bank S.A.',
            externalId: 'my-external-id',
            scheduled: '2020-08-14',
            tags: ['iron', 'suit']
        }
    ])

    for (let transfer of transfers) {
        console.log(transfer);
    }
})();
}