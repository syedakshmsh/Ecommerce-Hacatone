import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="md:h-[718.63px]  md:w-full w-auto h-auto shadow-lg ">
        <Image
          src={"/copy1.png"}
          alt={"#"}
          width={1360}
          height={718.63}
        ></Image>
        <div className=" absolute md:w-[443px] md:h-[443px]  lg:top-[253px] md:top-[253px] sm:top-[253px] top-[103px]  md:ml-[739px]  ml-[79px] bg-[#FFF3E3] border-2 rounded-xl md:block hidden">
          <div className=" md:h-[344px] md:w-[561px]    pl-10 lg:pt-10   md:pt-10 sm:pt-10  pt-2">
            <p className="">New Arrival</p>
            <h1 className=" text-[#B88E2F] md:text-5xl    text-2xl pt-2 ">
              Discover Our New Collection
            </h1>
            <p className="lg:pt-4 md:pt-4 sm:pt-4 pt-2">
              {" "}
              Lipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="pt-5">
              <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  lg:h-[74px] lg:w-[222px]  md:h-[74px] md:w-[222px]  sm:h-[44px] sm:w-[122px]  h-auto w-auto p-3 ">
                Submmit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      
      
     
      
        </div>
   
  );
}

export default Hero;
