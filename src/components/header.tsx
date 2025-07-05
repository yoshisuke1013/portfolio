import Link from "next/link";
import { Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { siteMetadata } from "@/constants/site-metadata";

export default function Header() {
  return (
    <header className="sticky top-0 w-full px-10 z-1 bg-background">
      <div className="w-full flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-4">
            <Code className="h-6 w-6" />
            <h1 className="font-bold text-xl md:text-2xl tracking-tight">
              {siteMetadata.SITE_NAME}
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#top">Top</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#about">About</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href="#skill">Skill</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="flex text-lg">
            <Link href={siteMetadata.SOCIAL_MEDIA.github} target="_blank">
              <Github className="h-6 w-6" />
              GitHub
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
