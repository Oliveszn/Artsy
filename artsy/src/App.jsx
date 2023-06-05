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
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const product = [
    {
      id: 0,
      image: "images/Rectangle 251.png",
      title: "PHILOMENA 22",
      price: "3.90",
    },
    {
      id: 1,
      image: "images/Rectangle 2999.png",
      title: "BOOLEAN EGYPTIAN",
      price: "4.90",
    },
    {
      id: 2,
      image: "images/Rectangle 49.png",
      title: "BLANC",
      price: "3.00",
    },
    {
      id: 3,
      image: "images/Rectangle 55.png",
      title: "BEVERLY",
      price: "2.50",
    },
    {
      id: 4,
      image: "images/Rectangle 52.png",
      title: "ROSEMARY '22",
      price: "4.10",
    },
    {
      id: 5,
      image: "images/Rectangle 48.png",
      title: "ALTERNATING",
      price: "1.90",
    },
    {
      id: 6,
      image: "images/Rectangle 50.png",
      title: "VEIL",
      price: "2.00",
    },
    {
      id: 7,
      image: "images/Rectangle 54.png",
      title: "THE LAWMAKERS",
      price: "2.00",
    },
    {
      id: 8,
      image: "images/Rectangle 53.png",
      title: "ELLIPSIA",
      price: "3.00",
    },
  ];

  const showId = (id) => {
    console.log();
  };

  return (
    <div className="bg-priColor">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/marketplace"
          element={<Marketplace product={product} onToggle={showId} />}
        />
        <Route path="/drop" element={<Drop />} />
        <Route path="/auctions" element={<Auctions />} />
      </Routes>
      {/* <Animation /> */}
      <div className="relative z-10">
        <button onClick={() => setIsOpen(true)}>OPen</button>
        <Modal open={isOpen} onclose={() => setIsOpen(false)}>
          Fancy
        </Modal>
      </div>
      {/* <Features /> */}
    </div>
  );
}

export default App;
