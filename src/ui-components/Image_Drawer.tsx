import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface WallpaperItem {
  id: number;
  name: string;
  url: string;
  urls: string[];
}

interface ImageDrawerProps {
  setWallpaper: React.Dispatch<React.SetStateAction<string>>;
  item: WallpaperItem;
}

const Image_Drawer = ({ setWallpaper, item }: ImageDrawerProps) => {
    const [mainWallpaper, setMainWallpaper] = useState(item.url);

   
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer key={"right"} direction="right">
        <DrawerTrigger asChild>
          <div
            key={item.id}
            className="
                relative group cursor-pointer
                rounded-xl overflow-hidden bg-white
                "
          >
            <img
              src={mainWallpaper}
              alt={item.name}
              className="
                w-full h-24 object-cover
                transition-transform duration-300
                group-hover:scale-105
                "
            />

            <div
              className="
                absolute inset-0
                bg-black/0
                group-hover:bg-black/30
                transition duration-300
                "
            />

            <div className="p-2 bg-white">
              <p className="text-xs text-center font-medium text-black">
                {item.name}
              </p>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-screen max-w-md ml-auto bg-[#f3f3f3]">
          <DrawerHeader className="flex flex-row items-center gap-3 border-b pb-4">
            <DrawerClose asChild>
                <div className="flex gap-2 cursor-pointer hover:bg-gray-400/50 rounded-xl p-2 px-4" >
                    <div className="">
                        <ArrowLeft size={20} />
                    </div>
                    <p className="text-md font-semibold">{item.name}</p>
                    
                </div>
              
            </DrawerClose>

            <DrawerTitle >
              
            </DrawerTitle>
          </DrawerHeader>

          <div className="p-5 overflow-y-auto">
            <div className="grid grid-cols-3 gap-4">
              {item.urls.map((url, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setWallpaper(url);
                    setMainWallpaper(url)
                    
                  }}
                  className="
            cursor-pointer
            rounded-lg
            overflow-hidden
            shadow-sm
            bg-white
            hover:shadow-md
            transition
          "
                >
                  <img
                    src={url}
                    alt={`${item.name}-${index}`}
                    className="
              w-full
              aspect-square
              object-cover
              hover:scale-105
              transition-transform
              duration-300
            "
                  />
                </div>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Image_Drawer;
