import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {


  return (
    <section id="gallery" className="grid lg:grid-cols-2 lg:mt-0 mt-10">
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/3574590/pexels-photo-3574590.jpeg" />
      </div>
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/16846628/pexels-photo-16846628/free-photo-of-laguna-paron.jpeg" />
      </div>
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/16971254/pexels-photo-16971254/free-photo-of-ciudad-vacaciones-punto-de-referencia-calle.jpeg" />
      </div>
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/3204350/pexels-photo-3204350.jpeg" />
      </div>
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/17043071/pexels-photo-17043071/free-photo-of-coches-trafico-vacaciones-rocas.jpeg" />
      </div>
     
    </section>
  );
};

export default Gallery;
