import HeroSection from "@/components/hero";
import Header from "@/components/header";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import ContactMe from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
