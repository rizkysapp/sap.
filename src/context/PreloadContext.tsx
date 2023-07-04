"use client";

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

const PreloadContext = createContext<boolean>(false);

export const PreloadProvider = ({ children }: { children: ReactNode }) => {
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
      // console.log({ isPreloaded });
    }, 100);
  }, []);

  return (
    <PreloadContext.Provider value={isPreloaded}>
      <div className="text-red-900"></div>
      {children}
    </PreloadContext.Provider>
  );
};

export const usePreloadState = () => useContext(PreloadContext);
