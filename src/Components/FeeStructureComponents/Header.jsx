import React from "react";

function Header({ EXAM }) {
  return (
    <div className="bg-gray-800 py-8 text-white mx-4 my-2 rounded-md">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {EXAM}
        </h1>
      </div>
      <div className="container mx-auto mt-6 text-center text-gray-300">
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          ipsum possimus, incidunt minima alias optio laborum adipisci quis nemo
          veritatis, pariatur in? Autem impedit, nesciunt rem non omnis
          molestias laboriosam natus minus iusto quia veritatis accusantium
          corrupti amet beatae doloribus labore voluptas laborum cum. Obcaecati?
        </p>
      </div>
    </div>
  );
}

export default Header;
