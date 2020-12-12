import React from "react";

import styles from "./style.module.css";

const QuantityBox = ({ quantity, incrementQuantity, decrementQuantity }) => {
  return (
    <div className={styles.main}>
      <button
        type="button"
        onClick={() => {
          decrementQuantity();
        }}
      >
        -
      </button>
      <input className={styles.input} type="number" value={quantity} />
      <button
        type="button"
        onClick={() => {
          incrementQuantity();
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
