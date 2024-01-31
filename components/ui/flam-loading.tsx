import React from 'react'
import * as animationData from "@/lib/loader.json";
import Lottie from "react-lottie";

const FlamLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return <Lottie isClickToPauseDisabled={true} options={defaultOptions} />;
}

export default FlamLoading