# Redux Saga Github Viewer

## 概要

こちらのリポジトリ は、[こちら](https://github.com/version-1/redux-github-viewer)のリポジトリ の続きの課題です。
ソースをコピーして、すでに作成したソースを元に課題を進めてください。

こちら課題では実際にGithub REST API V3 を使用して、自信のリポジトリ のissueのCRUDを行えるようにしていきます。

## デモ

こちらをGithub Pagesで公開使用となるとAccess Tokenをリポジトリにあげたりしないとできないので、
一旦公開はしていません。動画を貼り付けるのでそちらを参考にアプリを作成してください。

[デモ動画](https://youtu.be/IgqB1A6PJTY)

<< 動画の流れ >>

1. issueの作成
2. issueの更新
3. issueの削除
4. 画面遷移の確認
5. レスポンシブの確認

## 課題で身に着けること

- Reduxでの状態管理
- React Routerでのページ設定とページ遷移
- Eslint + Prettier
- Redux Sagaを使用したAPI通信
- Hooks API

## 課題の進め方

#### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。
redux-github-viewerのソースを元にリポジトリ を作成ください

#### 1. 実装に必要な概念を学ぶ

### 引き続きRedux
- [Redux.js公式](https://redux.js.org/introduction/getting-started)
- [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)]
- [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)

### REST APIについて
- [HTTPリクエスト/レスポンスの構成要素を初心者にも分かるように解説してみた](https://qiita.com/koheiyamaguchi0203/items/5777c4653a01ae4c7b06)
- [RESTful APIとは何なのか](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)
- [0からREST APIについて調べてみた](https://qiita.com/masato44gm/items/dffb8281536ad321fb08)

### ReduxでのAPI通信 Redux Saga
- [Redux Saga公式](https://redux-saga.js.org/)
- [redux-sagaをざっくり入門したい](https://hogehuga.com/post-1932/)
- [redux-sagaで非同期処理と戦う](https://qiita.com/kuy/items/716affc808ebb3e1e8ac)


#### 4.デモをみながらGithubViewerを実装

- Pull Reqeustページは仮置きしているのででものようにタイトルだけ書いたページを置いておいてください。

- 一箇所で長時間はまってしまった場合は別の機能を実装するか質問するようお願いします。

### チェックリスト

- [ ] reactのリポジトリの作成
- [ ] yarnでのパッケージインストール
  - [ ] redux, react-reduxのインストール
  - [ ] redux-devtoolのインストール
  - [ ] react-routerのインストール
  - [ ] styled-componentsのインストール
  - [ ] eslint+prettierのインストール
  - [ ] react-modalのインストール
- [ ] ヘッダーの実装
  - [ ] ヘッダーロゴの実装
  - [ ] ヘッダーリンクの実装
  - [ ] メニューの実装（ライブラリを使わずに実装)
- [ ] topページの実装
  - [ ] タブの実装(react-router等ライブラリは使わずに実装）
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issueフィルタ機能の実装
  - [ ] issue作成(react-modalを使って実装)
  - [ ] issue更新(react-modalを使って実装)
  - [ ] issue削除(全て選択のチェックボックスも実装）
- [ ] プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）
- [ ] レスポンシブ対応

##### 4. サイトとして公開

