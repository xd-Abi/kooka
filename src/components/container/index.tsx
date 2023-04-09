import React from "react";
import {Roboto} from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({subsets: ["latin"], weight: ["100", "700"]});

export default function Container({children}: Props) {
  return (
    <main className={`min-h-screen ${roboto.className} bg-background`}>
      {children}
    </main>
  );
}
