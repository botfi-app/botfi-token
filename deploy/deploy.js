
module.exports = async ({getUnnamedAccounts, deployments, ethers, network}) => {

    try{

        const {deploy} = deployments;
        const [owner, proxyAdmin] = await getUnnamedAccounts();
        let networkName = network.name;
        let chainId = (await ethers.provider.getNetwork()).chainId;

        //let signer = await ethers.getSigner(owner)

       console.log(`owner: ${owner}`)
       console.log(`networkName: ${networkName}`) 
       console.log(`chainId: ${chainId}`)

       console.log("Deploying Factory Contract")

        let deployedToken = await deploy('BotFi', {
            from: owner,
            args: [],
            log: true
        });
        

        console.log(`BotFi Token Deloyed: ${deployedToken.address}`);
        
    }  catch(e) {
        console.log(e,e.stack)
    }

}
