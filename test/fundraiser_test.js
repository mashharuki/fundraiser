// Fundraiserコントラクトテスト用のコード
// Fundraiserコントラクトを読み込んでインスタンス化する。
const FundraiserContract = artifacts.require("Fundraiser");

contract ("Fundraiser", accounts => {
    // 資金調達をするための変数
    let fundraiser;
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
    // 管理人のアドレス
    const custodian = accounts[0];
    
    describe ("initialization", () => {
        // テストが実行される前に資金調達を設定する。
        beforeEach (async () => {
            fundraiser = await FundraiserContract.new(name, url, imageURL, description, beneficiary, custodian);
        });
        // 資金調達の名前とコンストラクタに渡した名前が一致していることを確認
        it ("gets the beneficiary name", async () => {
            const actual = await fundraiser.name();
            assert.equal(actual, name, "names should match");
        });
        it ("gets the beneficiary url", async () => {
            const actual = await fundraiser.url();
            assert.equal(actual, url, "url should match");
        });
        it ("gets the beneficiary imageURL", async () => {
            const actual = await fundraiser.imageURL();
            assert.equal(actual, imageURL, "imageURL should match");
        });
        it ("gets the beneficiary description", async () => {
            const actual = await fundraiser.description();
            assert.equal(actual, description, "description should match");
        });
        // 受取人のアドレスが正常かどうかチェックするテストコード
        it ("gets the beneficiary description", async () => {
            const actual = await fundraiser.beneficiary();
            assert.equal(actual, beneficiary, "beneficiary address should match");
        });
        // 管理人のアドレスが正常かどうかチェックするテストコード
        it ("gets the custodian", async () => {
            const actual = await fundraiser.custodian();
            assert.equal(actual, custodian, "custodian should match");
        });
    });
});