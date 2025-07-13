import Content from "@/components/content";
import { siteMetadata } from "@/constants/site-metadata";

export default function About() {
  return <Content title="About">{siteMetadata.SITE_ABOUT}</Content>;
}
