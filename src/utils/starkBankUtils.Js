const starkbank = require('starkbank');

// This is only an example of a private key content. You should use your own key.
let privateKeyContent = `
-----BEGIN EC PARAMETERS-----
BgUrgQQACg==
-----END EC PARAMETERS-----
-----BEGIN EC PRIVATE KEY-----
process.env['PRIVATE_KEY_STARK']
-----END EC PRIVATE KEY-----
`

// for project users:
let user = new starkbank.Project({
    environment: 'sandbox',
    id: process.env['PROJECT_ID_STARK'],
    privateKey: privateKeyContent
});

starkbank.user = user;


// function inVoiceCreate(){

// (async() => {
//     let invoices = await starkbank.invoice.create([{
//         amount: 400000,
//         due: '2021-05-15T16:27:37.585+00:00',
//         taxId: '012.345.678-90',
//         name: 'Jon Snow',
//         expiration: 123456789,
//         fine: 2.5,
//         interest: 1.3,
//         discounts: [
//             {
//                 'percentage': 10,
//                 'due': '2020-11-25T17:59:26.249976+00:00'
//             }
//         ],
//         tags: ['War supply', 'Invoice #1234'],
//         descriptions: [
//             {
//                 'key': 'Field1',
//                 'value': 'Something'
//             }
//         ]
//     }]);

//     for (let invoice of invoices) {
//         console.log(invoice);
//     }
// })();

// function add(){
//     return 2+3; 
// }

// module.exports = { inVoiceCreate, add };
//}


// function transfer(){
//     const starkbank = require('starkbank');

// (async() => {
//     let transfers = await starkbank.transfer.create([
//         {
//             amount: 1000000,
//             bankCode: '033',
//             branchCode: '0001',
//             accountNumber: '10000-0',
//             taxId: '276.685.415-00',
//             name: 'Tony Stark',
//             externalId: 'my-external-id',
//             scheduled: '2020-08-14',
//             tags: ['iron', 'suit']
//         }
//     ])

//     for (let transfer of transfers) {
//         console.log(transfer);
//     }
// })();
// }