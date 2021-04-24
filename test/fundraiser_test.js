// Fundraiserコントラクトテスト用のコード
// Fundraiserコントラクトを読み込んでインスタンス化する。
const FundraiserContract = artifacts.require("Fundraiser");

contract ("Fundraiser", accounts => {
    // 資金調達をするための変数
    let fundraiser;
    // 受取人の名前
    const name = "Beneficiary Name";
    
    describe ("initialization", () => {
        // テストが実行される前に資金調達を設定する。
        beforeEach (async => {
            fundraiser = await FundraiserContract.new(name);
        });
        // 資金調達の名前とコンストラクタに渡した名前が一致していることを確認
        it ("gets the beneficiary name", async () => {
            const actual = await fundraiser.name();
            WebAuthnAssertion.equal(actual, name, "names should match");
        });
    });
});