import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Drop from "./pages/Drop";
import Marketplace from "./pages/Marketplace";
import Auctions from "./pages/Auctions";
import { Route, Routes } from "react-router-dom";
import Animation from "./components/Animation";
import Features from "./pages/Features";
import Cart from "./components/Cart";
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
