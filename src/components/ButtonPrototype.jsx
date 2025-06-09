import React, { useEffect, useState } from "react";

const ButtonPrototype = ({ href, type }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (href === "") {
      setIsEmpty(true);
    } else if (href !== "") {
      setIsEmpty(false);
    }
  }, [href]);

  return (
    <a
      href={isEmpty ? "#" : href}
      onClick={isEmpty ? (e) => e.preventDefault() : undefined}
    >
      <div className="border bg-gray-100 h-[40px] rounded-lg flex justify-center items-center text-gray-500">
        {type}
        <div
          className={`border ${
            isEmpty ? "bg-red-500" : "bg-green-500"
          } w-2 h-2 rounded-full ml-2`}
        ></div>
      </div>
    </a>
  );
};

export default ButtonPrototype;
