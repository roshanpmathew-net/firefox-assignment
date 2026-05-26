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

  
  <div className="hidden md:flex items-center gap-3">
    <img
      className="h-8 w-8 lg:h-10 lg:w-10"
      src="images/Logo.png"
      alt="Firefox-Logo"
    />

    <h1 className="text-white font-semibold tracking-wide text-xl lg:text-2xl">
      Firefox
    </h1>
  </div>

  <div className="flex-1 flex mt-8 justify-center md:justify-end lg:justify-center">

    <div className="flex items-center gap-2 rounded-xl bg-gray-700 px-3 py-2 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">

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
          placeholder="Search"
          className="w-full bg-gray-700! text-white! border-gray-700! placeholder:text-gray-400!"
        />

      </form>

    </div>

  </div>

</div>
  );
};

export default Header;