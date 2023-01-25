const hre = require("hardhat");
const { ethers } = require("hardhat");

function delay(t, val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val);
    }, t * 1000);
  });
}

const marketingWallet = "0x0171cDe0B76aFA40522c54301990043a853BA82D";
const blackListWallet = "0x0171cDe0B76aFA40522c54301990043a853BA82D";
const bridgeVault = "0x059f187aFfdcC7f7Cb1149285c3c687A5895b906";
const buyBackWallet = "0x0171cDe0B76aFA40522c54301990043a853BA82D";
const rbaToken = "0x238F5666A0f12c571B7B3fBd5b5a434146dFa0C5";
const router = "0x2fAe743821Bbc2CfD025C7E6B3Ee01ae202dd48B";
const f4h = "0xFAe063159b4d83d8491271a165eECa5632E4c288";
const usdc = "0x430EA547076C0051B252b1ab1ef83cd83F2D1aB4";
const fight = "0xD26e5FBF5b753df17B66527daA8094dF2d9E1cD2";
const divtracker = "0x3A4206a72C270833E6f025336E3a9121756ac2d6";

// module.exports = [router, rbaToken, marketingWallet, bridgeVault];

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Fight4Hope");
  const token = await Token.deploy(
    router,
    rbaToken,
    marketingWallet,
    bridgeVault
  );

  console.log("Token address:", token.address);

  // console.log("wait delay 1 minutes");
  // await delay(60);
  // console.log("now try to verify");
  // try {
  //   await hre.run("verify:verify", {
  //     address: token.address,
  //     contract: "contracts/Token20.sol:MyToken20",
  //     // constructorArguments: [owner],
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
