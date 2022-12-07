import React from "react";
import foodimg from "../image/food.png";
import rucola from "../image/rucola-png.png";
import arrow from "../image/arrow.png";

const Header = () => {
  return (
    <div className=" flex flex-row  ">
      <div className=" flex flex-col basis-1/2">
        <div className=" w-[210px] h-[50px] bg-yellow  rounded-3xl text-center mt-[40px] ">
          <p className="m-3 font-russo text-[16px] text-oragange ">
            #1 Best Healthy Salad
          </p>
        </div>
        <h1 className="font-russo text-[72px] tracking-tight font-bold leading-[130%] mt-[40px]">
          <span className="text-oragange">Skip</span> The Diet , Just Eat
          Healthy With Jez Salad
        </h1>
        <p className=" font-nunito text-[20px] leading-[160%] font-medium mt-[40px]">
          Imagine you don't need a diet because we provide healthy and delicious
          food for you!
        </p>
        <button className=" bg-oragange w-[192px] h-[68px] rounded-[100px] font-russo  text-yellow mt-[40px] hover:bg-orange500 transition duration-300 ease-in-out ">
          Order Food
        </button>
      </div>
      <div className="basis-1/2 relative">
        <div className=" group block">
          <img
            className=" w-max h-max mt-[40px]  group-hover:rotate-45 delay-150 duration-300 ease-linear"
            src={foodimg}
            alt="еда"
          />
          <img
            className=" absolute top-0  right-[230px] group-hover:-rotate-90 origin-bottom-left  delay-150 duration-300 ease-linear"
            src={rucola}
            alt="рукола"
          />
          <div className="absolute bottom-0 right-0 w-fit ">
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
        <div className=" w-[250px] h-[500px] bg-oragange rounded-full rotate-45 blur-[200px] absolute top-0  right-0 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Header;
