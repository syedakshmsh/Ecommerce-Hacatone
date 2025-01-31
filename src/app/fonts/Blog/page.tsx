import React from "react";
import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

function page() {
  return (
    <div>
      <div className="h-[100px] w-[1440px] bg-white flex justify-center gap-72 pt-4">
        <div className="flex gap-2  pl-2">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt={"#"}
            width={50}
            height={32}
          ></Image>
          <h1 className="text-2xl pt-4">Furniro</h1>
        </div>
        <div>
          <ul className="flex gap-3 pt-4">
            <li>
              <Link href="Hero">Home</Link>
            </li>
            <li>
              <Link href="Shop">Shop</Link>
            </li>
            <li>
              <Link href="Blog">Blog</Link>
            </li>
            <li>
              <Link href="Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 pt-4">
          <i className="bi bi-person-lines-fill"></i>
          <i className="bi bi-search"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
      <div className=" h-[316px] w-[1440px]">
        <Image
          src={"/Group 78 (2).png"}
          alt={"#"}
          width={1440}
          height={316}
        ></Image>
      </div>
      <div className="w-[1440px] flex">
        <div className="w-[820px] h-[794px] pt-6 pl-6">
          <Image
            src={"/Rectangle 68.png"}
            alt={"#"}
            width={817}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Going all-in with millennial design</h1>

          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>

        <div className="w-[397px] h-[537px] pl-10 p-6">
          <button className="border-2 border-[#B88E2F] rounded-lg  h-[58px] w-[311px] p-3 ">
            <i className="bi bi-search pl-32"></i>{" "}
          </button>
          <h1 className="flex justify-center pt-5 text-3xl">Categories</h1>
          <div className="flex justify-between text-gray-400 pl-7">
            <ul className="pt-2">
              <li className="pt-4">Craft</li>
              <li className="pt-4">Desing</li>
              <li className="pt-4">Homemade</li>
              <li className="pt-4">interior</li>
              <li className="pt-4">Wood</li>
            </ul>
            <ul className="pt-2">
              <li className="pt-4">2</li>
              <li className="pt-4">8</li>
              <li className="pt-4">7</li>
              <li className="pt-4">1</li>
              <li className="pt-4">6</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1440px] flex">
        <div className="w-[820px] h-[794px] pt-6 pl-6">
          <Image
            src={"/Rectangle 68 (1).png"}
            alt={"#"}
            width={817}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Exploring new ways of decorating</h1>

          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>

        <div className="w-[393px] h-[650px] pl-10 p-6 flex gap-2">
            <div className="w-[80px]">
            
                <Image
            src={"/Rectangle 69 (1).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69.png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (2).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (3).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (3).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
            </div>
            <div>
                <p className="pt-4">Going all-in<br/> with millennial design<br/>
                03 Aug 2022</p>
                <p className="pt-8">Exploring new ways<br/> of decorating<br/>
                03 Aug 2022</p>
                <p className="pt-8">Handmade pieces that <br/>took time to make<br/>
                03 Aug 2022</p>
                <p className="pt-8">Modern home<br/> in Milan<br/>
                03 Aug 2022</p>
                <p className="pt-8">Colorful office<br/> redesign
                03 Aug 2022</p>
            </div>
          </div>
        
      </div>
      <div className="w-[820px] h-[794px] pt-6 pl-6">
          <Image
            src={"/Rectangle 68 (2).png"}
            alt={"#"}
            width={817}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Handmade pieces that took time to make</h1>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>
        <div className="flex justify-center pt-6 gap-8">
        <button className="border-2 h-[50px] w-[50px] bg-[#B88E2F]  rounded-lg">
              1
            </button>
            <button className="border-2 h-[50px] w-[50px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
            2
            </button>
            <button className="border-2 h-[50px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[50px] rounded-lg">
              3{" "}
            </button>
            <button className="border-2 h-[60px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[90px] rounded-lg">
              next{" "}
            </button>

        </div>
        <div className="h-270 bg-[#F9F1E7] w-[1440px] pt-4">
          <div className="h-[70] w-[1234] flex  justify-center gap-12">
            <div className="pt-4">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 pb-6">crafted from top materials</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 pb-6">Over 2 years</p>
            </div>
            <div className="pl-4 pt-4">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 pb-6">Dedicated support</p>
            </div>
          </div>
        </div>
        <div className="h-[359px] w-[1440px] pt-10">
          <div className="h-[319px] w-screen flex">
            <div className="pl-20">
              <h1 className="font-bold text-2xl">Funiro.</h1>
              <p className="pt-8 text-gray-400  text-xs w-[285px] h-[75px]">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className="w-[712px] h-[312px] pl-20 flex gap-20 ">
              <div className="w-[68] flex-col gap-6 h-[212px]">
                <p className="text-gray-400">Link</p>
                <p className="pt-4">home</p>
                <p className="pt-4">shop</p>
                <p className="pt-4">About</p>
                <p className="pt-4">Contact</p>
              </div>
              <div className="w-[140px] h-[142px] pl-10">
                <p className="text-gray-400">help</p>
                <p className="pt-4">Payment Options</p>
                <p className="pt-4">Returns</p>
                <p className="pt-4">Privacy Policies</p>
              </div>
              <div className="w-[286px] h-[101px] pl-10">
                <p className="text-gray-400">Newsletter</p>
                <p className="text-gray-400 pt-9"> Email Address</p>
                <hr />
              </div>
              <div className="pt-16">
                <p>Subscribe</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="p-4 pl-10">
            <hr />
            <p className="pl-10">2023 furino. All rights reverved</p>
          </div>
        </div>
      

      
    </div>
  );
}

export default page;
