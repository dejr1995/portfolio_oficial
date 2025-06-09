import React from "react";
import ProjectVideo from "./ProjectVideo";
import ButtonPrototype from "./ButtonPrototype";
import { useTranslation } from "react-i18next";

const ColumnR = () => {
  const { t } = useTranslation();

  function getRandomHeight() {
    const possibleHeights = ["412px", "242px"];

    const randomIndex = Math.floor(Math.random() * possibleHeights.length);
    return possibleHeights[randomIndex];
  }

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div
          className="flex flex-col m-1"
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/VVLb6RJ.mp4"}
            title={"Portfolio"}
            item1={"React"}
            item2={"Tailwind CSS"}
            item3={"Vite"}
            item4={""}
            item5={""}
            myOpen={""}
            myGitHub={""}
          />
          <ButtonPrototype href={"https://devernlei.com/"} type={t("demo")} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div
          className="flex flex-col m-1"
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/3eHztR1.mp4"}
            title={"Rick and Morty"}
            item1={"React"}
            item2={"Tailwind CSS"}
            item3={"Vite"}
            item4={""}
            item5={""}
            myOpen={"*"}
            myGitHub={"https://github.com/dejr1995/rick_and_morty_app.git"}
          />
          <ButtonPrototype
            href={"https://rickandmorty-devernlei.netlify.app"}
            type={t("prototype")}
          />
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg ml-1 mt-2 mr-1">
        <div
          className="flex flex-col m-1"
          style={{ height: getRandomHeight() }}
        >
          <ProjectVideo
            videoSrc={"https://i.imgur.com/CCKvD7h.mp4"}
            title={"Portfolio 2"}
            item1={"React"}
            item2={"Vite"}
            item3={""}
            item4={""}
            item5={""}
            myOpen={"*"}
            myGitHub={""}
          />
          <ButtonPrototype
            href={"https://cool-macaron-60d356.netlify.app/"}
            type={t("prototype")}
          />
        </div>
      </div>
    </div>
  );
};

export default ColumnR;
