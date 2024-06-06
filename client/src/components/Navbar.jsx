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
    // <nav className="px-2 sm:px-4 py-2.5 ">
    //   <div className="container flex flex-wrap items-center justify-between mx-auto">
    //     <button
    //       onClick={() => setOpen(!open)}
    //       className="inline-flex items-center p-2 text-gray-500 text-3xl rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //     >
    //       <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
    //     </button>

    //     <Link
    //       to="/"
    //       className="self-center font-bold text-4xl whitespace-nowrap hero font-Stix"
    //     >
    //       ARTSY.
    //     </Link>

    // <div className="flex md:order-2 text-2xl md:text-3xl">
    //   <a href="">
    //     <ion-icon name="search-outline"></ion-icon>
    //   </a>

    //   <Link to="/cart" className="cart-btn">
    //     <ion-icon name="cart-outline"></ion-icon>
    //   </Link>
    //   <a href="">
    //     <ion-icon name="notifications-outline"></ion-icon>
    //   </a>
    // </div>

    //     <div
    //       className={`items-center justify-between absolute md:static w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in bg-white md:bg-priColor ${
    //         open ? "top-20" : "top-[-490px]"
    //       }`}
    //     >
    //       <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 z-100 md:z-auto w-full left-0 h-full drop-shadow-md md:drop-shadow-none">
    //         {links.map((item) => (
    //           <li key={item.name}>
    //             <Link
    //               to={item.link}
    //               className="font-Sat block py-2 pl-3 pr-4 text-textColor md:p-0 hover:text-secColor text-xl font-light"
    //             >
    //               {item.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="w-full z-50">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-4xl font-Stix cursor-pointer flex items-center">
          <Link to="/" className=" ">
            ARTSY.
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-50 left-0 w-full
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open
            ? "top-20 left-0 w-full h-full opacity-100"
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
          <Button>Open</Button>
        </ul>

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
      </div>
    </nav>
  );
};

export default Navbar;
