### xamppのサイトルートを変更したい時

*バーチャルホストを設定する。

#### httpd.conf を編集

/Application/XAMPP/etc/httpd.conf を開き、470行目付近にある

~~~ruby
# Virtual hosts
# Include /Applications/XAMPP/etc/extra/httpd-vhosts.conf
~~~

という部分のコメント（#）を外し、以下にする。

~~~ruby
# Virtual hosts
Include /Applications/XAMPP/etc/extra/httpd-vhosts.conf
~~~

#### httpd-vhosts.conf の編集

/Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf
<br>※初めから書かれているサンプルは削除かコメントアウトする。
<br>以下のようにディレクトリとサーバ名（任意）を適宜、追記する。

~~~ruby
<VirtualHost *:80>
    DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs"
    ServerName localhost
</VirtualHost>
~~~

#### hostsの設定をする
hostsファイルの場所は、/private/etc にありますので、まずはファインダーを開き、「cmd + Shift + G」と押すと「フォルダの場所を入力」と言われるので「/etc/」と入力して「移動」を押せばOK。<br>
以下を追記する。（古いものを削除する必要はないぽい。）

~~~ruby
127.0.0.1	ServerName
~~~
