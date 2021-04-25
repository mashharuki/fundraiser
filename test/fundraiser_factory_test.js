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

// Fundraiserコントラクトインスタンス作成用テストコード
contract ("FundraiserFactory: createfundraiser", (accounts) => {
    let FundraiserFactory;
    // 以下、fundraiserの引数
    // 受取人の名前
    const name = "Beneficiary Name";
    // 詳細を確認できるURL
    const url = "beneficiaryname.org";
    // 画像のURL
    const imageURL = "https://placekitten.com/600/350";
    // 簡単な説明
    const description = "Beneficiary description";
    // 受取人のアドレス
    const beneficiary = accounts[1];

    // Fundraiserコントラクトを作成するテストコード
    it ("increments the fundraisersCount", async () => {
        fundraiserFactory = await FundraiserFactoryContract.deployed();
        // インスタンスの数を取得する。
        const currentFundraisersCount = await fundraiserFactory.fundraisersCount();
        // インスタンスを作成する。
        await fundraiserFactory.createFundraiser(name, url, imageURL, description, beneficiary);
        // インスタンスの数を取得する。
        const newFundraisersCount = await fundraiserFactory.fundraisersCount();
        // 差異を確認する。
        assert.equal((newFundraisersCount - currentFundraisersCount), 1, "should increment by 1");
    });
});