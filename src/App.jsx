import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Destinations from "./components/Destinations";
import DestinationDetail from "./components/DestinationDetail";
import ItineraryPreview from "./components/ItineraryPreview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Destinations />
      <ItineraryPreview />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Blog />
      <FAQ />
      <Newsletter />
      <Team />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-n-9 max-w-[1920px] mx-auto overflow-hidden">
        <Header />
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
