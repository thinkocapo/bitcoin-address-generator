var bitcoin = require("bitcoinjs-lib")
var keyPair = bitcoin.ECPair.makeRandom();
console.log('keyPair address', keyPair.getAddress());
var address = keyPair.getAddress();
console.log('privateKey', keyPair.toWIF());
var pkey = keyPair.toWIF();
