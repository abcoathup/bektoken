pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/CappedToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "zeppelin-solidity/contracts/token/ERC827/ERC827Token.sol";

/**
 * @title BekToken
 * @dev ERC20 Token
 */
contract BekToken is CappedToken, DetailedERC20, ERC827Token {
  uint8 constant _decimals = 18;

  function BekToken() CappedToken(10**9 * 10**uint256(_decimals)) DetailedERC20("BekToken", "BEK", _decimals) public {}

}