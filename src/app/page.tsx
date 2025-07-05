import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          id="top"
          className="w-full h-screen flex items-center justify-center"
        >
          <h2>Top</h2>
          <p>テキストが入ります。</p>
        </section>
        <section
          id="about"
          className="w-full h-screen flex items-center justify-center"
        >
          <h2>About</h2>
          <p>テキストが入ります。</p>
        </section>
        <section
          id="skill"
          className="w-full h-screen flex items-center justify-center"
        >
          <h2>Skill</h2>
          <p>テキストが入ります。</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
