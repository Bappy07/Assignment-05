import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    // Navbar from daisy ui ==============
    <div className="navbar container mx-auto text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#explore">Technologies</a>
            </li>

            <li>
              <a href="#stack">Projects</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

          <a href="#home" className="btn btn-ghost p-1">
            <img
              src={logo}
              alt="Tech Stack Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-[#DB2777]">
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#explore">Technologies</a>
          </li>

          <li>
            <a href="#stack">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
        <div className="navbar-end">
          <a
            href="#explore"
            className="btn btn-dash rounded-4xl border-0 text-black"
          >
            Sign In
          </a>
          <a
            href="#explore"
            className="btn rounded-4xl border-none bg-[#DB2777]"
          >
            Sign Up
          </a>
        </div>
    </div>
  );
};
export default Navbar;