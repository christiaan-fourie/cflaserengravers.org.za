import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Examples from "./components/Examples";

export default function Home() {
  return (
    
    <div>
      <div>
        <Hero />
        <About />
        <Examples />
      </div>
      <Footer />
    </div>
  );
}
