import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";
import  Testmonial  from "./Components/Testmonial/Testmonial.jsx";
import Virtual from "./Components/Virtual/Virtual";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testmonial/>
      <Footer/>
      
    </div>
  );
}

export default App;
