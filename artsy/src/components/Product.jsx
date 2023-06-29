import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  const { id, image, title, price } = props.data;
  const { addToCart } = useContext(ShopContext);

  const notify = () => {
    toast.success("Item added to cart", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="card__holder flex flex-col justify-center items-center py-4 ">
      <div className="">
        <div className="mb-4">
          <img src={image} alt="" className="" />
        </div>
        <div className="flex flex-row justify-between md:block">
          <h1 className="piece">{title}</h1>
          <p className="piece__price">${price}</p>
        </div>
        <button
          className="py-2.5 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
          type="button"
          onClick={() => {
            notify(), addToCart(id);
          }}
        >
          Add to cart
        </button>

        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Product;
