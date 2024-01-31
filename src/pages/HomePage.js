import React from "react";
import Result from "../components/Result";

const HomePage = (props) => {
  const { receivedData } = props;
  return (
    <div>
      <Result receivedData={receivedData} />
    </div>
  );
};

export default HomePage;
