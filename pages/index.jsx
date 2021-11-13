import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

export default function Home() {
  return (
    <>

      <title>Portfolio Website</title>

      <div className="body">
        <Hero />

        <main className="main">
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />


        {/* <!--==================== SWIPER JS ====================--> */}
        {/* <script src="assets/js/swiper-bundle.min.js"></script> */}

        {/* <!--==================== MAIN JS ====================--> */}
        {/* <script src="assets/js/main.js"></script> */}
      </div>
      
    </>
  )
}
