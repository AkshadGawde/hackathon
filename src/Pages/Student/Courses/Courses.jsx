import React, { useState } from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
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
      title: "john doe",
      description: "Bachelor of Technology in Artificial Intelligence and Data Science",
    },
    {
      title: "psa doe",
      description: "Bachelor of Technology in Computer Engineering",
    },
    {
      title: "john doe",
      description: "Bachelor of Technology in Artificial Intelligence and Data Science",
    },
    {
      title: "psa doe",
      description: "Bachelor of Technology in Computer Engineering",
    },
    {
      title: "john doe",
      description: "Bachelor of Technology in Artificial Intelligence and Data Science",
    },
    {
      title: "psa doe",
      description: "Bachelor of Technology in Computer Engineering",
    },
  ];

  // Dummy data for story bar
  const stories = [
    { profile: "User1", image: "story1.jpg" },
    { profile: "User2", image: "story2.jpg" },
    { profile: "User3", image: "story3.jpg" },
    { profile: "User4", image: "story1.jpg" },
    { profile: "User5", image: "story2.jpg" },
    { profile: "User6", image: "story3.jpg" },
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
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
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
