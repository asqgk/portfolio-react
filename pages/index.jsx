import Menu from "../components/Menu";
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
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      
      <title>Portfolio React</title>

      <body>
        <Menu />

        <main>
          <Hero />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />

      </body>
      
    </>
  )
}
