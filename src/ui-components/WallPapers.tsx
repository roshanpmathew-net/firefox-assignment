import { useEffect, useState } from "react";
import Toggle_Button from "./Toggle_Button";
import data from "../wallpapers.json";
import { Plus } from "lucide-react";

const WallPapers = () => {
  const [enabled, setEnabled] = useState(true);

  const [wallPaper, setWallpaper] = useState(
    localStorage.getItem("image_url") || "/images/Bg1.jpg",
  );

  useEffect(() => {
    localStorage.setItem("image_url", wallPaper);
  }, [wallPaper]);

  useEffect(() => {
    if (enabled) {
      document.body.style.setProperty("--wallpaper-url", `url(${wallPaper})`);
    } else {
      document.body.style.setProperty("--wallpaper-url", "none");

      document.body.style.backgroundColor = "white";
    }
  }, [enabled, wallPaper]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <Toggle_Button toggle={enabled} setToggle={setEnabled} />

        <span className="text-sm leading-none relative bottom-0.5 ">
          Wallpapers
        </span>
      </div>
      <div className="mt-4 px-5">
        <h1 className="text-sm font-medium mb-3">Choose Wallpaper</h1>

        <div className="grid grid-cols-3 gap-3">
          <label
            className="
                h-24 rounded-xl border-2 border-dashed
                border-zinc-400
                flex flex-col items-center justify-center
                cursor-pointer
                hover:bg-black/50
            "
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                const imageUrl = URL.createObjectURL(file);

                setWallpaper(imageUrl);
              }}
            />

            <Plus size={18} />

            <span className="text-xs mt-1">Upload</span>
          </label>

          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => setWallpaper(item.url)}
              className="
                relative group cursor-pointer
                rounded-xl overflow-hidden bg-white
                "
            >
              <img
                src={item.url}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallPapers;
