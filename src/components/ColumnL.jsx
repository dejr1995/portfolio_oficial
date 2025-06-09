import React from "react";
import ProjectVideo from "./ProjectVideo";
import ButtonPrototype from "./ButtonPrototype";
import { useTranslation } from "react-i18next";

const ColumnL = () => {
  const { t } = useTranslation();

  function getRandomHeight() {
    const possibleHeights = ["348px", "294px"];

    const randomIndex = Math.floor(Math.random() * possibleHeights.length);
    return possibleHeights[randomIndex];
  }

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-lg ml-2 mt-2 mr-1">
        <div
          className="flex flex-col m-1 "
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/LofIab2.mp4"}
            title={"Ecommerce"}
            item1={"React"}
            item2={"Styled-Components"}
            item3={"Node.js"}
            item4={"MongoDB"}
            item5={"Redux-Toolkit"}
            myOpen={""}
            myGitHub={""}
          />
          <ButtonPrototype href={""} type={t("demo")} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg ml-2 mt-2 mr-1">
        <div
          className="flex flex-col m-1 "
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/fhVRkMf.mp4"}
            title={"Inventario"}
            item1={"React"}
            item2={"Styled-Components"}
            item3={"Node.js"}
            item4={"MariaDB"}
            item5={"Redux-Toolkit"}
            myOpen={""}
            myGitHub={""}
          />
          <ButtonPrototype href={""} type={t("demo")} />
        </div>
      </div>
    </div>
  );
};

export default ColumnL;
