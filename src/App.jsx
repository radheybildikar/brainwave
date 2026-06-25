import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-n-9 max-w-[1920px] mx-auto overflow-hidden">
        <Header />
        <main className="pt-16 md:pt-20">
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <RoadMap />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
