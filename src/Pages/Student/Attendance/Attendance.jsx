import React, { useState, useEffect } from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import { FiUserPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Attendance = () => {
  const initialConnectionData = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Software Engineer",
      connections: 500,
      itemsSold: 350,
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Data Scientist",
      connections: 700,
      itemsSold: 420,
    },
    {
      id: 3,
      name: "Alex Johnson",
      occupation: "UX Designer",
      connections: 300,
      itemsSold: 250,
    },
    // Add 6 more connections
    {
      id: 4,
      name: "Michael Brown",
      occupation: "Frontend Developer",
      connections: 400,
      itemsSold: 300,
    },
    {
      id: 5,
      name: "Emily Wilson",
      occupation: "Marketing Manager",
      connections: 600,
      itemsSold: 380,
    },
    {
      id: 6,
      name: "David Lee",
      occupation: "Project Manager",
      connections: 250,
      itemsSold: 180,
    },
    {
      id: 7,
      name: "Sophia Clark",
      occupation: "UI/UX Designer",
      connections: 450,
      itemsSold: 320,
    },
    {
      id: 8,
      name: "Matthew Taylor",
      occupation: "Backend Developer",
      connections: 550,
      itemsSold: 400,
    },
    {
      id: 9,
      name: "Emma Martinez",
      occupation: "Product Manager",
      connections: 350,
      itemsSold: 270,
    },
  ];

  const [connectionData, setConnectionData] = useState(initialConnectionData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [isDescending, setIsDescending] = useState(false);

  useEffect(() => {
    // Filter connections based on search query
    const filtered = connectionData.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Sort connections based on sorting criteria
    const sorted = sortConnections(filtered, sortBy, isDescending);
    setFilteredConnections(sorted);
  }, [searchQuery, connectionData, sortBy, isDescending]);

  const sortConnections = (data, sortBy, isDescending) => {
    let sortedData = [...data];
    if (sortBy) {
      sortedData.sort((a, b) => {
        if (sortBy === "name") {
          // Sort by name
          if (a[sortBy] < b[sortBy]) return isDescending ? 1 : -1;
          if (a[sortBy] > b[sortBy]) return isDescending ? -1 : 1;
        } else if (sortBy === "recentlyAdded") {
          // Sort by ID (recently added)
          if (a.id < b.id) return isDescending ? 1 : -1;
          if (a.id > b.id) return isDescending ? -1 : 1;
        } else if (sortBy === "firstName") {
          // Sort by first name
          const firstNameA = a.name.split(" ")[0];
          const firstNameB = b.name.split(" ")[0];
          if (firstNameA < firstNameB) return isDescending ? 1 : -1;
          if (firstNameA > firstNameB) return isDescending ? -1 : 1;
        } else if (sortBy === "lastName") {
          // Sort by last name
          const lastNameA = a.name.split(" ")[1];
          const lastNameB = b.name.split(" ")[1];
          if (lastNameA < lastNameB) return isDescending ? 1 : -1;
          if (lastNameA > lastNameB) return isDescending ? -1 : 1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  const handleSortChange = (sortBy) => {
    if (sortBy === sortBy) {
      setIsDescending(!isDescending);
    } else {
      setSortBy(sortBy);
      setIsDescending(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Network</h1>
        {/* Search bar */}
        <div className="mb-4 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Sort options */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <span className="mr-2">Sort By:</span>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  {sortBy || "Select"}
                  <IoMdArrowDropdown className="-mr-1 ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="opacity-0 invisible transition-all duration-300 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("name")}
                  >
                    Name
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("connections")}
                  >
                    Connections
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("itemsSold")}
                  >
                    Items Sold
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("recentlyAdded")}
                  >
                    Recently Added
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("firstName")}
                  >
                    First Name
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => handleSortChange("lastName")}
                  >
                    Last Name
                  </button>
                </div>
              </div>
            </div>
            {sortBy && (
              <button
                type="button"
                className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsDescending(!isDescending)}
              >
                {isDescending ? "Descending" : "Ascending"}
              </button>
            )}
          </div>
        </div>
        {/* Display connections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConnections.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg overflow-hidden shadow-md p-6 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center mr-4 text-white font-bold`}
                >
                  {/* Display profile picture here */}
                  {person.name[0]}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                  <p className="text-gray-600">{person.occupation}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-gray-600">
                    Connections: {person.connections}
                  </p>
                  <p className="text-gray-600">
                    Items Sold: {person.itemsSold}
                  </p>
                </div>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                    <div
                      style={{
                        width: `${(person.itemsSold / person.connections) * 100}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                  </div>
                </div>
              </div>
              <button className="flex items-center text-blue-500 mt-2">
                <FiUserPlus className="mr-1" />
                Message
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Attendance;
