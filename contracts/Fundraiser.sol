pragma solidity >0.4.23;

contract Fundraiser {
    string public name;

    // コンストラクター
    constructor (string memory _name) public {
        name = _name;
    }
}