# 手順

```shell
git clone https://github.com/techguild-dev/xserver-https-docker-test.git
```

# docker compose upを行う
    
```shell
    cd https_sample
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
(https_sampleまたはhttps_sample１を選択)
選択したコンテナにカーソルを合わせると、「▷」「⋯」「🔍」「💻」のアイコンが表示されます。「💻」アイコンをクリックします。(アイコンがない場合あり)
7.「Attach Visual Studio Code」が表示されるので、それをクリックします。
8.コンテナにVisual Studio Codeがアタッチされ、コンテナ内のファイルを編集できるようになります。

# node moduleのinstall
    
```shell
    yarn install
```

# ビルド
```shell
    yarn run　dev
```