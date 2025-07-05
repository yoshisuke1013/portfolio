interface SiteMetadata {
  SITE_AUTHOR: string;
  SITE_NAME: string;
  SITE_DESC: string;
  SITE_REPOSITORY: string;
  SOCIAL_MEDIA: {
    github: string;
  };
}

const siteAuthor = "Yoshisuke1013";

export const siteMetadata: SiteMetadata = {
  SITE_AUTHOR: siteAuthor,
  SITE_NAME: `${siteAuthor}'s Portfolio`,
  SITE_DESC: `${siteAuthor}'のポートフォリオです。`,
  SITE_REPOSITORY: "https://github.com/yoshisuke1013/portfolio.git",
  SOCIAL_MEDIA: {
    github: `https://github.com/${siteAuthor}`,
  },
};
