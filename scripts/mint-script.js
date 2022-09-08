async function main() {

    // We get the contract to deploy
    const BinaryvilleRobotsNFT = await hre.ethers.getContractFactory("BinaryvilleRobotsNFT");
    const robotNFT = await BinaryvilleRobotsNFT.deploy();

    await robotNFT.deployed();

    console.log("BinaryvileRobotsNFT deployed to: ", robotNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
