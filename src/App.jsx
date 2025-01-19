import React from "react";
import data from "./utility/data.js";
import Item from "./Components/item.jsx";
import { useState } from "react";

const App = () => {
  const [total,setTotal] = useState(0);
  return (
    <div className="max-w-6xl mx-auto p-4 bg-slate-200">
    
      <h1 className="text-center p-8 text-4xl font-extrabold text-gray-800">
        YOUR CART ({data.length} items)
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-6 text-lg font-semibold text-gray-700 border-b-2 border-gray-300 pb-2">
        <h3 className="text-center uppercase tracking-wide text-indigo-900">
          Flavour
        </h3>
        <h3 className="text-center uppercase tracking-wide text-indigo-900">
          Price
        </h3>
        <h3 className="text-center uppercase tracking-wide text-indigo-900">
          Quantity
        </h3>
        <h3 className="text-center uppercase tracking-wide text-indigo-900">
          Total
        </h3>
      </div>

      <div>
        {data.map((icecream, i) => (
          <Item icecream={icecream} setTotal={setTotal} key={i} />
        ))}
      </div>

      <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md mt-6 mx-2">
        <div className="w-1/2"></div>
        <div className="w-1/4 text-center text-lg font-semibold text-gray-800">
          Total Amount:
        </div>
        <div className="w-1/4 text-center text-xl font-bold text-green-600">
          {total}
        </div>
      </div>
    </div>
  );

};

export default App;
