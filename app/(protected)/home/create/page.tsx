/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const img =
  "https://s3-alpha-sig.figma.com/img/2192/9ade/96e419a040fe1b637d4964ddf4f4689f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wzh9aCE5Oi5lAk9DFPMKEe~JiXKlDhmQ8jql01oqCftocD2aDjJxsn1ZZmeDtdSN5LauU64X6TpbAiFSZU-QY7wTvIXjvX-7GyZvX~9dxHPGuamFF04caDGZpgEgHphmax2YzFkK-Ee4lXtjAi2VDePRoUpb3HOg5WPju5jkYEJGEOlAWr5sccyPaZzW8X2A18Mvm5DM-HB1pyhphL~eEqu5h2HIcB9paL69eZ4Zr~75DfbaI6PXwMIPzTvcZ0~T9m~ooTFbpc8iUF5sQZ8MJ6qA2Mp6K0EA5lNR1pM~b3d0VJ6aGF2CWNTFY-XFY9bGpOQjXgJaJDxCTkfLyQk9Kg__";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
      <img
        className="object-contain h-max saturate-50 z-30"
        src={img}
        alt={"hello"}
      />
      <span className="text-white/60 font-extrabold font-3xl text-center">
        {" "}
        Creating your video <br /> It will be available in 5-10 minutes...
      </span>
      <Link
        href={"/videos"}
        className="underline underline-offset-2 text-blue-500"
      >
        <Button>Go to my videos</Button>
      </Link>
    </div>
  );
};

export default Page;
