import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import WallPapers from "./WallPapers";
import { X } from "lucide-react";
import Toggle_Button from "./Toggle_Button";
import { useEffect, useState } from "react";
import Shortcut_Count from "./Shortcut_Count";

const DRAWER_SIDES = ["right"] as const;

interface DrawerProps{
  setCount: React.Dispatch<React.SetStateAction<number>>;

}

export function CustomizeDrawer({setCount}: DrawerProps) {
  const [ToggleShortCuts, SetShortcuts] = useState(true);
  const [ToggleRec, SetRec] = useState(true);

  useEffect(() => {
    const newsGrid = document.getElementById("news-grid");

    if (!newsGrid) return;

    if (!ToggleRec) {
      newsGrid.style.display = "none";
    } else {
      newsGrid.style.display = "flex";
    }
  }, [ToggleRec]);
  useEffect(() => {
    const Shortcut_bar = document.getElementById("shortcuts-bar");

    if (!Shortcut_bar) return;

    if (!ToggleShortCuts) {
      Shortcut_bar.style.display = "none";
    } else {
      Shortcut_bar.style.display = "flex";
    }
  }, [ToggleShortCuts]);


  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer key={side} direction={side}>
          <DrawerTrigger asChild>
            <Button className="bg-transparent hover:bg-transparent cursor-pointer">
              Customize
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader className="w-full flex items-end">
              <DrawerClose asChild>
                <Button className="bg-transparent cursor-pointer hover:bg-transparent!">
                  <X className="text-black w-6! h-6! " />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="flex flex-col gap-4">
              <div className="border-b border-gray-700/50 pb-5">
              <WallPapers />
            </div>
              <div>
              <div className="flex flex-col gap-2 border-b border-gray-700/50 pb-7 pt-3  ">
              <div className="flex items-center gap-2">
                  <Toggle_Button
                  toggle={ToggleShortCuts}
                  setToggle={SetShortcuts}
                />

                <span className="text-sm leading-none relative bottom-0.5 ">
                  ShortCuts
                </span>
              </div>
                
                <div className=" flex  justify-center gap-30 items-center">
                  <p className="ml-3 font-light text-[11px]">Number of Rows</p>
                  <Shortcut_Count setCount={setCount} />
                </div>
              </div>
              <div>

              </div>
              </div>
              
              <div className="flex items-center gap-2 pt-5">
                <Toggle_Button toggle={ToggleRec} setToggle={SetRec} />

                <span className="text-sm leading-none relative bottom-0.5 ">
                  Recommended stories
                </span>
              </div>
            </div>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
