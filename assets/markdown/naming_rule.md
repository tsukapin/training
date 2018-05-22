## スタイルシートのファイル構成と命名規則について
### 基本的にはFLOCSSを採用。
- FLOCSS (フロックス) は OOCSS、BEM、SMACSS、SuitCSS、MCSS の考え方を取り入れた設計手法です。
- 命名規則は MindBEMding を採用。

参考：
[破綻しにくい CSS 設計手法と命名規則](https://murashun.jp/blog/20170729-01.html)
[CSSの設計 – FLOCSSをベースにしたファイルの構成と命名規則を考える](https://www.tam-tam.co.jp/tipsnote/html_css/post10205.html)
...など

---
### 命名規則について
クラス名はMindBEMdingを若干アレンジ
```
ハイフンはダブルクリックで全体を選択できない
→ B-E-Mを繋ぐ連結記号として使用。
アンダーバーは選択できる
→ 単語の区切りとして使用。
```
↓↓↓ 例 ↓↓↓
###### BEMの場合
~~~css
.block__element--modifier { color: #fff; }
.site-search__field--full { color: #fff; }
/*
site-search = block,
field = element,
full = modifier
*/
~~~

###### アレンジバージョン（これを採用！）
~~~css
.block-element--modifier { color: #fff; }
.site_search-field--full { color: #fff; }
/*
長くなりすぎるので
.block-element や .block--modifier のように
短縮可。
*/
~~~

###### 補足

```
Block（塊）
Element（要素）
Modifier（修飾語）
```


---

### ファイル構成について

- "Foundation"、"Layout"、"Object" の 3 つのレイヤーで構成されています。
- Object レイヤーは、"Component"、"Project"、"Utility" の 3 つの子レイヤーを持ちます。
※ 下記ツリーの（）内はクラス名に付与するプレフィックス。

  - ── Foundation
  - ├─ Layout
  - └─ Object
    - └─ Component（c-）
    - └─ Project (p-)
    - └─ Utility (u-)

###### Foundation レイヤー
- reset.css や normalize.css などの初期化用のスタイル。
- ベースルールで扱うデフォルトのスタイル。
- ページの背景や、フォントの設定。

###### Layout レイヤー
- ページを構成するヘッダーやフッター、メインコンテンツ、サイドバーなど共通で使用されるエリアのスタイルを定義。

###### Object レイヤー
- サイト内で再利用されるデザインのパターンをすべて "Object" と定義。
###### Component レイヤー
  >- 多くのプロジェクトで横断的に再利用できるような小さな単位のモジュールが該当。
  - 固有のサイズや装飾的なスタイル(幅・高さ、色など)を極力含まない。
  - 最低限のスタイル定義を行う。
  - クラス名の先頭に"c-"を付ける。
  例：ボタン、ナビゲーション、ページネーションなど。
###### Project レイヤー
>- プロジェクト固有のスタイルが該当。
 - プロジェクト内で横断的に再利用するスタイル。
 - 疑似要素のスタイルや、幅・高さ、色などのプロパティを設定。
 - クラス名の先頭に "p-" を付ける。
 例：記事一覧、ユーザプロフィール、画像ギャラリーなど。
 ※ 再利用回数が少ない場合はページ個別のスタイルに振り分けるのがベターかも。
###### Utilityレイヤー
>- 調整用のレイヤー（いわゆる汎用クラス）であり、ほとんどの場合で単一のスタイルを定義。
 - Component や Project の肥大化を防いだり、それらのレイヤーに定義することが適切ではないスタイルを定義する役割。
 - 確実にスタイルを適応させるために!importantを指定する場合が多い。
 - クラス名の先頭に "u-" を付ける。
 例：clearfix 、 margin など


###### 例
```
├── extension
│   ├── _variable.scss
│   ├── _function.scss
│   ├── _variable.scss
│   ├── _mixin.scss
│   └── _placeholder.scss
├── foundation
│   ├── _base.scss
│   └── _reset.scss
├── layout
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _main.scss
└── object
    ├── component
    │   ├── _button.scss
    │   ├── _dialog.scss
    ├── project
    │   ├── _articles.scss
    │   ├── _gallery.scss
    │   └── _profile.scss
    ├── custom（小規模サイトの場合は1ファイルでprojectに統合も可）
    │   ├── _page_name1.scss
    │   ├── _page_name2.scss
    │   └── _page_name3.scss
    └── utility
        ├── _clearfix.scss
        ├── _margin.scss
        ├── _position.scss
        └── _size.scss
```

###### 補足
さらに以下のようなレイヤーを追加することもできます。

>| レイヤー名 | 説明 |
|:-----------|:------------|
|Variable|プロジェクトで使用されるグローバル変数|
|Function|プロジェクトで使用されるグローバルなfunction|
|Mixin|プロジェクトで使用されるグローバルなmixin|
|Vendor|Normalize.cssやBootstrapのような外部のライブラリやフレームワーク|
|Vendor-extension|Vendorレイヤーの上書き（オーバーライド）|
|Theme|SMACSSのThemeモジュールに該当するテーマによる色の切り替えなど|
|Scope|ブログの投稿用スタイルなどのスコープを作る|
|QA/Test|QA/Test - Quality Assurance（品質保証）、もしくはテストのための一次的なスタイル|
※CSSプリプロセッサ（SassやStylusなど）を使う場合はVariable、Function、Mixinの3つのレイヤーは必ず追加されます。

レイヤーにまとめたモジュールは、そのレイヤーごとに接頭辞（プレフィックス）をつけます。

>| 接頭辞 | 説明 |
|:-----------|:------------|
|l-|Layoutレイヤー|
|c-|Componentレイヤー|
|p-|Projectレイヤー|
|u-|Utilityレイヤー|
|t-|Themeレイアー|
|s-|Scopeレイヤー|
|qa- .te-|QA/Testレイヤー|
|is-|クリックなどのイベントが発生している要素に付与する|
|js-|JavaScriptから参照される要素（スタイルは当てない）|





---
# 見出し1
## 見出し2
#### 見出し4
###### 見出し6

---
### テキスト装飾
*イタリック* <br>
_イタリック_ <br>
**太字** <br>
__太字__ <br>
~~取り消し線~~

---
### リスト
* リスト項目1
+ リスト項目2
- リスト項目3


1. リスト項目1
2. リスト項目2
3. リスト項目3

---
### 箇条書きリスト
- リスト1
  - ネスト リスト1_1
     - ネスト リスト1_1_1
     - ネスト リスト1_1_2
  - ネスト リスト1_2
- リスト2
- リスト3

---
### 引用
> テキストテキスト<br>
> テキスト<br>
>> テキストテキスト<br>
>> テキスト<br>

---
### コードブロック
`print('HelloWorld!');`

---
### pre記法
```
　class Hoge
　  def hoge
　    print 'hoge'
　  end
　end
```

~~~ruby
　class Hoge
　  def hoge
　    print 'hoge'
　  end
　end
~~~

---
### テーブル
| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| left       |       right |    center    |

---
### 水平線
---
***
* * *

---
### リンク
[Qiita](http://qiita.com/)<br>
[Yahoo!Japan](http://www.yahoo.co.jp/)<br>

---
### タイトル
追加があれば
