import { Header } from "./components";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection";
import { ShortenUrlForm } from "./components/Form/ShortenUrlForm";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ShortenUrlForm />
      <Footer />
    </div>
  );
}

export default App;
