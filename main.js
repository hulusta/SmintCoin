const {Blockchain, Transactions} = require("./blockchain"); 

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3fa5413a4363172593f78a350918970f28975ad201b0eec20b82ceac4f3d764c');
const myWalletAddress = myKey.getPublic('hex');

let savjeeCoin = new Blockchain();

const tx1 = new Transactions(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransactions(tx1);


console.log('\n Starting the miner...');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of xavier is", savjeeCoin.getBalanceOfAddress(myWalletAddress));

savjeeCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid', savjeeCoin.isChainValid());

