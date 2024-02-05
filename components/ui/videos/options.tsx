"use client";

import Icon from "@/components/icons";
import { cn } from "@/lib/functions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { startTransition } from "react";

const options = [
  { icon: <Icon icon="fitness" size={16} />, title: "Fitness" },
  { icon: <Icon icon="dance" size={16} />, title: "Dance" },
  { icon: <Icon icon="celebrity" size={16} />, title: "Celebrity" },
  { icon: <Icon icon="faceOff" size={16} />, title: "Faceoff" },
  { icon: <Icon icon="extra" size={16} />, title: "Extra" },
];

const Options = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams().get("option");

  const handleChangeSearchParam = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("option", value);
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="flex gap-2 h-max overflow-scroll px-6">
      {options.map((each: { icon: any; title: string }) => (
        <span
          key={each.title}
          onClick={() => handleChangeSearchParam(each.title)}
          className={cn(
            "rounded-full py-3 px-4 bg-[#2C313F] text-sm text-white font-bold cursor-pointer flex gap-2 items-center",
            searchParams === each.title && "bg-[#B9FA00] text-black"
          )}
        >
          {each.icon}
          {each.title}
        </span>
      ))}
    </div>
  );
};

export default Options;
