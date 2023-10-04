import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Lenguaje = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Obtiene la hora en formato HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  // Obtiene la fecha en formato DD/MM/YYYY
  const formattedDate = time.toLocaleDateString();

  const location = useLocation();

  const [selectedButton, setSelectedButton] = useState("es");

  const { t, i18n } = useTranslation();

  const changeLanguage1 = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedButton(lng === "en" ? "" : "en");
  };
  const changeLanguage2 = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedButton(lng);
    setSelectedButton(lng === "es" ? "" : "es");
  };

  const shouldHideElement =
    location.pathname === "/projects" || location.pathname === "/gallery" || location.pathname === "/contact";
  const shouldHideElement2 =
    location.pathname === "/projects" ||
    location.pathname === "/gallery" ||
    location.pathname === "/person" ||
    location.pathname === "/contact";

  return (
    <div>
      {shouldHideElement2 ? null : (
      <div className="fixed lg:top-[94%] z-10 lg:left-[2%] left-[4%] top-[95%] flex">
        <p className="text-xs text-gray-600/70 italic font-semibold">{formattedTime}</p>
      </div>
      )}
      {shouldHideElement2 ? null : (
      <div className="fixed lg:top-[3%] z-10 lg:right-[2%] right-[4%] top-[95%] flex">
        <p className="text-xs text-gray-600/70 italic font-semibold">{formattedDate}</p>
      </div>
      )}
      {shouldHideElement ? null : (
        <div className="absolute lg:top-[3%] z-10 lg:left-[2%] right-[12%] top-[1.9%]">
          <div className="flex gap-2">
            <button
              onClick={() =>
                changeLanguage2(i18n.language === "en" ? "" : "en")
              }
              className={`${
                selectedButton === "en" ? "text-gray-600/70 italic font-semibold" : "text-yellow-600"
              } transition duration-300 ease-in-out `}
            >
              {t("lenguaje1")}
            </button>
            <span className="text-gray-600/70">/</span>
            <button
              onClick={() =>
                changeLanguage1(i18n.language === "es" ? "" : "es")
              }
              className={`${
                selectedButton === "es" ? "text-gray-600/70 italic font-semibold" : "text-yellow-600"
              } transition duration-300 ease-in-out  `}
            >
              {t("lenguaje2")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lenguaje;
