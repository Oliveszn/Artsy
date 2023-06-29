import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const shipAmount = Number(2.5).toFixed(2);
  const combinedAmount = +totalAmount + +shipAmount;

  console.log(combinedAmount);

  return (
    <div className="container mx-auto">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItems data={product} key={product.id} />;
        }
      })}

      {totalAmount > 0 ? (
        <div className="flex flex-col md:flex-row items-center justify-around w-full ">
          <div className="flex flex-col order-2 md:order-first">
            <button className="bg-btnColor text-priColor md:text-3xl text-base font-medium font-Sat py-1 px-8">
              Proceed to checkout
            </button>

            <Link
              to="/marketplace"
              className="font-Sat font-medium md:text-2xl text-center"
            >
              Continue to shopping
            </Link>
          </div>

          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center justify-between">
              <h1 className="font-Sat font-normal md:text-lg text-[#888888]">
                Shipping:
              </h1>
              <p className="text-textColor">${shipAmount}</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-Sat font-normal md:text-lg text-[#888888]">
                Total:
              </h1>
              <p className="text-textColor">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="font-Sat font-normal md:text-lg text-[#888888]">
                Sub-total:
              </h1>
              <p className="text-textColor">${combinedAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-Sat text-center text-3xl">Your Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
