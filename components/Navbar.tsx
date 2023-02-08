import AuthModal from "./Auth/AuthModal";

const Navbar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto xl:max-w-6xl bg-accent">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="text-primary self-center text-xl font-semibold whitespace-nowrap">
            Frontend Blog
          </span>
        </a>
        <div className="flex md:order-2">
          <AuthModal />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
