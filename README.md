# SkipAniaCheck

WIXOSS公式サイトの年齢確認ページを自動的にスキップするFirefox拡張機能です。

WIXOSSの公式サイトにアクセスした際、年齢確認ページが表示された場合、自動的に「はい」ボタンを押して元のページに戻ります。

## インストール

### Firefoxアドオンストア（推奨）

以下のリンクからインストールできます：

**[SkipAniaCheck - Firefox Add-ons](https://addons.mozilla.org/ja/firefox/addon/skipaniacheck/)**

### ローカルで使用（一時的なアドオン）

#### 1. ファイルのダウンロード

以下のいずれかの方法でファイルを取得：

- **方法A**: リポジトリ右上の「Code」→「Download ZIP」からダウンロードして解凍
- **方法B**: 以下の2ファイルを開いて「Raw」ボタン→右クリック→「名前を付けて保存」
  - [`manifest.json`](manifest.json)
  - [`content.js`](content.js)

#### 2. Firefoxに読み込む

1. Firefoxで `about:debugging#/runtime/this-firefox` を開く
2. 「一時的なアドオンを読み込む」をクリック
3. ダウンロードしたフォルダ内の `manifest.json` を選択

**注意**: 一時的なアドオンはFirefoxを再起動すると削除されます。

## 注意事項

この拡張機能は個人使用を目的としています。年齢確認は法的要件を満たすために設置されている場合があるため、使用は自己責任でお願いします。
