interface SiteMetadata {
  SITE_AUTHOR: string;
  SITE_NAME: string;
  SITE_DESC: string;
  SITE_REPOSITORY: string;
  SOCIAL_MEDIA: {
    github: string;
  };
  SITE_TOP: string;
  SITE_ABOUT: string;
  SITE_SKILL: string;
}

const siteAuthor = "yoshisuke1013";
const siteRepository = `https://github.com/${siteAuthor}/portfolio.git`;

const siteTopContent = `# Clone the repository
git clone ${siteRepository}

# Install dependencies
cd portfolio
npm install

# Start your development journey
npm run dev`;

const siteAboutContent = `# Occupation(職種)
Front-End Developer(フロントエンドエンジニア)

# Career Start(エンジニア歴)
It started in 2010.(2010年〜)

# Work History(職歴)
Web Application Development(Webアプリケーション開発)
Website Creation(Webサイト開発)
`;

const siteSkillContent = `# Programming Language(言語)
HTML,CSS,JavaScript,TypeScript

# Library(ライブラリ)
React,Vue.js,jQuery

# Framework(フレームワーク)
Next.js,Nuxt.js,Astro

# CMS(コンテントマネジメントシステム)
WordPress
`;

export const siteMetadata: SiteMetadata = {
  SITE_AUTHOR: siteAuthor,
  SITE_NAME: `${siteAuthor}'s Portfolio`,
  SITE_DESC: `${siteAuthor}'のポートフォリオです。`,
  SITE_REPOSITORY: siteRepository,
  SOCIAL_MEDIA: {
    github: `https://github.com/${siteAuthor}`,
  },
  SITE_TOP: siteTopContent,
  SITE_ABOUT: siteAboutContent,
  SITE_SKILL: siteSkillContent,
};
