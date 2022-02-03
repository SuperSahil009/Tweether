// SPDX-License-Identifier: MIT
pragma solidity ^0.5.10;
import '../helpers/BaseStorage.sol';
contract UserStorage is BaseStorage {

    uint latestUserId = 0;
    struct Profile{
        uint id;
        bytes32 username; //bytes32 because string is expensive, data size matters a lot in ETH
    }
    mapping(uint => Profile) public profiles;

    function createUser(bytes32 _username)public onlyController returns(uint){
        require(msg.sender == controllerAddr);
        latestUserId++;
        profiles[latestUserId] = Profile(latestUserId, _username);
        return latestUserId;
    }

}