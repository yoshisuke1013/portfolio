import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { siteMetadata } from "@/constants/site-metadata";
import { Icons } from "@/constants/icons";

export default function Header() {
  return (
    <header className="sticky top-0 w-full px-10 z-1 bg-background">
      <div className="w-full flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-4">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">
              {siteMetadata.SITE_NAME}
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#Top">Top</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#About">About</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#Skill">Skill</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#Contact">Contact</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link
              href={siteMetadata.SOCIAL_MEDIA.github}
              target="_blank"
              dangerouslySetInnerHTML={{ __html: Icons.gitHub + "GitHub" }}
            />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
