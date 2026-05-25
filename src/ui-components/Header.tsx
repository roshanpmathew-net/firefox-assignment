import { Input } from "@/components/ui/input";

const Header = () => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("search");

    if (value) {
      window.location.href = `https://www.google.com/search?q=${value}`;
    }
  };

  return (
    <div className="flex items-center justify-between mt-0 px-1 pt-2">

      <div className="hidden md:flex items-center gap-3 relative left-5">
        <img className="h-10 w-10" src="images/Logo.png" alt="Firefox-Logo" />

        <h1 className="text-white font-semibold tracking-wide text-2xl">
          Firefox
        </h1>
      </div>

      <div className="w-full flex justify-center lg:justify-center md:justify-start sm:justify-start pt-9 px-4">

        <div className="flex mr-28 items-center gap-2 rounded-md bg-gray-700 px-3 py-1 w-full max-w-155">

          <a href="https://www.google.com/">
            <img className="w-6 h-6" src="images/google.png" alt="google" />
          </a>

          <form onSubmit={onSubmit} className="w-full">

            <Input
              type="text"
              name="search"
              placeholder="Search"
              className="flex-1 bg-gray-700! text-white! border-gray-700! placeholder:text-gray-400!"
            />

          </form>

        </div>

      </div>

    </div>
  );
};

export default Header;