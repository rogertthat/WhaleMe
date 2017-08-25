var ConvertLib = artifacts.require("./ConvertLib.sol");
var MyToken = artifacts.require("./MyToken.sol");
var CrowdSale = artifacts.require("./CrowdSale.sol");
var WeWhale = artifacts.require("./WeWhale.sol");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    
    /*params: 
        1) total supply of tokens 
        2) token name 
        3) decimal places 
        4) token symbol
    */
    deployer.deploy(MyToken, 35000000000000000000000, 'WhalerCoin', 8, 'WLC').then(function()
    {
        /*params:
            1) if campaign successful (always will be), send all ETH to this address 
            2) funding goal in ETH 
            3) duration mins 
            4) token cost in ETH
            5) token address
        */
        return deployer.deploy(CrowdSale, '__DEVELOPER1_ADDRESS__', 60, 20, 1, MyToken.address).then(function()
        {
            /*params:
                1) ERC20 Token address
                2) Token Sale address
                3) Kill Switch password
                4) Earliest buy block
                5) Number of minutes for user manual withdraw
                6) 2nd developer address
                7) Beneficiary address
            */
            return deployer.deploy
            (
                WeWhale, 
                MyToken.address, 
                CrowdSale.address, 
                web3.sha3('dD*&^D(*V)JDU B*V(D_)VKHVDY*V)NDVUBDV&(E'),
                web3.eth.blockNumber, //Assume crowdsale is open now
                60,
                '',
                ''
            );
        });
    });
};
