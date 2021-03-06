## 最低限の統一したい項目
* 文字コード
  * 基本は utf-8
    * 統一しないと文字化ける
* 改行コード
  * 基本は lf（エンジニアさんに確認するのがベター）
    * cr, crlf, lf が混在するとシステムエラーが出てエンジニアさんが苦労する（らしい）
* インデントの種類
  * 基本は space（tabは環境によって見た目が異なる…らしい）
    * tabとspaceが混在するとインデントがガタガタになってエディタの素敵な機能が使えなくなる
    * 混在してなくてもガタガタだとエディタの素敵な機能が使えなくなる
* インデントのサイズ
  * 基本は 2字
    * 理由は「インデントの種類」と同じ
    * 追加理由で、space 4字など文字数が増える=ファイルサイズが大きくなる

※改行コード、インデント文字（tabやspace）は違いに気づけるように、常に表示させるのがおすすめ。<br>
表示方法は「不可視文字 表示 エディタ名（atom、sublime…など）」で検索。

上記を手軽に統一するために**EditorConfig**がおすすめ。<br>
※エディタがdreamweaverの人は…手動で設定。

### EditorConfigについて
公式サイト： [EditorConfig](http://editorconfig.org/)

* メジャーなエディタに対応している（dreamweaverは対応してない）
* 導入も設定も楽
  * 導入=プラグインをインストールしてプロジェクトのルートディレクトリに「 .editorconfig 」ファイルを置く
  * 設定=「 .editorconfig 」に設定内容を記述する（下記サンプルソース）


  ※ただし、charset = shift_jis を指定する場合は要注意！<br>
  （下記リンクの「コラム：サポート外の文字コードを指定した場合の挙動」）<br>
  [チーム開発に効く環境構築術　第1回 EditorConfigのススメ](https://app.codegrid.net/entry/editorconfig)

```
# コメント書きたい時は#で始める（※1行コメントです）

root = true

[*.{html,scss,css,js}]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 2
```

※scssコンパイルするからcssいらないかも。

書き方の参考： [.editorconfig の書き方](http://qiita.com/inabe49/items/d81fed3cf58ad751d915)<br>
EditorConfig全般の参考： [チーム開発に効く環境構築術　第1回 EditorConfigのススメ](https://app.codegrid.net/entry/editorconfig)<br>

### コーディング規約
ルールやベースなどを作っておいた方が良いもの。

#### ディレクトリ構成
規模によって適宜どこにどのファイルを格納するか決めておく。<br>
[便利な記号](http://qiita.com/paty-fakename/items/c82ed27b4070feeceff6)<br>

#### 対象ブラウザへの対応
前もって確認して、使用できるかできないかある程度検討しとく。<br>

#### 命名規則
* 命名規則が必要なもの
    * ディレクトリ名
    * ソースファイル名
    * 画像やその他pdf、zip…etcのファイル名
    * ID、クラス名


* 基本的な共通ルール
    * 半角英数字のみを使用。
    * 機種依存文字の使用禁止。
    * 必ずアルファベットからはじめる。数字からはじめてはいけない。
    * 全角スペース、半角スペース（Space）の使用禁止。
    * 「\」,「/」,「\*」,「:」,「?」,「<」,「>」,「|」,「＄」これらの文字の使用禁止。


* その他ルールが必要そうなもの
    * 大文字、小文字の使用ルール（小文字のみ使用とし、キャメルケース使用禁止など）
    * キャメル、スネーク、チェインケースの使いどころ
    * js用のID、クラスの接頭辞に「js-」をつけ、そのクラス名にスタイルは指定しないなど。


##### 命名規則 - もっと詳しく - ID、クラス名
* 概ねこれでOK→（[BEMの考え方を基にしたHTML / CSSのid・classの命名規則](http://qiita.com/kitaro729/items/3189ded5647475bc2ae7)）
* 上記だと名前が長くなりすぎるので、文字省略のルール（省略する場合は単語の先頭の子音3文字にする）など...他もろもろ

##### 細かい記述のルールなど
* ここ一通り読めばOK→ [ガイドライン・スタイルガイドのまとめ](http://coliss.com/articles/build-websites/operation/work/css-guidelines-for-developers-2015-summer.html)
* FAオリジナルルールでどこにどのタグを使って、スタイルはこう組んでなどの細かいものは、<br>
gitに移行してプルリクしてコードレビューして...などしないと無理だと思うので割愛。

##### その他参考になりそうなもの
* [表記ルール: 企業サイトで使用する「ひらく漢字」「ひらかない漢字」](http://coliss.com/articles/build-websites/operations/notational-convention-for-writing.html)
* [Google Design](https://design.google.com/)
* [Material Design（Google）の日本語解説](http://dev.classmethod.jp/smartphone/android/google-material-design/)
* そのうち導入できればいいな → [スタイルガイドジェネレータを比べてみた](http://qiita.com/shwld/items/d41ba36e9fd2e636c723)
* [テキスト](url)
