"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/NavBar2";
import Carousel from "./Components/Carousel";
import { fetchHeroSectionData } from "./services/apiServices";
import { baseUrl } from "./lib/utils";

const Page: React.FC = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHeroSectionData();
        const imageSlides = data.map((item: any) => ({
          type: "image",
          content: {
            src: baseUrl + item.img.data.attributes.url,
            alt: item.img.data.attributes.name,
          },
        }));
        setSlides(imageSlides);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
      <Carousel slides={slides} />
    </div>
  );
};

export default Page;
