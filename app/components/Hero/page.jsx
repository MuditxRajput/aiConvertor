"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
 function Hero() {
  const words = [
    {
      text: "Ai",
      className:"text-red-500",
    },
    {
      text: "text",
      className:"text-white",
    },
    {
      text: "to",
      className:"text-white",
    },
    {
      text: "human",
      className:"text-green-500",
    },
    {
      text: "text",
      className:"text-white",
    },
    {
      text: "converter.",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[13rem] sm:h-[15rem]  ">
      <p className=" text-xs sm:text-xl  ">
      The best ai to human text converter
      </p>
      <TypewriterEffectSmooth words={words} />
   
    </div>)
  );
}

export default Hero;