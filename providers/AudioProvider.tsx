"use client";

import React from "react";
import {usePathname} from "next/navigation";
import {AudioContextType, AudioProps} from "@/types";

const AudioContext = React.createContext<AudioContextType | undefined>(
  undefined,
);

function AudioProvider({children}: {children: React.ReactNode}) {
  const [audio, setAudio] = React.useState<AudioProps | undefined>();
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/podcast/create") {
      setAudio(undefined);
    }
  }, [pathname]);

  return (
    <AudioContext.Provider value={{audio, setAudio}}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = React.useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }

  return context;
}

export default AudioProvider;
