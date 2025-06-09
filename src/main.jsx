import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import Sidenav from "./components/Sidenav";
import "../src/index.css";
import Parameters from "./components/Parameters";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello!",
        changeLanguage: "Change Language to Spanish",
        title1: "About.",
        developer1: "Front-End Developer",
        developer2: "Back-End Developer",
        subtitle1: "My Skills",
        title2: "Contact.",
        subtitle2: "Get in touch with me via social media or email.",
        name: "Name:",
        email: "Email:",
        message: "Message:",
        send: "Send Message",
        writename: "Write your name",
        writeemail: "Write your email",
        writemessage: "Write your message",
        lenguaje1: "English",
        lenguaje2: "ES",
        mytext1:
          "👋Hello! My name is Diego Jara and I have a bachelor's degree in systems engineering and computer science. I have technical and management skills for problem solving, considering myself a self-taught, cooperative person and providing good performance solutions, and with scalability capabilities.",
        mytext2:
          "🙇🏻This interest in programming has allowed me to learn about the field of machine learning, where I have been given the opportunity to perform complex data analysis with Pandas and Numpy in Python.",
        demo: "View Demo",
        prototype: "View Prototype",
      },
    },
    es: {
      translation: {
        greeting: "¡Hola!",
        changeLanguage: "Cambiar idioma a inglés",
        title1: "Acerca de.",
        developer1: "Desarrollador Front-End",
        developer2: "Desarrollador Back-End",
        subtitle1: "Mis Habilidades",
        title2: "Contacto.",
        subtitle2:
          "Ponte en contacto conmigo a través de las redes sociales o correo electrónico.",
        name: "Nombre:",
        email: "Correo electronico:",
        message: "Mensaje:",
        send: "Enviar Mensaje",
        writename: "Escribe tu nombre",
        writeemail: "Escribe tu correo electronico",
        writemessage: "Escribe tu mensaje",
        lenguaje1: "EN",
        lenguaje2: "Spanish",
        mytext1:
          "👋¡Hola! Me llamo Diego Jara y soy bachiller en ingeniería de sistemas e informática. Cuento con habilidades tecnicas y de gestión para la resolución de problemas, considerandome una persona autodidacta, cooperativa y brindando soluciones de buen desempeño, y con capacidades de escalabilidad.",
        mytext2:
          "🙇🏻Este interés por la programación me ha permitido conocer el campo  de machine learning, donde me he dado la oportunidad de realizar análisis de datos complejos con Pandas y Numpy en Python.",
        demo: "Ver Demo",
        prototype: "Ver Prototipo",
      },
    },
  },
  lng: "en", // Establece el idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo en caso de que no se encuentre una traducción
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MyRoutes />
      <Sidenav />
      <Parameters />
    </HashRouter>
  </React.StrictMode>
);
