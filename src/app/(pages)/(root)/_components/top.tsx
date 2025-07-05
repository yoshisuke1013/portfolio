import Content from "@/components/content";
import { siteMetadata } from "@/constants/site-metadata";

export default function Top() {
  return (
    <Content title={siteMetadata.SITE_NAME} content={siteMetadata.SITE_TOP} />
  );
}
