import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 text-gray-500 text-3xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
          id="triggerEl"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </button>

        <Link
          to="/"
          className="self-center font-bold text-4xl whitespace-nowrap hero font-Stix"
        >
          ARTSY.
        </Link>

        <div className="flex md:order-2 text-2xl md:text-3xl">
          <a href="">
            <ion-icon name="search-outline"></ion-icon>
          </a>

          <Link to="/cart" className="cart-btn">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
          <a href="">
            <ion-icon name="notifications-outline"></ion-icon>
          </a>
        </div>

        <div
          className={`items-center justify-between absolute md:static w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in bg-white md:bg-priColor ${
            open ? "top-20" : "top-[-490px]"
          }`}
          id="targetEl"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 z-10 md:z-auto w-full left-0 h-full drop-shadow-md md:drop-shadow-none">
            <li>
              <Link
                to="/"
                className="font-Sat block py-2 pl-3 pr-4 text-textColor md:p-0 hover:text-secColor text-xl font-light"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="font-Sat block py-2 pl-3 pr-4 text-textColor md:p-0 hover:text-secColor text-xl font-light"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/auctions"
                className="font-Sat block py-2 pl-3 pr-4 text-textColor md:p-0 hover:text-secColor text-xl font-light"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                to="/drop"
                className="font-Sat block py-2 pl-3 pr-4 text-textColor md:p-0 hover:text-secColor text-xl font-light"
              >
                Drop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
