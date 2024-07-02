import { baseUrl } from "../lib/utils";

export const fetchHeroSectionData = async () => {
  const response = await fetch(baseUrl + "/api/hero-section?populate=deep,99");
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  return data.data.attributes.hero.hero_photo;
};
