// contracts/BotFiToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract BotFiToken is 
    Context,
    ERC20,
    ERC20Permit,
    ERC20Burnable
{

    string  constant  _name        = "BotFi Token";
    string  constant  _symbol      = "BOTFI";
    uint256 constant  _totalSupply = 1_000_000_000e18;

    constructor() ERC20Permit(_name) ERC20(_name, _symbol) {
        _mint(_msgSender(), _totalSupply);
    }

    /*/////////////
     // Overrides 
     *////////////
    function _afterTokenTransfer(address from, address to, uint256 amount) 
        internal 
        virtual 
        override(ERC20)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) 
        internal 
        virtual 
        override(ERC20)
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function _burn(address account, uint256 amount) 
        internal 
        virtual 
        override(ERC20)
    {
        super._burn(account, amount);
    }

    function _mint(address account, uint256 amount) 
        internal 
        virtual
        override(ERC20)
    {
        super._mint(account, amount);
    }

     /*/////////////
     // End Overrides 
     *////////////
}