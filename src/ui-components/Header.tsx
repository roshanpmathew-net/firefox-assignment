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
    <div className="flex items-center justify-between px-3 sm:px-5 md:px-8 py-3">
      <div className="pr-10 mb-10  md:mb-0  flex items-center gap-3">
        <img
          className="h-15 w-15 lg:h-10 lg:w-10 md:h-8 md:w-8"
          src="images/Logo.png"
          alt="Firefox-Logo"
        />

        <h1 className=" hidden  md:flex font-semibold  text-white tracking-wide text-6xl lg:text-4xl">
          Firefox
        </h1>
      </div>

      <div className="flex-1 flex mt-8 justify-center md:justify-end lg:justify-center">
        <div className="mt-8 lg:mr-40 flex items-center gap-2 rounded-full bg-white px-3 py-2 w-full sm:max-w-xs md:max-w-xl lg:max-w-3xl">
          <a href="https://www.google.com/">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="images/google.png"
              alt="google"
            />
          </a>

          <form onSubmit={onSubmit} className="w-full">
            <Input
              type="text"
              name="search"
              placeholder="Search with Google or enter address"
              className="
  w-full
  bg-white! 
  text-black! 
  border-white! 
  placeholder:text-gray-400! 
  rounded-full!
  focus-visible:ring-0
  focus-visible:outline-none
  focus-visible:border-transparent
"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
