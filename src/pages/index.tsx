import React from "react";
import {
  Container,
  Head,
  MagnifyingGlassIcon,
  SettingsIcon,
} from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="Kooka | Realtime Chat"
        description="A realtime chat system"
      />
      <main className={`h-screen flex flex-row ${roboto.className}`}>
        <div className="w-screen md:basis-2/5 xl:basis-1/5 bg-white md:border-r md:border-vivid p-2">
          <div className="h-20 border-b p-3 flex items-center border-vivid">
            <div className="w-14 h-14 rounded-full border border-vivid bg-indigo-700"></div>
            <div>
              <p className="text-sm ml-2 text-vivid font-bold">You</p>
              <p className="text-sm ml-2 text-dim font-normal">Hey there! 👋</p>
            </div>
            <div className="flex flex-1 justify-end">
              <SettingsIcon className="stroke-dim hover:stroke-vivid transition-all" />
            </div>
          </div>
          <div className="h-12 mt-5 bg-accent rounded-xl items-center flex p-3">
            <MagnifyingGlassIcon className="stroke-dim" />
            <input
              className="focus:outline-none flex flex-1 ml-2 bg-transparent text-dim"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="hidden md:basis-3/5 md:block xl:basis-3/5 bg-white p-2">
          <div className="h-20 border-b p-3 flex items-center border-vivid">
            <div className="w-14 h-14 rounded-full border border-vivid bg-indigo-700"></div>
            <div className="font-semibold text-vivid text-lg ml-2">Niklas</div>
          </div>
        </div>
        <div className="hidden xl:basis-1/5 xl:block bg-white border-l border-vivid p-2"></div>
      </main>
    </React.Fragment>
  );
}
