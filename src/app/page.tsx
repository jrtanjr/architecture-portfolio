import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Profile from "../components/home/Profile";
import Contact from "../components/home/Contact";
import Resume from "../components/home/Resume";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Profile />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}