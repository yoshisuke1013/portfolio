import Header from "@/components/header";
import Footer from "@/components/footer";
import Top from "./_components/top";
import About from "./_components/about";
import Skill from "./_components/skill";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <About />
        <Skill />
      </main>
      <Footer />
    </>
  );
}
