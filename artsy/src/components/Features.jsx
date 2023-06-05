import vector1 from "../images/Vector.svg";
import img9 from "../images/Rectangle 299.png";
import img10 from "../images/Rectangle 299 (1).png";
import img11 from "../images/Rectangle 299 (2).png";
import img14 from "../images/Ellipse 14.png";
import img15 from "../images/Ellipse 15.png";
import img16 from "../images/Ellipse 16.png";
import img17 from "../images/Ellipse 17.png";
import img18 from "../images/Ellipse 18.png";
import img91 from "../images/Rectangle 91.png";
import vec1 from "../images/Vector1.png";
import foot1 from "../images/Vector-footer1.png";
import foot0 from "../images/Vector-footer.png";

import { useLocation } from "react-router-dom";

const Features = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <section className="section container mt-24 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold md:font-medium leading-10 mb-10 font-Sat">
            Featured Products
          </h1>
          <hr className="hidden md:block" />
          <br className="hidden md:block" />
          <div className="feature__container px-1">
            <div className="feature__wrapper flex flex-col gap-x-7 md:flex-row">
              <div className="feature__img--holder">
                <img
                  src={img9}
                  className="feature__img hover:cursor-pointer"
                  alt=""
                />
                <div className="image__overlay image__overlay--blur hidden md:flex">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-medium font-Sat">
                      View Products
                    </h1>
                    <div className="circle relative bg-priColor">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex-col items-center justify-center flex md:hidden">
                  <h1 className="feature__title font-bold text-4xl text-priColor mb-3 font-Clash">
                    The Boolean Egyptian
                  </h1>
                </div>
              </div>

              <div className="md:w-1/2">
                <h1 className="feature__title font-semibold md:font-medium text-3xl md:text-4xl text-textColorAlt mb-3 hidden md:block font-Clash">
                  The Boolean Egyptian
                </h1>
                <p className="feature__subtitle w-11/12 font-normal text-base md:text-2xl text-textColorAlt mb-16 font-Sat">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>

                <div className="relative flex items-center">
                  <div className="ellipse__holder absolute flex items-center">
                    <img src={img14} alt="" className="ellipse__1" />
                    <img src={img15} alt="" className="-translate-x-6" />
                    <img src={img16} alt="" className="-translate-x-12" />
                    <img src={img17} alt="" className="-translate-x-20" />
                    <img src={img18} alt="" className="-translate-x-24" />
                  </div>

                  <div className="flex items-center relative left-44">
                    <h1 className="text-textColorAlt text-base md:text-xl font-medium md:font-normal mr-10 font-Clash">
                      64 Major Creators
                    </h1>

                    <div className="circle hidden md:block relative hover:cursor-pointer">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature__wrapper block md:flex md:flex-row-reverse gap-x-7 mt-10">
              <div className="feature__img--holder">
                <img
                  src={img10}
                  className="feature__img hover:cursor-pointer"
                  alt=""
                />
                <div className="image__overlay image__overlay--blur hidden md:flex">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-medium font-Sat">
                      View Products
                    </h1>
                    <div className="circle relative bg-priColor">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex-col items-center justify-center flex md:hidden">
                  <h1 className="feature__title font-bold text-4xl text-priColor mb-3 font-Clash">
                    Are we there yet?
                  </h1>
                </div>
              </div>

              <div className="md:w-1/2">
                <h1 className="feature__title font-semibold md:font-medium text-3xl md:text-4xl text-textColorAlt mb-3 hidden md:block font-Clash">
                  Are we there yet?
                </h1>
                <p className="feature__subtitle w-11/12 font-normal text-base md:text-2xl text-textColorAlt mb-16 font-Sat">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>

                <div className="relative flex items-center">
                  <div className="ellipse__holder absolute flex items-center">
                    <img src={img14} alt="" className="ellipse__1" />
                    <img src={img15} alt="" className="-translate-x-6" />
                    <img src={img16} alt="" className="-translate-x-12" />
                    <img src={img17} alt="" className="-translate-x-20" />
                    <img src={img18} alt="" className="-translate-x-24" />
                  </div>

                  <div className="flex items-center relative left-44">
                    <h1 className="text-textColorAlt text-base md:text-xl font-medium md:font-normal mr-10 font-Clash">
                      64 Major Creators
                    </h1>

                    <div className="circle hidden md:block relative hover:cursor-pointer">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature__wrapper flex flex-col gap-x-7 md:flex-row mt-10">
              <div className="feature__img--holder">
                <img
                  src={img11}
                  className="feature__img hover:cursor-pointer"
                  alt=""
                />
                <div className="image__overlay image__overlay--blur hidden md:flex">
                  <div className="flex items-center">
                    <h1 className="text-3xl font-medium font-Sat">
                      View Products
                    </h1>
                    <div className="circle relative bg-priColor">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex-col items-center justify-center flex md:hidden">
                  <h1 className="feature__title font-bold text-4xl text-priColor mb-3 font-Clash">
                    Oloibiri 1997
                  </h1>
                </div>
              </div>

              <div className="md:w-1/2">
                <h1 className="feature__title font-semibold md:font-medium text-3xl md:text-4xl text-textColorAlt mb-3 hidden md:block font-Clash">
                  Oloibiri 1997
                </h1>
                <p className="feature__subtitle w-11/12 font-normal text-base md:text-2xl text-textColorAlt mb-16 font-Sat">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>

                <div className="relative flex items-center">
                  <div className="ellipse__holder absolute flex items-center">
                    <img src={img14} alt="" className="ellipse__1" />
                    <img src={img15} alt="" className="-translate-x-6" />
                    <img src={img16} alt="" className="-translate-x-12" />
                    <img src={img17} alt="" className="-translate-x-20" />
                    <img src={img18} alt="" className="-translate-x-24" />
                  </div>

                  <div className="flex items-center relative left-44">
                    <h1 className="text-textColorAlt text-base md:text-xl font-medium md:font-normal mr-10 font-Sat">
                      64 Major Creators
                    </h1>

                    <div className="circle hidden md:block relative hover:cursor-pointer">
                      <img src={vector1} alt="" className="arrow absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {location.pathname === "/" && (
        <section className="auct mt-20">
          <div className="container mx-auto py-10">
            <h1 className="md:font-medium md:text-4xl text-priColor mb-9 hidden md:block font-Sat">
              See Upcoming Auctions and Exhibitions
            </h1>
            <div className="relative box-border">
              <img src={img91} alt="" className="" />
              <div className="absolute top-8 md:top-40 left-24">
                <h1 className="text-priColor text-xl md:text-3xl font-normal md:font-normal mb-3 font-Sat">
                  MONALISA REDEFINED IN STYLE.
                </h1>
                <p className="text-priColor text-sm md:text-xl font-light md:font-normal mb-3 font-Sat">
                  Start on : 08:00 GTS . Monday
                </p>
                <div className="block md:flex space-x-16">
                  <p className="text-priColor text-xs md:text-lg font-normal hidden md:block font-Sat">
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    <br />
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    <br />
                    HIGHEST AND LOWEST BIDS.
                  </p>

                  <div className="mt-10">
                    <a
                      href=""
                      className="text-priColor mr-10 border-b-2 border-current pb-4 text-xs md:text-lg font-Sat"
                    >
                      SEE MORE
                    </a>
                    <a
                      href=""
                      className="remind text-priColor border-solid border border-current rounded-lg p-4 text-xs md:text-lg font-Sat"
                    >
                      Set a reminder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {location.pathname === "/" && (
        <section className="mt-20">
          <hr className="mb-10" />
          <div className="you mb-20">
            <div className="flex justify-around items-center">
              <h1 className="text-textColorAlt font-medium text-2xl md:text-5xl font-Sat">
                Explore Marketplace
              </h1>
              <a href="marketplace.html">
                <img src={vec1} alt="" />
              </a>
            </div>
            <hr />
            <div className="flex justify-around mt-10 items-center">
              <h1 className="text-textColorAlt font-medium text-2xl md:text-5xl font-Sat">
                See auctions
              </h1>
              <a href="auctions.html">
                <img src={vec1} alt="" />
              </a>
            </div>
            <hr />
          </div>
        </section>
      )}

      {location.pathname === "/" && (
        <section className="">
          <div className="top__creators p-5 md:py-10 md:px-20 mb-20">
            <div className="flex justify-between mb-14">
              <h1 className="text-2xl md:text-5xl font-semibold font-Clash">
                TOP CREATORS OF <br />
                THE WEEK
              </h1>

              <div className="flex">
                <div className="w-[10px] h-full bg-[#AEAEAE] md:flex items-end justify-end rounded-md hidden mr-4">
                  <div className="w-full bg-black h-[47.52px] rounded-md"></div>
                </div>

                <div className="">
                  <ul className="flex justify-between md:block">
                    <li className="text-sm md:text-4xl font-normal mr-2 md:mr-0 font-Clash">
                      Editorials
                    </li>
                    <li className="text-sm md:text-4xl font-normal mr-2 md:mr-0 font-Clash">
                      Fashion
                    </li>
                    <li className="text-sm md:text-4xl font-normal mr-2 md:mr-0 font-Clash">
                      Lifestyle
                    </li>
                    <li className="text-sm md:text-4xl font-normal mr-2 md:mr-0 font-Clash">
                      Blueprint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="creators-subtitle md:text-3xl font-extralight leading-10 font-Clash">
              “Everything always looked better in black and white. Everything
              always as if it were the first time; there's always more people in
              a black and white photograph. It just makes it seem that there
              were more people at a gig, more people at a football match, than
              with colour photography. Everything looks more exciting.”– Jack
              Lowden
            </p>
          </div>
          <div className="border-solid border border-gray-800 mx-auto container w-10/12 py-14 flex flex-col md:block md:text-center">
            <h1 className="text-3xl font-normal text-textColorAlt mb-10 uppercase font-Stix">
              NewsLetter
            </h1>
            <p className="font-normal text-3xl text-textColorAlt mb-10 font-Stix">
              Subscribe to get daily updates on new drops & exciting deals
            </p>
            <div className="you md:flex md:justify-center md:items-center">
              <form action="" className="flex flex-col md:flex-row">
                <input
                  type="text"
                  placeholder="ENTER YOUR EMAIL "
                  className="mr-6 mb-6 md:mb-0"
                />
                <button className="bg-btnColor text-priColor py-3 px-8 w-1/2 font-Clash">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {location.pathname === "/" && (
        <footer className="container mx-auto mt-24">
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
            <div className="block md:hidden mb-10">
              <h1 className="font-light text-xl font-Stix">REACH US</h1>
            </div>
            <div className="hidden md:block">
              <h1 className="font-semibold text-5xl font-Stix">ARTSY.</h1>
            </div>
            <div className="hidden md:block">
              <ul className="">
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Home</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Marketplace</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Auctions</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href=""></a>Drop
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <ul>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Blog</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Wallets</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">Rates</a>
                </li>
                <li className="text-2xl font-normal text-textColorAlt font-Sat">
                  <a href="">High Bid</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="flex items-center font-normal text-2xl space-x-6 mb-6 font-Sat">
                  <img src={foot1} alt="" className="mr-6" />
                  artsystudios@gmail.com
                </li>

                <li className="flex items-center font-normal text-2xl space-x-6 font-Sat">
                  <img src={foot0} alt="" className="mr-6" />
                  Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xl md:text-2xl font-medium mt-16 font-Clash">
            Artsystudios © 2022. All Rights Reserved.
          </p>
        </footer>
      )}
    </>
  );
};

export default Features;
