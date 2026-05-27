import { useEffect } from "react";

interface PopupProps {
  func: string;
  onClose: () => void;
  onSave: (name: string, url: string, image: string) => void;
  initialData?:{
    name: string, url: string, image: string | null
  }
}

const Popup = ({ func, onClose, onSave, initialData }: PopupProps) => {
    useEffect(() => {

      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = "auto"
      }

    }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("title") as string;
    const url = formData.get("url") as string;
    const image = formData.get("image") as string;

    onSave(name, url, image);
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-white/10
        backdrop-blur-md
      "
    >
      <div
        className="
          w-[90%] max-w-md
          rounded-3xl
          bg-white
          p-6
          shadow-2xl
          border border-white/30
        "
      >
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {func.toUpperCase()} Shortcut
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <p className="mb-1 text-sm font-medium">Title</p>

            <input
              name="title"
              type="text"
              placeholder="Title"
              defaultValue={initialData?.name || ""}
              className="
                w-full
                border
                border-gray-300
                p-3
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-black/20
              "
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">URL</p>

            <input
              name="url"
              type="text"
              placeholder="URL"
              defaultValue={initialData?.url || ""}
              className="
                w-full
                border
                border-gray-300
                p-3
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-black/20
              "
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Image URL</p>

            <input
              name="image"
              type="text"
              placeholder="Image URL"
              defaultValue={initialData?.image || ""}
              className="
                w-full
                border
                border-gray-300
                p-3
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-black/20
              "
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="
                px-5 py-2.5
                rounded-xl
                bg-violet-500
                text-white
                hover:bg-gray-800
                transition
              "
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="
                px-5 py-2.5
                rounded-xl
                bg-gray-200
                hover:bg-gray-300
                transition
                cursor-pointer
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
