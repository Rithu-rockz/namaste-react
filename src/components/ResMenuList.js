import ItemList from "./ItemList.js";
import React, { useState } from "react";

const ResMenuList = ({ data, showItems, setShowIndex    }) => {
  //const [showItems, setShowItems] = useState(false);
  //console.log(data);
  const handleClick = () => {
    setShowIndex();
    //setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4  bg-green-50">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResMenuList;
