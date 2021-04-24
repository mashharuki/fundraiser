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
    
    describe ("initialization", () => {
        // テストが実行される前に資金調達を設定する。
        beforeEach (async () => {
            fundraiser = await FundraiserContract.new(name, url, imageURL, description);
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
    });
});