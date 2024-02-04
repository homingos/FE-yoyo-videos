import Spinner from "@/components/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="text-white/50 flex w-full h-full items-center justify-center text-2xl z-50 font-bold gap-2">
      <Spinner spinnerClassName="text-primary" />
    </div>
  );
};

export default Loading;
