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