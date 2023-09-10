import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "../data";

function App() {
  const dataItem = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{dataItem}</section>
    </div>
  );
}

export default App;
