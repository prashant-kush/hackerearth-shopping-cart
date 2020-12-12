import React, { useEffect, useState } from "react";

import CartItem from "../../components/cartItem/index";
import QuantityBox from "../../components/quantityBox/index";
import SummaryBox from "../../components/summaryBox/index";
import Toast from "../../components/toast/index";

import data from "../../data/data.json";

import styles from "./style.module.css";

const Cart = () => {
  const [cart, changeCart] = useState([]);

  const [notifs, changeNotifs] = useState([]);

  const clearNotif = (id) => {
    changeNotifs((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const pushNotif = (message, delay, type) => {
    changeNotifs((prevState) => {
      setTimeout(() => {
        clearNotif(prevState.length + 1);
      }, delay);
      return [
        ...prevState,
        {
          message,
          id: prevState.length + 1,
          type,
        },
      ];
    });
  };

  const mutateCart = (newCart) => {
    changeCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const changeQuantity = (id, action) => {
    changeCart((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === id) {
          const quantity =
            action === "increment"
              ? item.quantity + 1
              : item.quantity === 1
              ? item.quantity
              : item.quantity - 1;
          return { ...item, quantity };
        } else return item;
      });
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    });
  };

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    pushNotif(
      `${
        cart[cart.findIndex((item) => item.id === id)].name
      } is successfully removed from your shopping cart`,
      3000,
      "success"
    );
    mutateCart(newCart);
  };

  const reloadItems = () => {
    mutateCart(data.map((item) => ({ ...item, quantity: 1 })));
  };

  useEffect(() => {
    if (localStorage.getItem("cart"))
      changeCart(JSON.parse(localStorage.getItem("cart")));
    else {
      changeCart(data.map((item) => ({ ...item, quantity: 1 })));
    }
    console.log(data);
  }, []);

  return (
    <>
      <Toast notifList={notifs} />
      <div className={styles.main}>
        <h1>Order Summary</h1>
        <div className={styles.item_list}>
          <div className={styles.head_container}>
            <p>Items({cart.length})</p>
            <p>Qty</p>
            <p>Price</p>
          </div>
          <div className={styles.list_box}>
            {cart.length ? (
              cart.map((item) => {
                return (
                  <div className={styles.list_row}>
                    <CartItem
                      name={item.name}
                      img={item.img_url}
                      deleteItem={() => {
                        deleteItem(item.id);
                      }}
                    />
                    <QuantityBox
                      quantity={item.quantity}
                      incrementQuantity={() =>
                        changeQuantity(item.id, "increment")
                      }
                      decrementQuantity={() =>
                        changeQuantity(item.id, "decrement")
                      }
                    />
                    <p> &#8377; &nbsp;{item.price}</p>
                  </div>
                );
              })
            ) : (
              <button type="button" onClick={reloadItems}>
                Reload items in the Cart
              </button>
            )}
          </div>
        </div>
        <div className={styles.summary}>
          <SummaryBox cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
