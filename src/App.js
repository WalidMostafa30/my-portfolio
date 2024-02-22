import React, { useEffect } from "react";
import "./css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  window.onscroll = () => {
    const navBarLink = document.querySelectorAll(".NavBar__link");
    const sections = document.querySelectorAll("section");
    const nav = document.querySelector(".NavBar");

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");
      if (
        window.scrollY > offset &&
        window.scrollY < offset + sec.offsetHeight
      ) {
        navBarLink.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector(`.NavBar__links [href*=${id}]`)
            .classList.add("active");
        });
      }
    });

    if (window.scrollY >= 40) {
      nav.style.boxShadow = "0px 0px 20px -12px black";
    } else {
      nav.style.boxShadow = "none";
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
