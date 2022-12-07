import React from "react";

const Header = () => {
  return (
    <div className=" grid gap-[30px] grid-cols-2 ">
      <div className=" flex flex-col">
        <div className=" w-[210px] h-[50px]">
          <p>#1 Best Healthy Salad</p>
        </div>
        <h1>Skip The Diet, Just Eat Healthy With Jez Salad</h1>
        <p>
          Imagine you don't need a diet because we provide healthy and delicious
          food for you!
        </p>
        <button>Order Food</button>
      </div>
      <div className=" w-4 h-4 bg-organge"></div>
    </div>
  );
};

export default Header;
