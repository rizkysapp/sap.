"use client";

import { useEffect, useState } from "react";
import { usePreloadState } from "@/context/PreloadContext";

export const useLouded = () => {
  const preload = usePreloadState();

  // console.log({ preload });

  const [isLouded, setIsLouded] = useState<Boolean>(false);

  useEffect(() => {
    if (preload) {
      setIsLouded(true);
    } else {
      setTimeout(() => {
        setIsLouded(true);
      }, 200);
    }
  }, [preload]);

  return isLouded;
};
