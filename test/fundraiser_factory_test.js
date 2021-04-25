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

    // イベントが発行されているかテストコード
    it ("emits the FundraiserCreated event", async () => {
        fundraiserFactory = await FundraiserFactoryContract.deployed();
        // インスタンスを作成する。
        const tx = await fundraiserFactory.createFundraiser(name, url, imageURL, description, beneficiary);
        const expectedEvent = "FundraiserCreated";
        const actualEvent = tx.logs[0].event;
        assert.equal(actualEvent, expectedEvent, "events should match");
    });
});

// Fundraiserコントラクトインスタンスページング作成用テストコード
contract ("FundraiserFactory: fundraisers", (accounts) => {
    // インスタンス生成関数
    async function createFundraiserFactory (fundraisersCount, accounts) {
        // インスタンス初期化
        const factory = await FundraiserFactoryContract.new();
        // addFundraisers関数を呼び出し
        await addFundraisers (factory, fundraiserCount, accounts);
        return factory;
    }
    
    /**
     * addFundraisers関数
     */
    async function addFundraisers (factory, count, accounts) {
        // 変数を初期化
        const name = "Beneficiary";
        const lowerCaseName = name.toLowerCase();
        const beneficiary = accounts[1];

        for (let i=0; i < count; i++) {
            // インスタンスを生成
            await factory.createFundraiser (`${name} ${i}`, `${lowerCaseName}${i}.com`, `${lowerCaseName}${i}.png`, `Description for ${name} ${i}`, beneficiary);
        }
    }

    // 空のコレクションでページングするテストコード
    describe ("when fundraisers collection is empty", () => {
        it ("returns an empty collection", async () => {
            // インスタンス生成
            const factory = await createFundraiserFactory (0, accounts);
            // fundraisers関数を呼び出し
            const fundraisers = await factory.fundraisers (10, 0);
            assert.equal(fundraisers.length, 0, "collection should be empty");
        });
    });
});