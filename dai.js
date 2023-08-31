const {ethers} = require("ethers");
const provider = ethers.getDefaultProvider("mainnet");
const ERC20_ABI  = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(address, ERC20_ABI, provider);
console.log(contract);
const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totaSupply = await contract.totalSupply()
    console.log(`Readind from ${address}`)
   console.log(`name: ${name}`)
   console.log(`total supply: ${totaSupply}`)
   console.log(`reading symbol: ${symbol}`)

   const balance = await contract.balanceOf('0x075e72a5eDf65F0A5f44699c7654C1a76941Ddc8')
   console.log(`Balance Returned: ${balance}`) 
 }
 main();