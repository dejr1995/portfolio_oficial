import React from "react";

const GalleryItem = ({ myImg }) => {
  return (
    <div className="flex flex-row relative">
      {myImg && (
        <div className="m-2 w-full lg:h-[630px]">
        <img src={myImg} className="w-full lg:h-full object-cover rounded-lg"></img>
      </div>
      )}
    </div>
  );
};

export default GalleryItem;
