pragma solidity >0.4.23;

contract Fundraiser {
    // 変数を宣言する。
    string public name;
    string public url;
    string public imageURL;
    string public description; 
    // 受取人のアドレス
    address payable public beneficiary;
    // 管理人のアドレス
    address public custodian;

    /**
     * コンストラクター
     */
    constructor (string memory _name, string memory _url, string memory _imageURL, string memory _description, address payable _beneficiary, address _custodian) public {
        name = _name;
        url = _url;
        imageURL = _imageURL;
        description = _description;
        beneficiary = _beneficiary;
        custodian = _custodian;
    }
}