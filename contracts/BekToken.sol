pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/CappedToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

/**
 * @title BekToken
 * @dev ERC20 Token
 */
contract BekToken is CappedToken, DetailedERC20 {
  uint8 constant _decimals = 18;

  constructor() CappedToken(10**9 * 10**uint256(_decimals)) DetailedERC20("BekToken", "BEK", _decimals) public {}

}