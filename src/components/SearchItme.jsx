import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../assets/Data";
import Product from "./Product";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data);
    };
    filteredData();
  }, [term]);

  return (
    <div>
      <Product items={filterData} />
    </div>
  );
};

export default SearchItem;
