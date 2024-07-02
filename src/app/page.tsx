import Image from "next/image";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/NavBar2";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";


const Page = () => {
  return (
    <div>
      <Header /> 
      <Navbar /> 
      <Navbar2 />
      <Carousel />
      <Footer />
      
    </div>
  );
}

export default Page;

