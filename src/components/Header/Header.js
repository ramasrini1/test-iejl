/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import HeaderLogo from "./HeaderLogo";
import { Link } from "gatsby";
import Search from "../../assets/search.svg";
import Social from "../Social/Social";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu); //hamburger menu toggle
  };

  const [showSearch, setSearch] = useState(false); // search bar toggle

  const searchRef = useRef(); // references to search bar.

  const handleSearchClick = () => {
    setSearch(!showSearch); // shows search bar
    setSearchValue(""); //clears search bar after closing
  };

  useEffect(() => {
    if (showSearch == true) {
      searchRef.current.focus(); // focuses on search bar when bar is active
    }
  });

  const handleCloseSearch = () => setSearch(false);

  const [searchValue, setSearchValue] = useState(""); // sets search input value

  const handleSearchInput = e => {
    e.preventDefault();
    setSearchValue(e.target.value); // handles search bar input
  };

  const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
      if (showSearch) {
        //only runs if search bar is visible
        // initiate the event handler
        window.addEventListener(event, handler, passive);

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
          window.removeEventListener(event, handler);
        };
      }
    });
  };

  useEvent("mousedown", handleCloseSearch); // closes search bar when clicked elsewhere

  return (
    <>
      <div className="lg:bg-format-background sm:bg-transparent sticky top-0 transform z-50 px-80">
        <div className="">
          <nav className="flex items-center justify-between">
            <div className="flex-none w-20 sm:w-auto">
              <HeaderLogo />
            </div>
            <div className="lg:flex items-center xl:space-x-16 sm:space-x-8 hidden h-12 pt-4">
              <Link
                to="/"
                className="text-format-text text-medium hover:text-format-primary no-underline uppercase tracking-wide"
                activeClassName="text-format-text text-medium font-bold no-underline uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-format-text text-medium hover:text-format-primary no-underline uppercase tracking-wide"
                activeClassName="text-format-text text-medium font-bold no-underline uppercase tracking-wide"
              >
                How It Works
              </Link>
              <Link
                to="/volunteer"
                className="text-format-text text-medium hover:text-format-primary no-underline uppercase tracking-wide"
                activeClassName="text-format-text text-medium font-bold no-underline uppercase tracking-wide"
              >
                Volunteer
              </Link>
              <Link
                to="/sponsors"
                className="text-format-text text-medium hover:text-format-primary no-underline uppercase tracking-wide"
                activeClassName="text-format-text text-medium font-bold no-underline uppercase tracking-wide"
              >
                Sponsors
              </Link>
              <Link
                to="/donate"
                className="text-format-text text-medium hover:text-format-primary no-underline uppercase tracking-wide"
                activeClassName="text-format-text text-medium font-bold no-underline uppercase tracking-wide"
              >
                Donate
              </Link>
              <div
                className={`"" + ${
                  showSearch
                    ? "hidden"
                    : "flex justify-center space-x-16 lg:w-40"
                }`}
              >
                <button>
                  <Search className="w-4 h-auto" onClick={handleSearchClick} />
                </button>
                <Link
                  to="/login"
                  className="bg-format-secondary text-semibold hover:bg-format-primary text-format-background no-underline uppercase py-2 px-4 tracking-wide"
                >
                  Login
                </Link>
              </div>
              <form className={`${showSearch ? "flex" : "hidden"}`}>
                <div className="bg-white-nav flex justify-center items-center space-x-1.5 lg:w-40 shadow appearance-none border rounded overflow-visible">
                  <Search className="w-4 h-auto" />
                  <input
                    ref={searchRef}
                    className="w-32 py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                    id="Search"
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchInput}
                  />
                </div>
              </form>
            </div>

            {/* Mobile Menu Start */}
            <div className="flex items-center justify-center lg:hidden">
              <button
                type="button"
                className="focus:outline-none"
                onClick={handleClick}
              >
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-current text-format-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className={`"nav-bars" + ${showMenu ? "flex" : "hidden"}`}>
                <div className="bg-format-background inset-0 h-full w-auto absolute overflow-visible">
                  <div className=" bg-format-background">
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={handleClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-8 top-8 h-8 w-8 text-format-secondary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div className="font-heading bg-white-background overflow-visible flex flex-col items-start justify-center space-y-11 pb-10 pl-5">
                      <div className="w-20">
                        <HeaderLogo />
                      </div>
                      <Link
                        to="/"
                        className="text-format-text text-3xl hover:text-yellow-500 no-underline"
                      >
                        Home
                      </Link>
                      <Link
                        to="/howItWorks"
                        className="text-format-text text-3xl hover:text-yellow-500 no-underline"
                      >
                        How It Works
                      </Link>
                      <Link
                        to="/blog"
                        className="text-format-text text-3xl  hover:text-yellow-500 no-underline"
                      >
                        Volunteer
                      </Link>
                      <Link
                        to="/blog"
                        className="text-format-text text-3xl hover:text-yellow-500 no-underline"
                      >
                        Sponsor
                      </Link>
                      <Link
                        to="/donate"
                        className="text-format-text text-3xl hover:text-yellow-500 no-underline"
                      >
                        Donate
                      </Link>
                      <Link
                        to="/login"
                        className="text-format-text text-3xl hover:text-yellow-500 no-underline"
                      >
                        Login
                      </Link>
                      <div className="bg-black-hakkei w-48 p-2 mt-5">
                        <Social />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu End */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
