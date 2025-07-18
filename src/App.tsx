import { Header } from "./components";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold underline bg-red-50">Hello World</h1>
      <Footer />
    </div>
  );
}

export default App;
