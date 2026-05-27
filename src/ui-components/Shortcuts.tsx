import data from "../data.json";
import Shortcut_card from "./Shortcut_card";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AddShortcut,
  RemoveShortcut,
  EditShortcut,
} from "@/services/ShortCut_Ops";
import Popup from "./Popup";

interface Shortcut_item {
  id: number;
  name: string;
  url: string;
  image: string | null;
}
const Shortcuts = () => {
  const [shortcuts, setShortcuts] = useState<Shortcut_item[]>(data);
  const [toggleADD, setToggle] = useState(false);
  const [toggleEDIT, setEditToggle] = useState(false);
  const [selectedShortcut, setSelectedShortcut] =
    useState<Shortcut_item | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("shortcuts");

    if (!stored) {
      localStorage.setItem("shortcuts", JSON.stringify(data));
    } else {
      setShortcuts(JSON.parse(stored));
    }
  }, []);

  const handleAdd = async (name: string, url: string, image: string) => {
    const New_shortcuts = await AddShortcut({
      name,
      url,
      image,
    });

    setShortcuts(New_shortcuts);

    setToggle(false);
  };
  const handleEdit = (id: number) => {
    const shortcut = shortcuts.find((item) => item.id === id);

    if (!shortcut) return;

    setSelectedShortcut(shortcut);

    setEditToggle(true);
  };

  const handleEditSave = async (name: string, url: string, image: string) => {
    if (!selectedShortcut) return;

    const updatedData: Partial<Omit<Shortcut_item, "id">> = {};

    if (name !== selectedShortcut.name) {
      updatedData.name = name;
    }

    if (url !== selectedShortcut.url) {
      updatedData.url = url;
    }

    if (image !== selectedShortcut.image) {
      updatedData.image = image;
    }

    const New_shortcuts = await EditShortcut(selectedShortcut.id, updatedData);

    setShortcuts(New_shortcuts);

    setEditToggle(false);

    setSelectedShortcut(null);
  };

  const handleRemove = async (id: number) => {
    const New_shortcuts = await RemoveShortcut(id);

    setShortcuts(New_shortcuts);
  };
  return (
    <>
      {toggleEDIT && selectedShortcut && (
        <Popup
          func="edit"
          onClose={() => setEditToggle(false)}
          onSave={handleEditSave}
          initialData={selectedShortcut}
        />
      )}

      {toggleADD && (
        <Popup func="add" onClose={() => setToggle(false)} onSave={handleAdd} />
      )}

      <div className="mt-10 flex justify-center px-4 ">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-7xl">
          {shortcuts.map((item) => (
            <Shortcut_card
              item={item}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          ))}

          {shortcuts.length < 8 && (
            <div>
              <div className="hover:scale-105 transition relative flex flex-col items-center gap-2 group">
                <div
                  className="
                absolute top-1 right-1 z-20
                opacity-0 group-hover:opacity-100
                transition
              "
                >
                  {" "}
                </div>

                <button
                  onClick={() => setToggle(true)}
                  className="
                w-20 h-20
                rounded-2xl
                bg-gray-200
                flex items-center justify-center cursor-pointer
                hover:bg-gray-300
                transition
    "
                >
                  <Plus size={20} />
                </button>

                <p className="text-white text-sm text-center">Add Shortcut</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shortcuts;
