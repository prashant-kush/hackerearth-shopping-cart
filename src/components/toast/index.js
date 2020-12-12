import React from "react";

import styles from "./style.module.css";

const Toast = ({ notifList, options }) => {
  return (
    <div className={styles.main} style={options}>
      {notifList.map((item) => {
        return (
          <div
            className={styles.message}
            style={{ backgroundColor: item.type === "error" ? "red" : "green" }}
          >
            <hr className={styles.timer} />
            <p>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
