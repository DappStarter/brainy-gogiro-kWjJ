require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name recipe rural unfold include kangaroo army giant'; 
let testAccounts = [
"0xf82bc65bd8aea453a6ba953c79df3628f3078ab99f127fbbf80da6c2b34ba9d2",
"0x310e0f800f1f9444a3ae5b8bff55c0ec4173f21123d8c52b93777943e6df9ce0",
"0xee61288cec796e5dbacd7f7e87b0db0a72a1f56f8a6833d7f886782bcbd821ed",
"0x69806f9539be7ceebb221a517dcfdddf6cf56f1fd7617070d38a43fbf225a8a4",
"0x3f4b069c48c238d1a03be5b411086c544ae61895bc10e88315635a3868771d1b",
"0x2997f5b9a3a75eb4a12de18809fe2dfee9575033c2f0d7d6dc4d4dac941e1c3f",
"0xf54d4664e455701e8b249cc1dcecba4bdeabf6e7157f1574adbf6eae5db41585",
"0x0d3dc17d696b5fe88d45312220f359505cc52565f493dd9219c283bf97e84454",
"0x8a9f6c1112f87bc0f5f5d91dc502697a3563ce0717731152029d772ebf512f6b",
"0x4b475cc1cad1ece218eeade330bc9e8afbd2895ffde9af587b18473b0e584519"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

