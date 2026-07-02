import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Coffees from "./components/sections/Coffees";
import Roast from "./components/sections/Roast";
import Visit from "./components/sections/Visit";
import Footer from "./components/sections/Footer";

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
