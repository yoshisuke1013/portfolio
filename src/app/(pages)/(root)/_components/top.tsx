import Content from "@/components/content";
import { siteMetadata } from "@/constants/site-metadata";

export default function Top() {
  return (
    <Content title={siteMetadata.SITE_NAME}>{siteMetadata.SITE_TOP}</Content>
  );
}
