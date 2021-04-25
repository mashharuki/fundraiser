pragma solidity >0.4.23;

import "./Fundraiser.sol";

contract FundraiserFactory {
    // Fundraiser型の配列
    Fundraiser[] private _fundraisers;

    // インスタンスが生成された時のイベント
    event FundraiserCreated (Fundraiser indexed fundraiser, address indexed owner);

    /**
     * インスタンス数を取得する関数
     */
    function fundraisersCount () public view returns (uint256) {
        return _fundraisers.length;
    }

    /**
     * インスタンス生成関数
     */
    function createFundraiser (string memory name, string memory url, string memory imageURL, string memory description, address payable beneficiary) public {
        // インスタンスを生成
        Fundraiser fundraiser = new Fundraiser (name, url, imageURL, description, beneficiary, msg.sender);
        // 配列に格納する。
        _fundraisers.push(fundraiser);
        // イベントの発行
        emit FundraiserCreated(fundraiser, fundraiser.owner());
    }


}