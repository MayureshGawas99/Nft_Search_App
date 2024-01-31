import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const NftPage = (props) => {
  const { receivedData } = props;
  const { nftName } = useParams();
  const [selectedNft, setSelectedNft] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const filteredObject = receivedData.filter(
      (obj) => obj._source.token_name === nftName
    )[0];
    if (!filteredObject) {
      navigate("/");
    }
    setSelectedNft(filteredObject);
    console.log(filteredObject);
  }, []);

  return (
    <div className="w-100 m-4">
      {selectedNft && (
        <>
          <div className="w-100 my-4">
            <div className="w-100 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover rounded-lg h-96 md:h-auto md:w-64  md:rounded-lg"
                src={selectedNft?._source?.imageURL}
                alt="Nft Image"
                onError={(e) => {
                  e.target.src =
                    "https://ipfs.nftstars.app/ipfs/QmcWc9k7JGQuRoKGKBzUqhqD8mWv1oafApN4YV1HLcW1GN";
                }}
              />
              <div className="flex flex-col justify-between p-4 leading-normal flex-grow ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {selectedNft?._source.token_name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {selectedNft?._source.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Contract Address: </span>
                  {selectedNft?._source.contract_address}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Creator: </span>
                  {selectedNft?._source.creator}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Organization Name: </span>
                  {selectedNft?._source.orgName}
                </p>
                <div className="flex gap-3 justify-end">
                  {selectedNft?._source.social.discord && (
                    <Link to={selectedNft?._source.social.discord}>
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                      </svg>
                    </Link>
                  )}
                  {selectedNft?._source.social.twitter && (
                    <Link to={selectedNft?._source.social.twitter}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </Link>
                  )}
                  {selectedNft?._source.social.website && (
                    <Link to={selectedNft?._source.social.website}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto my-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Trait Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedNft?._source.properties.length === 0 && (
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    No Properties Found
                  </p>
                )}
                {selectedNft?._source.properties.map((property) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {property?.trait_type}
                    </th>
                    <td className="px-6 py-4">
                      {property.description || "No description"}
                    </td>
                    <td className="px-6 py-4">{property.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default NftPage;
