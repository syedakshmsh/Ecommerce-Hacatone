
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import ProductCards from "./DetailProduct/page";
import Herosection from "./HeroSection/page";
import Newsubmission from "./HeroSection/Newsubmission";
import Furniture from "./HeroSection/Furniture";



export default function Home() {
  return (
    <div>
     
      <Hero/>
      <Herosection />
      <ProductCards />
      <Newsubmission />
      <Furniture />
     
    
    </div>
  );
}
