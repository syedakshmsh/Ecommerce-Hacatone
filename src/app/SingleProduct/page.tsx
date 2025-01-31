import React from "react";
import Image from "next/image";
import Link from "next/link";


function page() {
  return (
    <div>
      
      <div></div>
      <div className="h-[100px] md:w-full bg-[#F9F1E7] flex gap-2  p-8">
        <p className="text-gray-400">Home</p>
        <i className="bi bi-chevron-right"></i>
        <p className="text-gray-400">shop</p>
        <i className="bi bi-chevron-right"></i>
        <p>|Asgaard sofa</p>
      </div>
      <div className="flex  md:flex-row flex-col gap-2 pt-4">
        <div className="h-[416px] w-[71px] pl-[99px]">
          <Image
            src={"/Group 94.png"}
            alt={"#"}
            width={76}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Group 98.png"}
            alt={"#"}
            width={76}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Group 97.png"}
            alt={"#"}
            width={76}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Group 96.png"}
            alt={"#"}
            width={76}
            height={80}
            className="pt-4"
          ></Image>
        </div>
        <div>
          <Image
            src={"/Group 95.png"}
            alt={"#"}
            width={481}
            height={391}
            className="pt-4"
          ></Image>
        </div>
        <div className="md:pl-10 pl-2">
          <h1 className="text-3xl pt-2">Asgaard sofa</h1>
          <p className="pt-4 text-2xl text-gray-400">Rs. 250,000.00</p>
          <div className="flex gap-2">
            <Image
              src={"/Five star (1).png"}
              alt={"#"}
              width={100}
              height={20}
            ></Image>
            <p className="text-gray-400">| customer Review</p>
          </div>
          <p className="text-xs pt-3">
            Setting the bar as one of the loudest speakers in its class,
            <br /> the Kilburn is a compact, stout-hearted hero with a
            well-balanced
            <br /> audio which boasts a clear midrange and extended highs for a
            sound.
          </p>
          <p className="pt-4 text-gray-400">size</p>
          <div className="flex pt-2 gap-2">
            <button className="border-2 h-[30px] w-[30px] bg-[#B88E2F] hover:[#B88E2F]  rounded-lg">
              L
            </button>
            <button className="border-2 h-[30px] w-[30px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
              XL
            </button>
            <button className="border-2 h-[30px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[30px] rounded-lg">
              Xs{" "}
            </button>
          </div>
          <p className="pt-2 text-gray-400">Colors</p>
          <div className="flex gap-2 pt-3">
            <button className="border-1 h-[30px] w-[30px] bg-[#816DFA] rounded-full">
              {" "}
            </button>
            <button className="border-1 h-[30px] w-[30px] bg-black rounded-full">
              {" "}
            </button>
            <button className="border-1 h-[30px] w-[30px] bg-[#B88E2F] rounded-full">
              {" "}
            </button>
          </div>
          <div className="pt-3 flex gap-2 mt-2">
            <button className="border-2 border-gray-400 rounded-lg h-[44px] w-[123px] mt-8  ">
              <ul className="flex justify-between p-2 ">
                <li>-</li>
                <li>1</li>
                <li>+</li>
              </ul>
            </button>
            <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
              Add to Cart
            </button>
            <button className="border-2 border-black rounded-lg  h-[64px] w-[215px] p-3 ">
              +Campare
            </button>
          </div>
          <p className="pt-3 w-5">
            <hr />
          </p>
          <div className="text-gray-400 flex gap-2 pt-3">
            <p>SKU</p>
            <p>:</p>
            <p>SS001</p>
          </div>
          <div className="text-gray-400 flex gap-2 pt-3">
            <p>Category</p>
            <p>:</p>
            <p>Sofas</p>
          </div>
          <div className="text-gray-400 flex gap-2 pt-3">
            <p>Tags</p>
            <p>:</p>
            <p>Sofa, Chair, Home, Shop</p>
          </div>
          <div className="flex gap-2 pt-5">
            <p className="text-gray-400">Share</p>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="h-[644px] md:w-full  pt-14">
        <hr className="w-5"/>
        <div className="flex justify-center gap-3 pt-5 ">
          <h1 className="text-bold ">Description</h1> 
          <p className="text-gray-400"> Additional Information</p>
          <p className="text-gray-400">Reviews [5]</p>
          <br />
        </div>
        <div className=" w-auto h-[75px] flex justify-center md:pl-60 md:pr-28 text-xs text-gray-400 pt-3 md:w-[1046px] md:h-[174px]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </div>
        <div className="md:w-full w-auto h-auto  md:pt-0 pt-28 md:pl-20 flex justify-center items-center gap-6 md:flex-row flex-col">
        <Image
            src={"/Group 107.png"}
            alt={"#"}
            width={605}
            height={348}
            className="pt-4"
          ></Image>
           <Image
            src={"/Group 106.png"}
            alt={"#"}
            width={605}
            height={348}
            className="pt-4"
          ></Image>
        </div>
      </div>
      <div className="md:pl-28  pl-5 md:w-[1236px] w-auto  md:pt-[98px] pt-10 h-auto">
        <hr/>
        <h1 className="flex justify-center pt-10 text-2xl font-bold">Related Product</h1>
        <div className="flex gap-4  md:flex-row  flex-col ml-7 ">
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
          <Image
            src={"/image 1 (1).png"}
            alt={"#"}
            width={285}
            height={301}
          
          ></Image>
          <h1 className="pt-2" >Syltherine</h1>
          <p className="text-gray-400 pt-2">Stylish cafe chair</p>
          <p className="pt-2" >Rp 2.500.000</p>

          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
          <Image
            src={"/image 2.png"}
            alt={"#"}
            width={285}
            height={301}
          
          ></Image>
          <h1 className="pt-2" >Leviosa</h1>
          <p className="text-gray-400">Stylish cafe chair</p>
          <p className="pt-2">Rp 3.500.000</p>

          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
          <Image
            src={"/image 3.png"}
            alt={"#"}
            width={285}
            height={301}
          
          ></Image>
          <h1 className="pt-2">Lolito</h1>
          <p className="text-gray-400">Luxury big sofa</p>
          <p className="pt-2">Rp 7.000.000</p>
          </div>
          <div className="w-[285px] h-[440px] bg-[#F4F5F7]">
          <Image
            src={"/Images.png"}
            alt={"#"}
            width={285}
            height={301}
          
          ></Image>
          <h1 className="pt-2">Respira</h1>
          <p className="text-gray-400">Outdoor bar table and stool</p>
          <p className="pt-2">
          Rp 14.000.000</p>
          </div>
          
        </div>
        <div className="flex justify-center pt-7 ">
        
      <button className=" h-[48px] w-[245px]  p-4 border-2 border-black text-[#B88E2F]"> Shop More</button>
      </div>
      </div>
      


    </div>
  );
}

export default page;
