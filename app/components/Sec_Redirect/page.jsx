'use client';
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
// import AdCode from "../AdCode";

const SecRedirect = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [showButton, setShowButton] = useState(false);
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1200);
      return () => clearTimeout(timerId);
    } else {
      setShowButton(true);
    }
  }, [timeLeft]);

  const handleOpenPdf = () => {
    if (url) {
      const decodedUrl = decodeURIComponent(url);
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = decodedUrl;
      } else {
        window.open(decodedUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 p-4 order-1 lg:order-1 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-5  ">
            Just 5 sec your pdf is loading.. 🏃🏃
          </h2>
          
          <div className="p-4 flex justify-center items-center">
            {!showButton && (
              <p className="text-semibold whitespace-nowrap">
                Download will start in {timeLeft} seconds
                
              </p>
            )}
            {showButton && (
              <button
                className="bg-orange-600 text-white font-semibold px-2 rounded-md m-2 shadow-md shadow-orange-300"
                onClick={handleOpenPdf}
              >
                Download PDF
              </button>
            )}
          </div>

          <div className="text-lg font-semibold mb-1 mt-1 ">
            
            <p>What if I can't get the Aktu quantum?</p>
          </div>

          <p>
            In the header section, you get the PDF section, click on that and fill
            out the form. You need to enter some details like PDF name, year, and
            sem with code and click on submit. Within 1 hr we upload the PDF and
            you get access to that Aktu quantum PDF.
          </p>
          
        </div>

      
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SecRedirect/>
    </Suspense>
  );
}
