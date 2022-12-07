import React from "react";

const Card = (props) => {
  return (
    <div className=" max-w-[1170px]  m-auto w-[100%]">{props.children}</div>
  );
};

export default Card;
