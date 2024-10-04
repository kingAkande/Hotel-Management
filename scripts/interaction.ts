const hre = require("hardhat");

async function main() {
    const HotelManagement = await hre.ethers.getContractFactory("HotelManagement");
    const hotelManagement = await HotelManagement.deploy();
    await hotelManagement.deployed();
    console.log("Hotel Management Contract deployed to:", hotelManagement.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
