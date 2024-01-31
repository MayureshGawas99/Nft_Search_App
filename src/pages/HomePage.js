import React from "react";
import Result from "../components/Result";

const HomePage = (props) => {
  const { receivedData, loading } = props;
  return (
    <div>
      <Result receivedData={receivedData} loading={loading} />
    </div>
  );
};

export default HomePage;
