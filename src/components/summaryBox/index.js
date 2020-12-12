import React from "react";

import styles from "./style.module.css";

const SummaryBox = ({ cart }) => {
  return (
    <div className={styles.main}>
      <h2>Total</h2>
      <p>Items({cart.length})</p>
      <span>:</span>
      <p>
        &#36;&nbsp;
        {cart.reduce((a, item) => a + item.price * item.quantity, 0)}
      </p>
      <p>Discount</p>
      <span>:</span>
      <p>
        -&#36;&nbsp;
        {cart.reduce(
          (a, item) => a + item.price * item.quantity * (item.discount / 100),
          0
        )}
      </p>
      <p>Type Discount</p>
      <span>:</span>
      <p>
        -&#36;&nbsp;
        {cart.reduce(
          (a, item) =>
            a +
            (item.type === "fiction" ? item.price * item.quantity * 0.15 : 0),
          0
        )}
      </p>
      <div className={styles.total}>
        <h2>Order Total</h2>
        <h2>
          &#36;&nbsp;
          {cart.reduce(
            (a, item) =>
              a +
              item.price *
                item.quantity *
                (1 -
                  item.discount / 100 -
                  (item.type === "fiction" ? 0.15 : 0)),
            0
          )}
        </h2>
      </div>
    </div>
  );
};
export default SummaryBox;
