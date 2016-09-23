### sc5-styleguide（スタイルガイドジェネレーター）

下記のいずれかを使用します。

* コマンドライン操作での作成
* gulpタスクでの作成
* Gruntタスクでの作成

※ gulp使用 ver
gulpのインストールまでは「/assets/markdown/gulp_memo.md」を参照。

参考：[スタイルガイドジェネレータのsc5-styleguideがいい感じそうだったので試してみた](http://qiita.com/shwld/items/188fd8495ada8e6d3125)

1. 任意の場所にスタイルガイドのトップページを作成する
    * トップページファイル = 任意のファイル名.md
    * プロジェクトのルートはいろいろなファイルやフォルダが増えていくことが多いため、他にした方が良さそう。
    * 例:'root/assets/styleguide/overview.md'

* gulpfile.jsを作成or必要な記述を追加する<br>
参考ファイル：/training/gulpfile.js<br>
参考サイト：[GitHub::sc5-styleguide#with-gulp](https://github.com/SC5/sc5-styleguide#with-gulp)

* コマンドラインで'gulp'を実行する。
* スタイルシートにスタイルガイド用のコメントとスタイルを記述する。<br>
書き方 例：（scss ver）<br>
  ~~~scss
  // 色
  //
  // 色です。
  //
  // markUp:
  // <p class="red">テキスト赤</p>
  // <p class="black">テキスト黒</p>
  //
  // Styleguide 1.0.0

  .red{
    color: #ff0000;
  }
  .black{
    color: #000000;
  }
  ~~~
  書き方 説明：<br>

  ```
  // 色 - (1)
  // （空行）- (2)
  // 色です。※省略可能 - (3)
  // （空行）- (2-1)
  // markUp: - (4)
  // <p class="red">テキスト赤</p> - (5)
  // <p class="black">テキスト黒</p> - (5)
  // （空行）- (2)
  // Styleguide 1.0.0 - (6)

  (1)項目のタイトル
  (2)空行は必須
  (3)説明文。省略も可能。省略する場合は(2-1)の空行も削除
  (4)html記述前の枕詞
  (5)htmlソース。1〜複数行が記述可能。
     1行ごとにコメントアウトすれば入れ子での記述も可能。
  (6)[Styleguide X.X.X] という形式で書く
     X.X.X の部分は数字で2.1.0みたいに書く。そうすると…
     親.子.孫 のように階層分けされる。
     桁数は可変にできるが、同じ番号は使えないので注意。
     番号被らなければ書き順は自由。

   ※ markUp, Styleguideなどは大文字、小文字の違いに注意
     (間違うと変換対象にしてくれない)
  ```
* 補足<br>
~~sassのincludeファイルには対応してないぽい。~~<br>
なぜかgulpfileの該当箇所はグロブパターンが使えないぽくて、ディレクトリを一つ一つ設定しないとダメぽい。
