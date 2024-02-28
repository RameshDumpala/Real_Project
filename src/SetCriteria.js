import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Mock from "./Mock.json"

const SetCriteria = ({ items, setItems }) => {
  const [searchInput, setSearchInput] = useState();
  const [clearSearch, setClearSearch] = useState(false);
 

  const handleCheckAll = (e) => {
    const isActive = e.target.checked;
    const allchecked = items.map((item) => ({ ...item, isActive }));
    setItems(allchecked);
  };

  const handleChange = (index, newValue) => {
    const newData = [...items];
    newData[index].value = newValue;
    setItems(newData);
  };

  const filterChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filterBySearch = items.filter((item) =>
      item.name.toLowerCase().includes(searchInput)
    );
    setItems(filterBySearch);
    setClearSearch(true)
  };
  const handleclear = () => {
    setSearchInput(" ")
    setClearSearch(false)
    setItems(Mock)
  
   
  }

  const handleCheckboxChange = (id) => {
    setItems(
      items.map((item) => {
        if (item._id === id) {
          return {
            ...item,
            isActive: !item.isActive,
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = () => {
    console.log(items, "items");
  };
  return (
    <div>
      <div className="header_div">
        <div>
          <input type="checkbox" onChange={handleCheckAll} />
          <label>Check All</label>
        </div>

        <div className="search_div">
          <input
            type="text"
            onChange={filterChange}
            placeholder="Search table name"
            className="search_input"
            value={searchInput}

          />
          <span className="icon">
            <CiSearch />
          </span>

          {clearSearch ? (
            <button className="search_btn" onClick={handleclear}>ClearSearch</button>
          ) : (
            <button className="search_btn" disabled={!searchInput} onClick={handleSearch}>
              Search
            </button>
          )}
        </div>
      </div>

      <div className="grid-container ">
        {items.map((item, index) => (
          <div className="grid-item ">
            <div>
              <input
                type="checkbox"
                id={item._id}
                checked={item.isActive}
                onChange={() => handleCheckboxChange(item._id)}
              />
              <span className="item_name">{item.name}</span>
            </div>
            <textarea
              value={item.value}
              onChange={(e) => handleChange(index, e.target.value)}
              disabled={!item.isActive}
              className={!item.isActive ? "Active" : ""}
            ></textarea>
          </div>
        ))}
      </div>
      <button className="submit_btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SetCriteria;
