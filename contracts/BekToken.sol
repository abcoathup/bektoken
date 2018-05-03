pragma solidity 0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/CappedToken.sol";
import "openzeppelin-solidity/contracts/token/ERC827/ERC827Token.sol";

/**
 * @title BekToken
 * @dev ERC20 Token
 */
contract BekToken is DetailedERC20, CappedToken, ERC827Token {
  string public baseUnit = "bee";
  uint8 constant _decimals = 18;

  constructor() DetailedERC20("BekToken", "BEK", _decimals) CappedToken(100 * 10**9 * 10**uint256(_decimals)) public {}

}