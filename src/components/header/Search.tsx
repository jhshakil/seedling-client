"use client";

import { useState } from "react";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/product.type";
import { Link } from "react-router-dom";

const Search = () => {
  const [timeOutValue, setTimeOutValue] = useState<NodeJS.Timeout>();
  const [searchValue, setSearchValue] = useState<string>("none");

  const sampleData = async (searchData: string) => {
    if (timeOutValue) {
      clearTimeout(timeOutValue);
    }
    const timeValue = setTimeout(async () => {
      if (searchData) {
        setSearchValue(searchData);
      } else {
        setSearchValue("none");
      }
    }, 500);

    setTimeOutValue(timeValue);
  };

  console.log(searchValue);
  const { data } = useGetProductsQuery({
    searchTerm: searchValue,
  });

  return (
    <div>
      <div className="max-w-md mx-auto relative">
        <div className="relative">
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
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Product and Category"
            required
            onChange={(e) => sampleData(e.target.value)}
          />
        </div>
        <div>
          {searchValue && data && data.data && data.data.length ? (
            <div className="absolute top-14 bg-white left-0 border border-border rounded-lg w-full py-2 px-4 flex flex-col gap-2">
              {data.data.map((item: TProduct) => (
                <div key={item._id}>
                  <Link
                    to={`/product/${item._id}`}
                    onClick={() => sampleData("")}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
