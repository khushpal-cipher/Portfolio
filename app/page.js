import Nav from "@/components/Nav";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <About />
        <Resume />
        <Work />
        <Footer />
      </main>
    </>
  );
}
