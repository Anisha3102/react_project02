

import { useState } from "react";

const Item = ({ icecream,setTotal }) => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < 5) {
      setCount((c) => c + 1)
      setTotal((a) => a + icecream.price);
    };
  }

  function handleDecrement() {
    if (count > 0) {
      setCount((c) => c - 1);
      setTotal((a) => a - icecream.price);
    } 
  }

 return (
   <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-white rounded-lg shadow-lg my-4 mx-2 hover:shadow-xl transition-shadow duration-200 ease-in-out">

     <div className="flex items-center space-x-4 mb-4 md:mb-0 w-1/4 justify-center">
       <img
         className="w-20 h-20 object-cover rounded-full border-4 border-pink-400"
         src={icecream.imageURL}
         alt={icecream.name}
       />
       <h4 className="text-xl font-semibold text-teal-800">{icecream.name}</h4>
     </div>

    
     <div className="w-1/4 flex justify-center items-center">
       <h4 className="text-lg font-bold text-purple-600">{icecream.price}</h4>
     </div>

     
     <div className="flex items-center space-x-4 w-1/4 justify-center">
       <button
         className="p-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
         onClick={handleDecrement}
       >
         -
       </button>
       <span className="text-xl font-medium text-gray-800">{count}</span>
       <button
         className="p-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
         onClick={handleIncrement}
       >
         +
       </button>
     </div>

     
     <div className="w-1/4 flex justify-center items-center">
       <h4 className="text-lg font-bold text-indigo-600">
         {count * icecream.price}
       </h4>
     </div>
   </div>
 );

};

export default Item;
