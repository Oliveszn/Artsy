import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";

const Navbar = ({}) => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "Auctions", link: "/auctions" },
    { name: "Drops", link: "/drop" },
  ];
  let [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [open]);

  return (
    <nav className="w-full z-50">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div className="font-bold text-4xl font-Stix cursor-pointer flex items-center">
          <Link to="/" className=" ">
            ARTSY.
          </Link>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-50 left-0 w-full
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open
            ? "top-16 left-0 w-full h-full opacity-100"
            : "top-[-490px] opacity-0 md:opacity-100"
        }`}
        >
          {links.map((item) => (
            <li key={item.name} className="md:ml-6 text-xl md:my-0 my-7">
              <Link
                to={item.link}
                className="font-Sat text-black md:text-textColor hover:text-gray-400 font-light duration-500"
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* <Button>Open</Button> */}
        </ul>

        <div className="flex  text-2xl md:text-3xl">
          <a href="">
            <ion-icon name="search-outline"></ion-icon>
          </a>

          <Link to="/cart" className="cart-btn">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
