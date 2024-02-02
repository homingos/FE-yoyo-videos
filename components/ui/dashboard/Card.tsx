import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

const content = [
  "https://s3-alpha-sig.figma.com/img/db79/e05d/61f120adc195e72e9d0b77361fd20110?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuPoFFSS~koVhhukii4jE5U778w1Zz33OvhmmgDLlMAgzVbRi8d8HRp35MQgTT17W0m9L3xCS0cejlDz7OE3JjeQIr2RPhU9v2DxgwQ0jb0CQUSO3MfLotBWL7xHAzPC9sBCMKyMSvJDk9LA9PThl9CBy0CLFZvyByGHl9fc5Uqt9lrBOGeHiCIcssLRl0xqA5WXMR7tcTY72nH1E7~IM4Gu1hAAQ7~OhBFNpwtG8rbanr0Se1XwmS14gG~85TPlA0Es9bU-9pubBLD-UZ6bwhPscWh4vGBJn0tK4CLjMeWIHp336HfDvirZKt0ZAFPogc77JfdbpeFUmW6jQyRaew__",
  "https://s3-alpha-sig.figma.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__",
  "https://s3-alpha-sig.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__",
  "https://s3-alpha-sig.com/img/5cdb/258d/a1445d396bd1ac3aee34f78f2d34b831?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtfdafQzcZngmVmx0UN3W9GcuSTx8AkDMixt01hjvzKYGQ-Hcel9FPcwrS4QNM39kva024tuChLHEtUW2OwW0nyn1ov4f-66MO11ShKlir9-xuVMngoSwOVoS2Xs6QRGIDXfcc0PGBGj1hiGEjZhApL7OizcqRKPPuerETJihMpuMlBdsiGEflFCqU2TuZhCK73ukegetVWVie6ryfZR88hxQPCtrbqTM2ZmGgR4hWe7TODRUFkHMdnIz5-MI~NWmBkqS7GAoMaX2XW7vLIv9wAGLrVeOi9rmLwvUWIuGXWdefKEFG8~oyQIyjzWVjDNDkevjixz~L-5iyxRQk2edw__",
  "https://s3-alpha-sig.figma.com/img/76cb/033b/5dda50f0e12f72007e5db309f57a9971?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HioVmRHcwMBLPNV1RpjDHTBoOJ2rtyPeV7Z0Autu4GtoI1l1xWDBOhDivDX0hzKCL2ap458-qYkLsp53vNx9w~xXzO8pa4tLnrdmGTYLhWdp-bh5fbkd1j7XiCv0fbKKwhU26JomJaLy47Cw78ES--9SFgRNq7dxuB6kuUjTGmSpKcLki-h7Ed9-NZtBzhfQteeTe6WYvKjGcYMC3eHFb5zpEnOUu7T7OnEWL9kkEWJvuFGwE7Ui3urAunWitj85rjo5h0IxpR3og4Wq1-2PjosKmw3s2EeYnxdr-Dd~6UwM3GvJBy30MGAGihgBXrBRAJPxr~3AnNBAtG-wQlAQIg__",
];

const Card = ({ avatarData }: any) => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [urlFetching, setUrlFetching] = useState<boolean>(true);

  const checkImageExists = async (urlString: string) => {
    await fetch(urlString)
      .then((res: any) => setUrl(urlString))
      .catch((err: any) => setUrl(""));
    setUrlFetching(false);
  };

  useEffect(() => {
    const index = Math.floor(Math.random() * content.length);
    checkImageExists(content[index]);
  }, [avatarData]);

  return (
    <div
      className={cn(
        "relative inline-flex rounded-2xl overflow-hidden w-full h-72 p-[2px] bg-[#0a0a0a]"
      )}
    >
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-yellow-500",
          url
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            : "bg-yellow-500 opacity-30 animate-pulse"
        )}
      />
      <div className="relative inline-flex items-center justify-center rounded-2xl overflow-hidden h-full w-full bg-[#0a0a0a]">
        {!urlFetching && url !== "" && (
          <Image
            src={url}
            alt="card"
            className={cn(
              "object-cover h-full w-full duration-300 ease-in-out"
            )}
            fill
          />
        )}
        {!url && <p className="text-white">loading...</p>}
      </div>
      {url && (
        <div className="absolute z-20 bg-gradient-to-b from-transparent via-black/80 to-black/60 h-24 w-full bottom-0 left-0"></div>
      )}
    </div>
  );
};

export default Card;
