require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hope clock brand ten index riot pitch unknown gloom forest surge ticket'; 
let testAccounts = [
"0x256798fea74232113a698c9e82f8c864332400f44d5eadc4fcb9819a4f4f27e5",
"0x02e9332eeecf782a5f1677db50602880f0e0d4305fb0fe8d89f3350c3d5b52c7",
"0x0823c9894ad68f1fa7d27a9827dd64f434abce4f6b08a69729c5d424e447871a",
"0x1c5a831cac263641ff9ba28d10b9f4fe34077d309b4ce9aae83e7cf44bb2edab",
"0x72ea02858f5164f0b11cf18b158dd4c9c16a60fc82a041d5f43b6ad18f84a2ab",
"0x8b519d176f8077b057b0d85f484955b42e15c44074b8704a93756e9d2eaf3700",
"0xe5ef3f74ca5dc56ffdfc26ca6315c32b2aff960f29e5a2d7ed39002a7ff716d4",
"0x145ed88c21d141a6b6fad47c51c1c7c0d26c48a5509e11d9a3fa47fff9a419f3",
"0xfc04ab7157598bb45a6053e7116e08992a3d43ffc33d69a4531e2b90e507b23b",
"0x4034b5fe6413f6ae22777b35c02a4fe0a646d7e4a05e06aa9c6b14c617c7e8b9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

