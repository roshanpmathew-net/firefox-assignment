import { Pin } from "lucide-react";
import DropDown from "./DropDown";

interface ShortcutItem {
  id: number;
  name: string;
  url: string;
  pinned: boolean;
  image: string | null;
}

interface ShortcutCardProps {
  item: ShortcutItem;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
  onPintoggle: (id: number) => void;
}

const Shortcut_card = ({ item, onRemove, onEdit, onPintoggle }: ShortcutCardProps) => {
  return (
    <div className="hover:scale-105 transition relative flex flex-col items-center gap-2 group">
      <div
        className="
          absolute top-1 right-1 z-20
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <DropDown
          item={item}
          onRemove={() => onRemove(item.id)}
          onEdit={() => onEdit(item.id)}
          onPintoggle={() => onPintoggle(item.id)}
        />
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="
    relative
    w-20 h-20
    rounded-2xl
    bg-gray-200
    flex items-center justify-center
    hover:bg-gray-300
    transition
  "
      >
        {item.pinned && <Pin size={12} className="opacity-0 group-hover:opacity-100 absolute top-2 left-2 transition" />}
        <img
          className="w-10 h-10 object-contain"
          src={item.image || ""}
          alt={item.name}
        />
      </a>

      <p className="text-white text-sm text-center">{item.name}</p>
    </div>
  );
};

export default Shortcut_card;
