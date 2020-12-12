import React from "react";

import styles from "./style.module.css";

const QuantityBox = ({ quantity, changeQuantity }) => {
  return (
    <div className={styles.main}>
      <button
        type="button"
        onClick={() => {
          if (quantity - 1 != 0) changeQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <input className={styles.input} type="number" value={quantity} />
      <button
        type="button"
        onClick={() => {
          changeQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
