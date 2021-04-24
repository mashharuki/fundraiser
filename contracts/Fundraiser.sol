pragma solidity >0.4.23;

contract Fundraiser {
    // 変数を宣言する。
    string public name;
    string public url;
    string public imageURL;
    string public description; 

    // コンストラクター
    constructor (string memory _name, string memory _url, string memory _imageURL, string memory _description) public {
        name = _name;
        url = _url;
        imageURL = _imageURL;
        description = _description;
    }
}