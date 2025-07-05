# 🚀 yoshisuke1013's Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

フロントエンドエンジニアとしてのスキルと経験を紹介するポートフォリオサイトです。

## 📋 目次

- [概要](#概要)
- [技術スタック](#技術スタック)
- [機能](#機能)
- [セットアップ](#セットアップ)
- [開発](#開発)
- [プロジェクト構造](#プロジェクト構造)

## 📖 概要

このポートフォリオサイトは、私の技術スキル、職歴、プロジェクト経験を紹介するための Web アプリケーションです。モダンな技術スタックを使用し、レスポンシブデザインで構築されています。

### 主な特徴

- 🎨 モダンで美しい UI/UX
- 📱 完全レスポンシブデザイン
- 🌙 ダークモード対応
- ⚡ Next.js 15 + Turbopack による高速開発
- 🔧 TypeScript による型安全性

## 🛠 技術スタック

### フロントエンド

- **Next.js 15.3.5** - React フレームワーク
- **React 19.0.0** - UI ライブラリ
- **TypeScript 5.0** - 型安全な開発
- **Tailwind CSS 4.0** - ユーティリティファースト CSS フレームワーク

### UI/UX

- **Radix UI** - アクセシブルな UI コンポーネント
- **Lucide React** - 美しいアイコンライブラリ
- **next-themes** - テーマ切り替え機能
- **class-variance-authority** - コンポーネントバリアント管理

### 開発ツール

- **ESLint** - コード品質管理
- **PostCSS** - CSS 処理
- **Turbopack** - 高速な開発サーバー

## ✨ 機能

### 🏠 トップページ

- プロジェクトの概要とセットアップ手順
- 技術スタックの紹介

### 👨‍💻 自己紹介

- フロントエンドエンジニアとしての職歴
- 2010 年からのエンジニア経験
- Web アプリケーション開発の専門性

### 🎯 スキルセクション

- **プログラミング言語**: HTML, CSS, Sass, JavaScript, TypeScript
- **ライブラリ**: React, Vue.js, jQuery
- **フレームワーク**: Next.js, Nuxt.js, Astro
- **CMS**: WordPress

## 🚀 セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール手順

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/yoshisuke1013/portfolio.git
   cd portfolio
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

## 💻 開発

### 利用可能なスクリプト

```bash
# 開発サーバーの起動（Turbopack使用）
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start

# リント実行
npm run lint
```

### 開発のベストプラクティス

- TypeScript の型定義を活用
- ESLint ルールに従ったコード品質の維持
- コンポーネントの再利用性を考慮した設計
- アクセシビリティに配慮した UI 実装

## 📁 プロジェクト構造

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # ページグループ
│   │   │   └── (root)/        # ルートページ
│   │   │       ├── _components/ # ページ固有コンポーネント
│   │   │       └── page.tsx   # メインページ
│   │   ├── globals.css        # グローバルスタイル
│   │   └── layout.tsx         # ルートレイアウト
│   ├── components/            # 再利用可能コンポーネント
│   │   ├── ui/               # UIコンポーネント
│   │   ├── header.tsx        # ヘッダーコンポーネント
│   │   ├── footer.tsx        # フッターコンポーネント
│   │   └── ...
│   ├── constants/            # 定数定義
│   │   ├── icons.ts          # アイコン定義
│   │   └── site-metadata.ts  # サイトメタデータ
│   └── lib/                  # ユーティリティ関数
├── public/                   # 静的ファイル
└── package.json             # 依存関係とスクリプト
```

---

⭐ このプロジェクトが役に立ったら、スターを付けてください！
