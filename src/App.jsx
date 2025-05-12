import { Layout } from "./layout/layout";
import { Navbar } from "./components/Navbar/navbar";
import { HeroSection } from "./components/Hero/HeroSection";
import { Map } from "./components/Map/map";
import { Contacto } from "./components/ContactUs/contact";
import { Footer } from "./components/Footer/footer";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <Map />
      <AboutUs />
      <Contacto />
      <Footer />
    </Layout>
  );
}

export default App;
