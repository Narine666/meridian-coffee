import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Coffees from "./components/Coffees";
import Roast from "./components/Roast";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Coffees />
        <Roast />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
