import React from "react";

import styles from "./style.module.css";

const Item = ({ name, deleteItem, img }) => {
  return (
    <div className={styles.item_main}>
      <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
      <span>{name}</span>
      <button type="button" onClick={deleteItem}>
        x
      </button>
    </div>
  );
};

export default Item;
