require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SIPOLA_URL = "https://sepolia.infura.io/v3/b0e18ae95ac44d59ac81d7a61e5ac02b" ;
const PRIVATE_KEY = "7e0d3bd21c414dc29842cf104cd331e560f33e28131e3aaadf61c8d1d8d5b365" ;

module.exports =  {
  solidity:"0.8.19",
  networks:{
    sepolia:{
      url:SIPOLA_URL,
      accounts:[PRIVATE_KEY],
    },
  },
}
