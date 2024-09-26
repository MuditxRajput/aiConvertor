"use client"
import { useRouter } from "next/navigation";
const Footer = () => {
    const router = useRouter();
    const pages =['About us','Contact us','Privacy Policy','Disclaimer','DMCA']
  return (
    <div className='flex justify-center items-center bg-black gap-3 sm:gap-10 mb-5'>
      {pages?.map((val,index)=>(
        <div key={index} onClick={()=>router.push(`../pages/${val}`)} className='flex cursor-pointer justify-center items-center whitespace-nowrap text-xs sm:text-lg sm:gap-10 '>
            {val}
        </div>
      ))}
    </div>
  )
}

export default Footer
