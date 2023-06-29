import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Drop from "./components/Drop";
import Marketplace from "./components/Marketplace";
import Auctions from "./components/Auctions";
import { Route, Routes } from "react-router-dom";
import Animation from "./components/Animation";
import Features from "./components/Features";
import Cart from "./components/Cart";
import { useLocation } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";

const isHomePage = location.pathname === "/marketplace";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Animation />
        <Features />
      </ShopContextProvider>
    </div>
  );
}

export default App;
