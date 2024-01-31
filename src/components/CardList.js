import React from "react";
import { data } from "./DummyData";
import NftCard from "./NftCard";

const CardList = (props) => {
  const { receivedData } = props;
  return (
    <div className="m-4 flex flex-wrap justify-center items-center gap-7">
      {receivedData.length === 0 && (
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          No Results Found
        </p>
      )}
      {receivedData.map((item, ind) => (
        // <div>{item.token_name}</div>
        <NftCard nftData={item} key={ind} />
      ))}
    </div>
  );
};

export default CardList;
