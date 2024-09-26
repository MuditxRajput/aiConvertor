"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
const Header = () => {
  const [open, isOpen] = useState(false);
  const router = useRouter();
  const navItem = [
    "Contact us",
    "About us",
    "Disclaimer",
    "Privacy Policy",
    "DMCA",
  ];
  return (
    <div className="  flex justify-between mt-1 items-center sm:px-5 py-1 px-5 relative">
      <div className="">
        <h1 className=" text-xl sm:text-2xl lg:text-4xl font-bold cursor-pointer " onClick={()=>router.push('/')} >Ai To Human Text</h1>
      </div>
      <div className=" hidden sm:flex sm:gap-4 ">
        {navItem?.map((val, index) => (
          <div key={index} className="flex gap-3 hover:underline cursor-pointer " onClick={()=>router.push(`../pages/${val}`)}>
            {val}
          </div>
        ))}
      </div>
      <div className=" sm:hidden  flex justify-center items-center">
        <IoReorderThreeSharp
          className="text-2xl"
          onClick={() => isOpen(!open)}
        />
      </div>
      {open && (
        <div className=" absolute top-12 left-0 bg-black w-full  flex flex-col justify-center items-center gap-5">
          {navItem?.map((val,index)=>(
            <div key={index} className=" cursor-pointer" onClick={()=>router.push(`../pages/${encodeURIComponent(val)}`)} >
                {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
