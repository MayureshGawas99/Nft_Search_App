import React, { useEffect, useState } from "react";
import { CovalentClient, Chains } from "@covalenthq/client-sdk";

const ModalBox = (props) => {
  const [nftNames, setNftNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedNftName, setSelectedNftName] = useState("eth-mainnet");
  const [contractAddress, setContractAddress] = useState("");
  const { toggleModal, handleNotification } = props;
  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = nftNames.filter((option) =>
      option.toLowerCase().includes(searchValue)
    );

    setFilteredOptions(filtered);
  };
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedNftName(value);
  };

  async function postData() {
    try {
      const requestOptions = {
        method: "GET",
        // redirect: "follow",
      };
      console.log(contractAddress, selectedNftName);

      const response = await fetch(
        `https://elastic-backend-acknoledger.onrender.com/addData?address=${contractAddress}&chainName=${selectedNftName}`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.text();
      console.log(result);
      toggleModal();
      if (result === "added successfully") {
        handleNotification("success");
      }
    } catch (error) {
      console.error("Error:", error);
      toggleModal();
      handleNotification("error");
    }
  }
  useEffect(() => {
    const ApiServices = async () => {
      try {
        const client = new CovalentClient("cqt_rQ799bMWQdJg9kxct6krH6qkpRFK"); // Replace with your Covalent API key.
        const response = await client.BaseService.getAllChains();
        const allChainObjects = response.data.items;
        let allChains = allChainObjects.map((obj) => obj.name);
        setNftNames(allChains);
        setFilteredOptions(allChains);
        console.log(allChains);
      } catch (error) {
        console.log(error);
      }
    };
    // Set a timer to update the debounced value after a short delay (e.g., 500 milliseconds)
    ApiServices();
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen">
      <div className="absolute bg-gray-800 opacity-75 inset-0"></div>

      <div className="relative p-4 w-full max-w-md">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add New NFT
            </h3>
            <button
              type="button"
              onClick={toggleModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form className="p-4 md:p-5">
            {/* Form content */}
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contract Address
                </label>
                <input
                  type="text"
                  name="name"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Chain Name
                </label>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                <select
                  id="category"
                  value={selectedNftName}
                  onChange={handleSelectChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {filteredOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={postData}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add NFT
            </button>
            {/* ... (your existing form content) */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
