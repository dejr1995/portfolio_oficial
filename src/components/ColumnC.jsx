import React from "react";
import ProjectVideo from "./ProjectVideo";
import ButtonPrototype from "./ButtonPrototype";
import { useTranslation } from "react-i18next";

const ColumnC = () => {
  const { t } = useTranslation();

  function getRandomHeight() {
    const possibleHeights = ["490px", "294px", "352px"];

    const randomIndex = Math.floor(Math.random() * possibleHeights.length);
    return possibleHeights[randomIndex];
  }

  return (
    <div className="w-full lg:mb-24">
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div
          className="flex flex-col m-1 "
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/dm1AsUU.mp4"}
            title={"Clone Netflix"}
            item1={"React"}
            item2={"Styled-Components"}
            item3={"Material-UI"}
            item4={"Redux-Toolkit"}
            item5={""}
            myOpen={"s"}
            myGitHub={"https://github.com/dejr1995/plataform-video.git"}
          />
          <ButtonPrototype
            href={"https://clone-netflix-devernlei.netlify.app"}
            type={t("prototype")}
          />
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div
          className="flex flex-col m-1 "
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/vFGcaOZ.mp4"}
            title={"Crypto Market"}
            item1={"Vue"}
            item2={"Chart.js"}
            item3={"Bootstrap"}
            item4={""}
            item5={""}
            myOpen={"s"}
            myGitHub={"https://github.com/dejr1995/plataform-video.git"}
          />
          <ButtonPrototype
            href={"https://my-market-crypto.netlify.app"}
            type={t("prototype")}
          />
        </div>
      </div>
    </div>
  );
};

export default ColumnC;
