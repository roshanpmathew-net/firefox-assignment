import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const values = ["1", "2", "3", "4"];

interface SelectProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Shortcut_Count = ({ setCount }: SelectProps) => {
  const [value, setValue] = useState<number>(() => {
    return Number(localStorage.getItem("shortcutRows")) || 1;
  });

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("shortcutRows", value.toString());
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-16 h-8
          rounded-full
          border border-violet-500
          bg-violet-100
          flex items-center justify-center gap-1
          cursor-pointer
        "
      >
        <span>{value}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div
          className="
            absolute top-12 left-0
            w-16
            bg-white
            rounded-xl
            shadow-lg
            border
            overflow-hidden
            z-50
          "
        >
          {values.map((val) => (
            <button
              key={val}
              onClick={() => {
                const numValue = Number(val);

                setValue(numValue);
                setCount(numValue);
                setOpen(false);
              }}
              className="
                w-full
                py-2
                text-center
                hover:bg-gray-100
                transition
              "
            >
              {val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shortcut_Count;