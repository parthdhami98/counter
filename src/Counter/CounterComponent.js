import React, { useState } from "react";
import styles from "./_.module.css";

const CounterComponent = () => {
  /* initializing counter state with initial value */
  const [counter, setCounter] = useState(1);

  // maximum limit of the counter
  const maxLimit = 1000;

  /* handles increment of the counter */
  const handleIncrement = () => {
    if (counter < maxLimit) setCounter(+counter + 1);
  };

  /* handles decrement of the counter */
  const handleDecrement = () => {
    setCounter(+counter - 1);
  };

  return (
    <section className={styles.counterSection}>
      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} onClick={handleDecrement}>
          <span className={styles.decrementIcon}> - </span>
        </button>
        <input
          className={styles.inputField}
          value={counter}
          onChange={(e) => {
            if (+e.target.value <= maxLimit) setCounter(e.target.value);
          }}
        />
        <button className={styles.incrementBtn} onClick={handleIncrement}>
          <span className={styles.incrementIcon}> + </span>
        </button>
      </div>
      <p className={styles.noteContainer}>
        Note : Maximum value of the counter is 1000
      </p>
    </section>
  );
};

export default CounterComponent;
