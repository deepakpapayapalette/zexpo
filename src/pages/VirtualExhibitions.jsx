import React, { useState } from 'react'
import Banner from '../components/common/Banner'
import ExCard from '../components/UI/ExCard'
import { exhibitionsData } from '../data/LocalData'
import { FaSearch } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";

const bannerContent = {
  // image: bannerImage,
  title: "Virtual",
  title2: "Exhibitions",
  description: ""
}

const VirtualExhibitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  // Filter and Sort Logic
  const filteredData = exhibitionsData
    .filter((item) => {
      if (!item.title) return false;
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (sortAscending) {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      } else {
        return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
      }
    });

  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <>
      <Banner data={bannerContent} />
      <div className='container space-top '>

        {/* Search and Sort Control Bar */}

        <div className="flex gap-4 mb-8 ">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-0 transition duration-150 ease-in-out"
              placeholder="Search Exhibitions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={toggleSort}
            className="bg-[#0b5ed7] hover:bg-blue-700 text-white rounded-md px-4 py-2 flex items-center justify-center transition-colors"
            title={sortAscending ? "Sort Descending" : "Sort Ascending"}
          >
            <BiSortAlt2 className="text-2xl" />
          </button>
        </div>

        <div className='card-listing grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2'>
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <div
                key={item.id || idx}
                className=''
              >
                <ExCard item={item} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No exhibitions found matching your search.
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default VirtualExhibitions

