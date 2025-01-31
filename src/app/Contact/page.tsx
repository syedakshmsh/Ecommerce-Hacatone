import React from "react";
import Link from "next/link";
import Image from "next/image";


function page() {
  return (
    <div>
      
    
      <div className="md:max-w-full h-auto w-auto">
        <Image
          src={"/Group 78.png"}
          alt={"#"}
          width={1360}
          height={316}
        ></Image>
      </div>
      <div className="md:w-full w-auto h-auto">
        <h1 className="font-bold  flex justify-center">
          Get In Touch With Us
        </h1>
        <p className="flex justify-center text-gray-400">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff AlwaysBe There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="sm:flex md:flex lg:flex justify-center pt-5 gap-32">
          <div className="pt-16 pl-20 w-[397px] ">
            <h1 className="font-bold">Address</h1>
            <p className="text-gray-400 text-xs">
              236 5th SE Avenue,
              <br /> New York NY10000,
              <br /> United States
            </p>
            <div className="pt-10">
              <h1 className="font-bold">phone</h1>
              <p className="text-xs">Mobile: +(84) 546-6789</p>
              <p className="text-xs">Hotline: +(84) 456-6789</p>
            </div>
            <div className="pt-10">
              <h1 className="text-xs font-bold">Working Item</h1>
              <p className="text-xs">Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="md:pt-10 pt-2 pl-16">
            <p>your name</p>
            <button className="border-2 border-[#B88E2F] rounded-lg h-[28px] w-[228px] md:h-[45px] md:w-[328px] p-3 ">
              {" "}
            </button>
            <div className="pt-5">
              <p>email address</p>
              <button className="border-2 border-[#B88E2F] rounded-lg h-[28px] w-[228px] md:h-[45px] md:w-[328px]  p-3 ">
                {" "}
              </button>
            </div>

            <div className="pt-5">
              <p>Subject</p>
              <button className="border-2 border-[#B88E2F] rounded-lg h-[28px] w-[228px] md:h-[45px] md:w-[328px] p-3 ">
                {" "}
              </button>
            </div>
            <div className="pt-5">
              <p>Message</p>
              <button className="border-2 border-[#B88E2F] rounded-lg h-[28px] w-[228px] md:h-[45px] md:w-[328px] p-3 ">
                {" "}
              </button>
            </div>
            <div className="pt-5">
              <button className="border-2 border-[#B88E2F] bg-[#B88E2F] text-white rounded-lg  h-[55px] w-[237px] p-3 ">
                Submmit{" "}
              </button>
            </div>
          </div>
          </div>
        
        </div>
        <div className="md:h-[100px] bg-[#F9F1E7]  md:w-full  w-auto">
          <div className="flex w-auto h-[100px]  justify-center items-center md:gap-12  gap-2 ">
            <div className="">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 ">crafted from top materials</p>
            </div>
            <div className="hidden md:block">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 ">Over 2 years</p>
            </div>
            <div className="">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 ">Over 2 years</p>
            </div>
            <div className="hidden md:block">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 ">Dedicated support</p>
            </div>
          </div>
        </div>

        
      </div>
   
  );
}

export default page;
