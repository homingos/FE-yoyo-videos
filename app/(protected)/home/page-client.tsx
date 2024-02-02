"uce client";

import Icon from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const img =
//   "https://s3-alpha-sig.figma.com/img/2192/9ade/96e419a040fe1b637d4964ddf4f4689f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wzh9aCE5Oi5lAk9DFPMKEe~JiXKlDhmQ8jql01oqCftocD2aDjJxsn1ZZmeDtdSN5LauU64X6TpbAiFSZU-QY7wTvIXjvX-7GyZvX~9dxHPGuamFF04caDGZpgEgHphmax2YzFkK-Ee4lXtjAi2VDePRoUpb3HOg5WPju5jkYEJGEOlAWr5sccyPaZzW8X2A18Mvm5DM-HB1pyhphL~eEqu5h2HIcB9paL69eZ4Zr~75DfbaI6PXwMIPzTvcZ0~T9m~ooTFbpc8iUF5sQZ8MJ6qA2Mp6K0EA5lNR1pM~b3d0VJ6aGF2CWNTFY-XFY9bGpOQjXgJaJDxCTkfLyQk9Kg__";

const HomeClient = ({ templates }: any) => {
  const item = templates[0];

  return (
    <div className="relative z-20 flex h-screen w-full flex-col items-start gap-4 overflow-hidden">
      <div className="bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 z-40 h-24 w-full"></div>
      <Link
        href={"/avatars"}
        className="fixed top-10 left-4 p-3 bg-primary rounded-full z-40 text-black cursor-pointer hover:scale-110"
      >
        <Icon icon={"avatar"} size={25} />
      </Link>
      <Link
        href={"/videos"}
        className="fixed top-10 right-4 p-3 bg-primary rounded-full z-40 text-black cursor-pointer hover:scale-110"
      >
        <Icon icon={"video"} size={25} />
      </Link>
      <div className="absolute left-0 top-0 h-full w-full z-30">
        <Image
          fill
          className="object-fit saturate-50"
          src={item?.thumbnail_url}
          alt={"hello"}
        />
      </div>
      <div className="absolute z-30 bg-gradient-to-b from-transparent via-black/60 to-black/80 h-48 w-full bottom-0 left-0"></div>
      <div className="fixed bottom-2 left-0 flex flex-col p-4 gap-2 z-30 w-full">
        <p className="text-white text-xl font-bold">{item?.display_name}</p>
        <span className="flex gap-2 font-semibold text-sm text-white items-center mb-6">
          <Icon icon={"bar"} size={"18"} />
          {item?.display_name} theme song
        </span>
        <button
          type="button"
          className="w-full rounded-full py-2 flex gap-2 justify-center font-bold items-center bg-[#B9FA00] mb-6"
        >
          <Icon icon={"create"} size={"18"} />
          Create
        </button>
        {/* <span className="flex gap-2 text-sm items-center w-full justify-center text-white">
          Scroll to see next <Icon icon={"doubleUp"} />
        </span> */}
      </div>
    </div>
  );
};

export default HomeClient;
