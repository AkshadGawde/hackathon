import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import { FiUserPlus } from "react-icons/fi";

const Attendance = () => {
  const navigate = useNavigate(); // Initializing the navigate function

  const initialConnectionData = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Grocery Store",
      connections: 500,
      itemsSold: 350,
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Grocery Store",
      connections: 700,
      itemsSold: 420,
    },
    {
      id: 3,
      name: "Alex Johnson",
      occupation: "Grocery Store",
      connections: 300,
      itemsSold: 250,
    },
    {
      id: 4,
      name: "John Doe",
      occupation: "Grocery Store",
      connections: 500,
      itemsSold: 350,
    },
    {
      id: 5,
      name: "Jane Smith",
      occupation: "Supper Mart",
      connections: 700,
      itemsSold: 420,
    },
    {
      id: 6,
      name: "Alex Johnson",
      occupation: "Supper Mart",
      connections: 300,
      itemsSold: 250,
    },
    // Add more connections
  ];

  const [filteredConnections, setFilteredConnections] = useState(
    initialConnectionData
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState({});

  useEffect(() => {
    // Filter connections based on search query
    const filtered = initialConnectionData.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredConnections(filtered);
  }, [searchQuery]);

  const addDelivery = (id) => {
    setDeliveryStatus({ ...deliveryStatus, [id]: "inProgress" });
  };

  const completeDelivery = (id) => {
    setDeliveryStatus({ ...deliveryStatus, [id]: "completed" });
    navigate("/feedback"); // Navigating to the "/feedback" route
  };

  const abortDelivery = (id) => {
    setDeliveryStatus({ ...deliveryStatus, [id]: "aborted" });
    navigate("/feedback"); // Navigating to the "/feedback" route
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
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-black dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Display connections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConnections.map((person) => (
            <div
              key={person.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md p-6 flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center mr-4 text-white font-bold`}
                >
                  {/* Display profile picture here */}
                  {person.name[0]}
                </div>
                <div>
                  <h2 className="text-lg text-blue-500 font-semibold">{person.name}</h2>
                  <p className="text-white-600">{person.occupation}</p>
                </div>
              </div>  
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-white-600">
                    Connections: {person.connections}
                  </p>
                  <p className="text-white-600">
                    Items Sold: {person.itemsSold}
                  </p>
                </div>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                    <div
                      style={{
                        width: `${(person.itemsSold / person.connections) * 100}%`,
                        backgroundColor: "#3f51b5",
                      }}
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-in-out hover:from-yellow-400 hover:to-red-400"
                    ></div>
                  </div>
                </div>
              </div>
              {(deliveryStatus[person.id] === undefined || deliveryStatus[person.id] === "pending") && (
                <div className="mt-2">
                  <button
                    className="flex items-center text-green-500"
                    onClick={() => addDelivery(person.id)}
                  >
                    <FiUserPlus className="mr-1" />
                    Add Delivery
                  </button>
                </div>
              )}
              {deliveryStatus[person.id] === "inProgress" && (
                <div className="mt-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
                    onClick={() => completeDelivery(person.id)}
                  >
                    Complete Delivery
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => abortDelivery(person.id)}
                  >
                    Abort Delivery
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Attendance;
