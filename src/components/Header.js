import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalBox from "./ModalBox";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    navigate("/");
    setInputValue(event.target.value);
  };

  const { setSearchQuery, searchType, setSearchType, handleNotification } =
    props;
  const changeType = (e) => {
    console.log(e.target.value);
    setInputValue("");
    setSearchType(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);

    // Clear the timer if the user types again within the delay
    return () => clearTimeout(timerId);
  }, [inputValue]);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 max-w-full">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NFTSearch
          </span>
        </Link>

        <div className="flex md:order-2 ">
          <div className="relative hidden md:flex md:gap-3 ">
            <div>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3 items-center mr-2">
              <div className="flex items-center justify-center h-full">
                <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    id="by Name "
                    checked={searchType === "by Name"}
                    value={"by Name"}
                    type="radio"
                    onClick={changeType}
                    name="by Name"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  by Name
                </label>
              </div>
              <div className="flex items-center justify-center h-full">
                <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    checked={searchType === "Other"}
                    id="Other"
                    value={"Other"}
                    type="radio"
                    onClick={changeType}
                    name="Other"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  Other
                </label>
              </div>
            </div>

            <div>
              {/* Modal toggle */}
              <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleModal}
              >
                Add NFT
              </button>
              {isModalOpen && (
                <ModalBox
                  toggleModal={toggleModal}
                  handleNotification={handleNotification}
                />
              )}
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            // aria-expanded="false"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            open ? "" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden flex gap-2 w-full justify-between items-center">
            <div className="w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-3 items-center w-full">
              <div className="flex items-center justify-center h-full">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    id="by Name 1"
                    checked={searchType === "by Name"}
                    value={"by Name"}
                    type="radio"
                    onClick={changeType}
                    name="by Name 1"
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  by Name
                </label>
              </div>
              <div className="flex items-center justify-center h-full ">
                <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  <input
                    checked={searchType === "Other"}
                    id="Other 2"
                    value={"Other"}
                    type="radio"
                    name="Other 2"
                    onClick={changeType}
                    className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="flex items-center justify-end h-full w-full">
              <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleModal}
              >
                Add NFT
              </button>
              {isModalOpen && <ModalBox toggleModal={toggleModal} />}
            </div>
          </div>
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
