import React from 'react';
import Image from 'next/image';



function Newsubmission() {
  return (
    <div>
         <div className="md:w-full h-auto w-auto  pt-9 bg-[#F9F1E7] flex gap-6">
                <div className="w-[422px] h-[32px]   md:pl-11 sm:pl-7 pl-0 lg:pt-44 md:pt-44 sm:pt-44 pt-0">
                  <h1 className="  md:text-2xl sm:text-2xl text-lg   ">50+ Beautiful rooms inspiration</h1>
                  <p className="text-sm md:block hidden">
                    Our designer already made a lot of beautiful prototipe of rooms that
                    inspire you
                  </p>
                  <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  lg:h-[55px] lg:w-[237px] h-auto w-auto p-3 ">
                    Submmit{" "}
                  </button>
                </div>
                <div>
                  <Image src={"/toq.png"} alt={"#"} width={404} height={582}></Image>
                </div>
                <div>
                  <Image
                    src={"/Rectangle 25.png"}
                    alt={"#"}
                    width={372}
                    height={486}
                  ></Image>
                </div>
              </div>
    </div>
  )
}

export default Newsubmission