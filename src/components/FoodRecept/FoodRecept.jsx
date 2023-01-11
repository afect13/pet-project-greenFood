import axios from "axios";
import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

function FoodRecept() {
  const [recept, setRecept] = useState([]);
  useEffect(() => {
    const apiURL =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=be636a62&app_key=5ef9de19ad58c0397325cc58a241ac3d&dishType=Salad&random=true";
    axios.get(apiURL).then((resp) => {
      const recept = resp.data;
      setRecept(recept.hits.slice(0, 9));
    });
  }, []);
  console.log(recept);
  return (
    <>
      <h1 className="text-center font-russo  font-bold mx-8 text-[42px] leading-[130%] mt-[10px] mb-[30px]">
        Recept
      </h1>
      <div className="container mx-auto flex flex-wrap justify-center  gap-16">
        {recept.length > 0 ? (
          recept.map((rec, i) => <FoodCard key={i} recept={rec}></FoodCard>)
        ) : (
          <p>Загрузка</p>
        )}
      </div>
    </>
  );
}

export default FoodRecept;
