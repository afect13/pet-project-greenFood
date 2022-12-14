import React from "react";
import foodimg from "../image/food.png";
import rucola from "../image/rucola-png.png";
import arrow from "../image/arrow.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["col-left"]}>
        <div className={styles.badge}>
          <p>#1 Best Healthy Salad</p>
        </div>
        <h1>
          <span>Skip</span> The Diet , Just Eat Healthy With Jez Salad
        </h1>
        <p>
          Imagine you don't need a diet because we provide healthy and delicious
          food for you!
        </p>
        <button>Order Food</button>
      </div>
      <div className={styles["col-rigth"]}>
        <div className={styles.inner + " group"}>
          <img
            className={
              styles.food +
              " group-hover:rotate-45 delay-150 duration-300 ease-linear"
            }
            src={foodimg}
            alt="еда"
          />
          <img
            className={
              styles.rucola +
              " group-hover:-rotate-90 origin-bottom-left  delay-150 duration-300 ease-linear"
            }
            src={rucola}
            alt="рукола"
          />
          <div className={styles.arrow}>
            <img
              className=" m-auto opacity-0 group-hover:opacity-100 delay-700 duration-300"
              src={arrow}
              alt="стрелка"
            />
            <p className="font-nunito text-[20px] leading-[160%] font-medium opacity-0 group-hover:opacity-100 delay-1000 duration-300">
              Лучшие рецепты
            </p>
          </div>
        </div>
        <div className={styles.blur}></div>
      </div>
    </div>
  );
};

export default Header;
