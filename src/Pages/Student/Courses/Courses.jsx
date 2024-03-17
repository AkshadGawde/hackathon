import React, { useState } from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import axa from "../../../../public/images/download.jpeg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Courses = () => {
  // To be replaced after fetching data from firestore
  const courseData = [
    {
      title: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Psa Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Psa Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Psa Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Dummy data for story bar
  const stories = [
    { profile: "User1", image: axa }, // Use the imported image directly
    { profile: "User2", image: axa },
    { profile: "User3", image: axa },
    { profile: "User4", image: axa },
    { profile: "User5", image: axa },
    { profile: "User6", image: axa },
    // Add more profiles as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter stories based on search query
  const filteredStories = stories.filter(story =>
    story.profile.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Nav />
      <div className="container px-12 mt-8">
        {/* Search Bar */}
        <div className="mb-4 w-3/5 mx-auto">
          <input
            type="text"
            placeholder="Search people"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
<h3 className="text-3xl font-bold mb-4 text-center"  >Top people</h3>
        {/* Story Bar */}
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

        {/* Google Map */}
        <div className="flex justify-center mb-8">
          <iframe
            title="Google Map"
            style={{ width: "90%", height: "400px", maxWidth: "800px" }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pinnacle%20Group%20Tuition%20-%20JEE/NEET%20Classes.,%20Monalisa%20Apartment,%20Shreeji-Little%20millennium%20street,%20beside%20Union%20Bank,%20Sector-19,%20Airoli,%20Navi%20Mumbai,%20Maharashtra%20400708+(Pinnacle%20Group%20Tutions)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        {/* Courses Section */}
        <h1 className="text-3xl font-bold mb-4 text-center">Recommended people</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {courseData.map((course, index) => (
            <Card key={index} className="w-full bg-gray-900 text-white">
              <CardHeader color="blueGray" className="relative h-56">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="card-image" className="mx-auto"
                />
              </CardHeader>
              <CardBody className="text-blueGray-200">
                <Typography variant="h5" className="mb-2">
                  {course.title}
                </Typography>
                <Typography>
                  {course.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button color="lightBlue" className="border border-white w-full">Connect</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
