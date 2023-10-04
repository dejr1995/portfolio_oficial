import React, { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import { API_BASE_URL } from "../../config";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/image`)
      .then((response) => response.json())
      .then((data) => setGalleryItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="gallery" className="grid lg:grid-cols-2 lg:mt-0 mt-10">
      <div>
        <GalleryItem myImg="https://images.pexels.com/photos/3574590/pexels-photo-3574590.jpeg" />
      </div>
      {galleryItems.map((item) => (
        <GalleryItem key={item.id} myImg={item.urlimage} />
      ))}
    </section>
  );
};

export default Gallery;
