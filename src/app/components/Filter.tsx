import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <label htmlFor="type-select" className="sr-only">
          Type
        </label>
        <select
          name="type"
          id="type-select"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          //onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          // onChange={handleFilterChange}
        />

        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          //onChange={handleFilterChange}
        />

        {/* TODO: Filter Categories */}
        <label htmlFor="cat-select" className="sr-only">
          Category
        </label>
        <select
          name="cat"
          id="cat-select"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          //  onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="new-arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>

        <label htmlFor="all-filters-select" className="sr-only">
          All Filters
        </label>
        <select
          name="all-filters"
          id="all-filters-select"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="sort-select" className="sr-only">
          Sort By
        </label>
        <select
          name="sort"
          id="sort-select"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          // onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc-price">Price (low to high)</option>
          <option value="desc-price">Price (high to low)</option>
          <option value="asc-lastUpdated">Newest</option>
          <option value="desc-lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
