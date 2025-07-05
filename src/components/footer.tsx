import { siteMetadata } from "@/constants/site-metadata";

export default function Footer() {
  return (
    <footer className="py-6 px-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={siteMetadata.SOCIAL_MEDIA.github}
            target="_blank"
            rel="noreferrer"
          >
            @{siteMetadata.SITE_AUTHOR}
          </a>
        </p>
      </div>
    </footer>
  );
}
