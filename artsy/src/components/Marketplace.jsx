import { useState } from "react";
import Modal from "./Modal";

const Marketplace = ({ product, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="mx-auto container mb-10 flex items-center">
        <div className="mr-20">
          <input
            type="text"
            placeholder="Search"
            className="w-32 h-8 px-2 bg-gray-200 rounded-md sam font-Sat font-normal md:text-2xl"
            id="searchbar"
          />
        </div>

        <div className="bg-priColor shadow-md rounded-xl py-1 px-5 flex items-center justify-between w-full">
          <div>
            <h1 className="text-secColor text-base md:text-2xl font-normal font-Sat">
              See 1-6 of 16 results
            </h1>
          </div>

          <div>
            <button
              id="dropdownBgHoverButton"
              data-dropdown-toggle="dropdownBgHover"
              className="text-secColor bg-white focus:outline-none font-Sat font-medium rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center shadow"
              type="button"
            >
              Sort by
              <svg
                className="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  // stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownBgHover"
              className="hidden z-10 w-48 bg-white rounded shadow dark:bg-gray-700"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownBgHoverButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="checkbox-item-4"
                      type="checkbox"
                      value="Name"
                      className="checkers w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-4"
                      className="ml-2 w-full text-sm font-medium font-Sat text-gray-900 rounded dark:text-gray-300"
                    >
                      Name
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      unchecked="true"
                      id="checkbox-item-5"
                      type="checkbox"
                      value="price"
                      className="checkers w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-5"
                      className="ml-2 w-full text-sm font-Sat font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Price
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="checkbox-item-6"
                      type="checkbox"
                      value="creator"
                      className="checkers w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-6"
                      className="ml-2 w-full text-sm font-medium font-Sat text-gray-900 rounded dark:text-gray-300"
                    >
                      Creator
                    </label>
                  </div>
                </li>
              </ul>
            </div>
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

        <section className="hello gap-y-10 gap-x-16 z-10" id="names">
          {product.map((pro) => (
            <div
              key={pro.id}
              onClick={() => setIsOpen(true)}
              className="card__holder flex flex-col justify-center items-center py-4"
            >
              <div className="">
                <div className="mb-4">
                  <img src={pro.image} alt="" className="" />
                </div>
                <div className="flex flex-row md:block">
                  <h1 className="piece">{pro.title}</h1>
                  <p className="piece__price">{pro.price}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <div className="relative z-10">
        <button onClick={() => setIsOpen(true)}>OPen</button>
        <Modal open={isOpen} onclose={() => setIsOpen(false)}>
          Fancy
        </Modal>
      </div>
    </>
  );
};

export default Marketplace;
