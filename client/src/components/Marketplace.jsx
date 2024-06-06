import { useState } from "react";
import { PRODUCTS } from "../products";
import Product from "./Product";

const Marketplace = ({}) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="mx-auto container mb-10 flex items-center w-full">
        <div className="mr-20">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full md:w-32 h-8 px-2 bg-gray-200 rounded-md border-none font-Sat font-normal md:text-2xl"
            id="searchbar"
          />
        </div>

        <div className="bg-priColor shadow-md rounded-xl py-1 px-5 flex items-center justify-between w-full ">
          <div>
            <h1 className="text-secColor text-base md:text-2xl font-normal font-Sat">
              See 1-6 of 16 results
            </h1>
          </div>
        </div>
      </header>

      <main className="main flex">
        <section className="menu-side hidden md:block" id="wagwan">
          <div className="mx-auto container flex flex-col items-start justify-center px-6">
            <h1 className="md:text-3xl text-lg  font-normal md:font-medium font-Sat">
              Filter
            </h1>

            <form action="">
              <div className="mb-2 flex items-center">
                <input
                  defaultChecked
                  type="checkbox"
                  id="editorials"
                  name="editorials"
                  className="text-gray-800 focus:ring-gray-100"
                />
                <label
                  htmlFor="editorials"
                  className="md:text-2xl text-lg font-normal font-Sat"
                >
                  Editorials
                </label>
              </div>

              <div className="mb-2 flex items-center">
                <input
                  defaultChecked
                  type="checkbox"
                  id="fashion"
                  name="fashion"
                  className="text-gray-800 focus:ring-gray-100"
                />
                <label
                  htmlFor="fashion"
                  className="md:text-2xl text-lg font-normal font-Sat"
                >
                  Fashion
                </label>
              </div>

              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="optics"
                  name="optics"
                  className="text-gray-800 focus:ring-gray-100"
                />
                <label
                  htmlFor="optics"
                  className="md:text-2xl text-lg font-normal font-Sat"
                >
                  Optics
                </label>
              </div>

              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="art"
                  name="art"
                  className="text-gray-800 focus:ring-gray-100"
                />
                <label
                  htmlFor="art"
                  className="md:text-2xl text-lg font-normal font-Sat"
                >
                  Art & Museum
                </label>
              </div>

              <div className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  id="nature"
                  name="nature"
                  className="text-gray-800 focus:ring-gray-100"
                />
                <label
                  htmlFor="nature"
                  className="md:text-2xl text-lg font-normal font-Sat"
                >
                  Nature
                </label>
              </div>
            </form>
          </div>
        </section>

        <section className="hello gap-y-10 gap-x-16 z-10 px-8 md:px-0">
          {PRODUCTS.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          }).map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Marketplace;
