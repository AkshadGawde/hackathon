import React, { useState } from "react";
import Nav from "../../Components/Faculty/Nav.jsx";
import Footer from "../../Components/Footer.jsx";
import axa from "../../../public/images/download.jpeg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByCategory, setSortByCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courseData = [
    {
      title: "John Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "A",
    },
    {
      title: "Psa Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "A",
    },
    {
      title: "John Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "A",
    },
    {
      title: "Psa Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "B",
    },
    {
      title: "John Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "A",
    },
    {
      title: "Psa Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "B",
    },
  ];

  const stories = [
    { profile: "User1", image: axa },
    { profile: "User2", image: axa },
    { profile: "User3", image: axa },
    { profile: "User4", image: axa },
    { profile: "User5", image: axa },
    { profile: "User6", image: axa },
  ];

  const filteredStories = stories.filter((story) =>
    story.profile.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySort = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategorySelect = (category) => {
    setSortByCategory(category === "Clear Filter" ? null : category);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Nav />
      <div className="container px-12 mt-8">
        <div className="mb-4 w-3/5 mx-auto">
          <input
            type="text"
            placeholder="Search people"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-center">Top people</h3>
        <div className="flex justify-center mb-4 overflow-x-auto scrollbar-hidden">
          {filteredStories.map((story, index) => (
            <div key={index} className="flex-shrink-0 mr-4 px-5">
              <img
                src={story.image}
                alt={story.profile}
                className="h-16 w-16 rounded-full border-2 border-white cursor-pointer"
              />
              <p className="text-center">{story.profile}</p>
            </div>
          ))}
        </div>

      
        <div className="flex justify-end mb-4">
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              onClick={handleCategorySort}
            >
              Sort by Category
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                {["A", "B", "Clear Filter"].map((category) => (
                  <div
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {courseData
            .filter((course) => !sortByCategory || course.category === sortByCategory)
            .map((course, index) => (
              <div key={index} className="w-full bg-gray-900 text-white">
                <div className="relative h-56">
                  <img
                    src="https://img.freepik.com/premium-photo/funny-donkey-with-funny-face_1001743-1360.jpg"
                    alt="card-image"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-2">{course.title}</h2>
                  <p>{course.description}</p>
                  <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
