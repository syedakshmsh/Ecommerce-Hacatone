
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import ProductCards from "./DetailProduct/page";
import Herosection from "./HeroSection/page";
import Newsubmission from "./HeroSection/Newsubmission";
import Furniture from "./HeroSection/Furniture";
import { Suspense } from "react";



export default function Home() {
  return (
    <div>
     <Suspense>
      <Hero/>
      <Herosection />
      <ProductCards />
      <Newsubmission />
      <Furniture />
      </Suspense>
    
    </div>
  );
}
