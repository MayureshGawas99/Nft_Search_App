import React from "react";
import CardList from "./CardList";

const Result = (props) => {
  const { receivedData } = props;
  return (
    <div className="m-4">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Results:
        </span>
      </h1>
      <CardList receivedData={receivedData} />
    </div>
  );
};

export default Result;
