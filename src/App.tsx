import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

import { HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <HeroUIProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
