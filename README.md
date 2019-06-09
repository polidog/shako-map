# shako-map

![map](map.gif "サンプル")


車庫証明を取得する際にめんどくさい「保管場所の所在図・配置図」を作るためのwebアプリ作りました。

## 環境構築

### configの設定

Google MAPのAPIキーが必要です。
自分で取得してください。

取得したキーをfirebase command使って設定します。

```shell
$ firebase functions:config:set google.api_key="your api key"
```

### デプロイ

```shell
$firebase deploy --project your-projectd-id
```

## ローカルで動かす場合

`firebase:config:`の値はローカルでは使えないので`.runtimeconfig.json`を生成します。

```shell
$ firebase functions:config:get > .runtimeconfig.json
```

あとは`firebase serve`でシミュレータ起動して、`http://localhost:5000`にアクセスすれば表示されるかと思います。