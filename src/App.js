import Header from "./components/Header";
import Blog from "./components/Blog";
import Item from "./components/Item";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Item />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
