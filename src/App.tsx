import { Header, Footer, HeroSection, ShortenUrlForm, StatSection, GetStarted } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ShortenUrlForm />
      <StatSection />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
