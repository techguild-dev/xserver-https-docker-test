# 手順

```shell
git clone https://github.com/techguild-dev/xserver-https-docker-test.git
```

# docker compose upを行う
https_sampleとhttps_sample1のやり方は同じ(ymlファイルの名前が違う点には注意)
    
```shell
    cd xserver-https-docker-test
    cd https_sample1
    docker-compose -f docker-compose.dev.yml up -d
```
# リモート接続を使用して Visual Studio Code で Docker コンテナを開く方法

1.Visual Studio Codeを開き、左側のバーにある拡張機能アイコンをクリックします。


2.検索バーに「Docker」を入力し、検索結果の中から「Docker」と拡張機能をクリックします。


3.「Docker」拡張機能の詳細ページが開くので、右側にある「インストール」ボタンをクリックします。


4.「Docker」拡張機能がインストールされたら、Visual Studio Codeの左側バーにある「DOCKER」アイコンをクリックします。


＊「Remote Development」も同様に2〜4の手順でインストール


5.「DOCKER」アイコンをクリックすると、左側バーに「Containers」「Images」「Explorer」「Configuration」「Compose」が表示されます。ここで「Containers」をクリックします。


6.「Containers」が開いたら、作成したコンテナを選択します。

選択したコンテナにカーソルを合わせ右クリックをすると「Views Logs」が表示されるので、それをクリックするとターミナル上に
```bash
ready - started server on 0.0.0.0:3005, url: http://localhost:3005
```
が表示され動く。
http://localhost:3005アクセスすると画面が表示される。

（ターミナルをクリックし、control + d　で止められる）

7.選択したコンテナにカーソルを合わせ右クリックをすると「Attach Visual Studio Code」が表示されるので、それをクリックします。

8.コンテナにVisual Studio Codeがアタッチされ、コンテナ内のファイルを編集できるようになります。


# /appフォルダを開く

まずは、リモート接続ツールでサーバーに接続しましょう。
サーバーに接続したら、ターミナルを開きます。
ターミナルで、以下のコマンドを入力します。
```bash
cd /app
```
これによって、現在のディレクトリを「/app」に変更します。


次に、以下のコマンドを入力します。
```bash
code .
```
これによって、Visual Studio Codeを開きます。


Visual Studio Codeが開いたら、左側のサイドバーで「Explorer」をクリックします。
サイドバーの中で、「Open Folder」をクリックします。
「Open Folder」をクリックすると、ファイルブラウザが開きます。
ファイルブラウザで、/appフォルダを選択し、「OK」をクリックします。
これで、/appフォルダをVisual Studio Codeで開くことができます！

# sslの本番とtestの切り替え
オラオラ証明書ではなくletsencryptで発行したファイルを


https_sample1/docker/nginx/sslに配置し


https_sample1/docker/nginx/Dockerfile


https_sample1/docker/nginx/nginx.conf


ファイルの記述を書き換える。(コメントアウトを切り替え発行した鍵のファイル名のpathに書き換え)

