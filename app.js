const SHA256= require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash=' '){
        this.index = index;
        this.timestmap = timestamp;
        this.data= data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestmap + JSON.stringify(this.data)).toString();
    }

}
class blockchain{
    constructor(){
        this.chain = [this.createGenesis()];
    }

    createGenesis(){
    return new Block(0, "01/01/2017", "Genesis block", "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash= newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}
//small change to show how git clone works to students
let naveenkoin = new blockchain();
naveenkoin.addBlock(new Block(1,"10/07/2017",{amount:4}));
naveenkoin.addBlock(new Block(2,"15/10/2017",{amount:10}));

console.log(JSON.stringify(naveenkoin, null, 4));