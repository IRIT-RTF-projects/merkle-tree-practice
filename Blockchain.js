/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;

class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);
    }
}

class Blockchain {
    constructor() {
        this.chain = [
            /* TODO 1: Create the genesis block here */ 
                new Block("")
            ];
    }

    addBlock(block){
        // TODO 2 Compute block.previousHash = previousBlock.toHash()
        block.previousHash = this.chain[this.chain.length - 1].toHash()
        this.chain.push(block)
    }

    isValid(){
        // TODO 3 Check every block previous hash
        if (this.chain.length < 2) {
            return true
        }
        for (let i = 1; i < this.chain.length; i++) {
            let block = this.chain[i]
            let previousBlock = this.chain[i - 1]
            if (String(block.previousHash) != String(previousBlock.toHash())) {
                return false
            }
        }
        return true;
    }
}

module.exports = { Block, Blockchain };
