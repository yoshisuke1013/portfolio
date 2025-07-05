interface SiteMetadata {
  SITE_AUTHOR: string;
  SITE_NAME: string;
  SITE_DESC: string;
  SOCIAL_MEDIA: {
    github: string;
  };
}

const siteAuthor = "Yoshisuke1013";

export const siteMetadata: SiteMetadata = {
  SITE_AUTHOR: siteAuthor,
  SITE_NAME: `${siteAuthor}'s Portfolio`,
  SITE_DESC: `${siteAuthor}'のポートフォリオです。`,
  SOCIAL_MEDIA: {
    github: `https://github.com/${siteAuthor}`,
  },
};
