import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

import { HeroUIProvider } from "@heroui/react";
import Contacts from "./pages/contacts/contacts.tsx";
import Catalog from "./pages/catalog/catalog.tsx";

function App() {
  return (
    <HeroUIProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
