### Gulpの使い方

※ Macで設定　ver<br>

参考：[ざっくりGulp.js入門（Mac向け）](http://qiita.com/kazukichi/items/884a1379eea5918689ed)<br>
※ Node.jsはインストール済みで設定開始。

1. Homebrewをアップデート<br>
```
brew update
```
2. 念のためNode.jsのバージョン確認
```
node -v
```
3. npmも確認
```
npm -v
```
4. グローバル(Mac全体で使用)でgulpをインストール
```
sudo npm install gulp -g
```
5. package.jsonを生成する
```
npm init
```
name　だけ gulp で
 * 参考：<br>
 [npm package.json 取扱説明書](http://liberty-technology.biz/PublicItems/npm/package.json.html)<br>
 [npmでnode.jsのpackageを管理す
 る](http://qiita.com/sinmetal/items/395edf1d195382cfd8bc#npm-init)<br>

6. ローカル(プロジェクト内)でgulpをインストール<br>
※ gulpを使いたいプロジェクトのフォルダ内で下記コマンド実行（node_modulesフォルダができる）
```
npm i -D gulp
```
7. プラグイン（パッケージ、モジュール）のインストール
お好みで。
