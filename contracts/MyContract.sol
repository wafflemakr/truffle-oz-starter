// SPDX-License-Identifier: MIT
pragma solidity 0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract MyContract is Ownable {
	using SafeMath for uint256;

	bool started;

	function start() external onlyOwner {
		started = true;
	}
}
