function FoodCard({ recept }) {
  return (
    <div className="flex flex-col justify-between basis-1/4 max-w-sm bg-white border  border-greyborder rounded-lg shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={recept.recipe.images.REGULAR.url}
          alt=""
        />
      </a>
      <div className="flex flex-col h-full justify-between p-5 ">
        <a href="#">
          <h5 className="mb-2 text-xl tracking-tight font-russo ">
            {recept.recipe.label}
          </h5>
        </a>
        <p className="mb-3 font-normal font-nunito   text-greytext">
          {recept.recipe.ingredientLines.join().length > 100
            ? recept.recipe.ingredientLines.join().slice(0, 130) + "..."
            : recept.recipe.ingredientLines.join()}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default FoodCard;
