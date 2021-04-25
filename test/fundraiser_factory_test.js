// FundraiserFactoryコントラクト用のテストコード

// FundraiserFactoryコントラクトを読み込んでインスタンス化する。
const FundraiserFactoryContract = artifacts.require("FundraiserFactory");

// コントラクトのデプロイ用テストコード
contract ("FundraiserFactory: deployment", () => {
    it ("has been deployde", async () => {
        const fundraiserFactory = FundraiserFactoryContract.deployed();
        assert(fundraiserFactory, "fundraiser factory was not deployed") 
    });
});
