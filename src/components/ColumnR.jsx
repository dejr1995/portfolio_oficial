import React, { useEffect, useState } from "react";
import ProjectVideo from "./ProjectVideo";
import ButtonPrototype from "./ButtonPrototype";
import { API_BASE_URL } from "../../config";

const ColumnR = () => {

  const [urls, setUrls] = useState([]);


  useEffect(() => {
      fetch(`${API_BASE_URL}/api/col_center`)
      .then((response) => response.json())
      .then((data) => setUrls(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  function getRandomHeight() {
    const possibleHeights = ['412px', '242px'];
  
    const randomIndex = Math.floor(Math.random() * possibleHeights.length);
    return possibleHeights[randomIndex];
  }

  return (
    <div className="w-full">
      {urls.map((item, index) => (
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div className="flex flex-col m-1" key={index} style={{ height: getRandomHeight() }}>
        <ProjectVideo
            videoSrc={item.urlvideo}
            title={item.title}
            item1={item.skill1}
            item2={item.skill2}
            item3={item.skill3}
            item4={item.skill4}
            item5={item.skill5}
            myOpen={item.urlopen}
            myGitHub={item.urlgithub}
          />
          <ButtonPrototype href={item.urlprototype} type={item.type}/>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ColumnR;
