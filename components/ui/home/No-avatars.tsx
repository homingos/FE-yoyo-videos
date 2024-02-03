/* eslint-disable @next/next/no-img-element */
import Icon from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const img =
  "https://s3-alpha-sig.figma.com/img/2192/9ade/96e419a040fe1b637d4964ddf4f4689f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wzh9aCE5Oi5lAk9DFPMKEe~JiXKlDhmQ8jql01oqCftocD2aDjJxsn1ZZmeDtdSN5LauU64X6TpbAiFSZU-QY7wTvIXjvX-7GyZvX~9dxHPGuamFF04caDGZpgEgHphmax2YzFkK-Ee4lXtjAi2VDePRoUpb3HOg5WPju5jkYEJGEOlAWr5sccyPaZzW8X2A18Mvm5DM-HB1pyhphL~eEqu5h2HIcB9paL69eZ4Zr~75DfbaI6PXwMIPzTvcZ0~T9m~ooTFbpc8iUF5sQZ8MJ6qA2Mp6K0EA5lNR1pM~b3d0VJ6aGF2CWNTFY-XFY9bGpOQjXgJaJDxCTkfLyQk9Kg__";

const NoAvatars = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4 w-full h-full items-center justify-center p-10 text-white/50">
      <div className="relative h-72 w-72">
        <Image
          fill
          className="object-contain saturate-50 z-30"
          src={img}
          alt={"hello"}
        />
      </div>
      <p className="font-extrabold text-xl">No Avatars Available</p>
      <Link
        href={"/avatars/create"}
        className="w-full rounded-full py-2 flex gap-2 justify-center font-bold items-center bg-[#B9FA00] mb-6 text-black"
      >
        <Icon icon={"create"} size={"18"} />
        Create
      </Link>
    </div>
  );
};

export default NoAvatars;
