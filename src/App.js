import Header from "./components/Header";
import Blog from "./components/Blog";
import Item from "./components/Item";
import { Footer } from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Item />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
