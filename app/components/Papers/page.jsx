"use client"
import Image from 'next/image'
import pdf from '../../assets/pdf.png'
import paper from '../../utils/paper'
import { useRouter } from 'next/navigation'
const Papers = () => {
    const router = useRouter();
    const handleRedirect = (url) => {
        if (url) {
          const encodedUrl = encodeURIComponent(url);
          router.push(`/components/Redirect?url=${encodedUrl}`);
        }
      };
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-8">Previous Year Papers</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {paper?.map((val, index) => (
              <div
                onClick={() => handleRedirect(val.link)}
                key={index}
                className="cursor-pointer hover:shadow-lg hover:shadow-gray-400 sm:w-[200px] sm:h-[290px] h-[250px] rounded-2xl border-2 border-gray-300 transition-transform transform hover:scale-105"
              >
                <div className="flex justify-center items-center h-3/5">
                  <Image
                    src={pdf}
                    alt="pdf"
                    width={144}
                    height={144}
                    className="w-36"
                    placeholder="blur"
                    blurDataURL={pdf.src}
                  />
                </div>
                <div className="px-3 py-2 bg-white rounded-b-2xl">
                  <p className="text-md font-semibold text-gray-800">{val.name}</p>
                </div>
              </div>
            ))}
    </div>
  </div>
  )
}

export default Papers