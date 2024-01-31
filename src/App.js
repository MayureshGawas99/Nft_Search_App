import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import NftCard from "./components/NftCard";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NftPage from "./pages/NftPage";
import AddNftPage from "./pages/AddNftPage";
import Notification from "./components/Notification";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [receivedData, setReceivedData] = useState([]);
  const [searchType, setSearchType] = useState("by Name");
  const [showNotification, setShowNotification] = useState(null);
  const handleNotification = (type) => {
    setShowNotification(type);

    // Set a timer to reset the state to false after 3 seconds
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  };

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        if (searchQuery) {
          if (searchType === "by Name") {
            const response = await fetch(
              `https://elastic-backend-acknoledger.onrender.com/getData?nftName=${searchQuery}`,
              requestOptions
            );
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result?.hits?.hits);
            setReceivedData(result?.hits?.hits);
          } else {
            const response = await fetch(
              `https://elastic-backend-acknoledger.onrender.com/getData?other=${searchQuery}`,
              requestOptions
            );
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result?.hits?.hits);
            setReceivedData(result?.hits?.hits);
          }
        } else {
          setReceivedData([]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // Call the async function
    fetchData();
  }, [searchQuery]);
  return (
    <div className="App w-full">
      <Header
        setSearchQuery={setSearchQuery}
        setSearchType={setSearchType}
        searchType={searchType}
        handleNotification={handleNotification}
      />
      {showNotification && <Notification type={showNotification} />}

      <Routes>
        <Route path="/" element={<HomePage receivedData={receivedData} />} />
        <Route path="/addnft" element={<AddNftPage />} />
        <Route
          path="/nft/:nftName"
          element={<NftPage receivedData={receivedData} />}
        />
      </Routes>
      {/* <NftCard /> */}
      {/* {searchQuery} */}
      {/* {JSON.stringify(receivedData, null, 2)} */}
    </div>
  );
}

export default App;
