# LIG ASTRO STATIC TEMPLATE

## 🐶 Local Environment Setup

- Node.js >=18.0.0 install
- package install

```bash
npm install
```

```bash
npm run dev
```

open <http://localhost:4321/>

## 💻 Production Upload

```bash
npm run build
```

アップロードの際は`/dist`以下をアップロードしてください。

## 📦 Components

- セクション単位で分割したファイルについては`/partials`に逃してください。
- 接頭辞を揃えるように意識してください。 ex) PageHoge 、ButtonHoge、 BaseHoge、CardHoge

## 😌 Image

```bash
import { Image } from "astro:assets";
import SampleImage from "../assets/sample-01.jpg";

<Image src={SampleImage} alt="" format="webp" quality={80} />
```

## ✋ Svg

```bash
import { Icon } from "astro-icon";

<Icon name="name" title="title" />
```

## 😺 Grid System

60 分割のグリッドシステムによってデザインされています。スタイリングがしやすいように補助的な役割を担う機能が既に用意されています。

- D キー押下でグリッドラインの表示/非表示が切り替わります。
- グリッドラインが表示されるのは開発モードの時のみです。

## 😻 Styling

クラスの命名については BEM を採用しています。

- `rem` グリッド線に基づいて計算する時に使用します。
- `px` 上下の余白、主に`margin-top`や`margin-bottom`の計算の時に使用します。
- `vw` その他、テキスト、主に`font-size`の計算の時に使用します。計算しやすいように`mixin`が用意されているので、そちらを使用してください。

## ✋ Lint

```bash
npm run lint:check
```

```bash
npm run lint:fix
```

Lint はプリコミット時に必ず実行されます。<br>
以下の vscode プラグインをインストールすると vscode 保存時にも Lint が実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## 🚗 Bitbucket Pipelines

リポジトリの「設定」から SSH キーを登録して `bitbucket-pipelines.yml` の下記の値を登録してください

- $SSH_USER
- $SSH_SERVER
- $SSH_REMOTE_PATH
- $SSH_LOCAL_PATH
- $SSH_PORT

## 👉 Git Flow

CI / CD が実装されている場合 main ブランチにマージすると自動デプロイの処理が実行されます。

- main: TBD
- feature: 機能の追加用。main から分岐して、main に適宜マージしてください。

## 👀 Document

- [Astro](https://docs.astro.build/ja/getting-started/)
