import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { ResponsiveContainer } from "recharts";
import Footer from "@/Components/Footer";
import Nav from "../../Components/Nav";

const Account = () => {
  const navigate = useNavigate();

  const navExplore = () => {
    navigate("/courses");
  };

  const navAlerts = () => {
    navigate("/elibrary");
  };

  const navNetwork = () => {
    navigate("/attendance");
  };

  const navHome = () => {
    navigate("/account");
  };

  // Test Content, to be replaced by Data from Firestore
  const userName = "Test User";
  const newAssignments = [
    {
      title: "Big Bazaar",
      description: "Total Inventory",
    },
    {
      title: "Reliance Retail",
      description: "Total Inventory",
    },
    {
      title: "Fabindia",
      description: "Total Inventory",
    },
  ];

  const newIssues = [
    {
      title: "Titan Company ",
      description: "Damaged Product",
    },
    {
      title: "The Bombay Store",
      description: "Faulty Pieces",
    },
  ];

  const newRequests = [
    {
      title: "Toothpaste vendor",
      description: "Need 200 units of Colgate",
    },
    {
      title: "Battery vendor",
      description: "Need 394 units of Duracell",
    },
    {
      title: "Stationary vendor",
      description: "Need 250 units of Doms pencil",
    },
    {
      title: "Milk vendor",
      description: "Need 150 units of Amul Milk",
    },
  ];

  const progress = 70;

  const generateInitials = (title) => {
    const words = title.split(" ");
    return words.map((word) => word[0]).join("");
  };

  return (
    <>
      <Nav />
      <div className="px-4 md:px-12 py-5 w-full">
        <p className="font-bold text-3xl md:text-5xl mx-3 my-5">
          Welcome, {userName}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card>
            <ResponsiveContainer>
              <CardHeader>
                <CardTitle>Retailers</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {newAssignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2 relative"
                  >
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {generateInitials(assignment.title)}
                      </span>
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-lg font-semibold">
                        {assignment.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {assignment.description}
                      </p>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-300`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button onClick={navNetwork}>View All</Button>
              </CardFooter>
            </ResponsiveContainer>
          </Card>

          <Card>
            <ResponsiveContainer>
              <CardHeader>
                <CardTitle>Complaints</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {newIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2"
                  >
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {generateInitials(issue.title)}
                      </span>
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-lg font-semibold">{issue.title}</p>
                      <p className="text-sm text-gray-500">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button onClick={navAlerts}>View All</Button>
              </CardFooter>
            </ResponsiveContainer>
          </Card>

          <Card>
            <ResponsiveContainer>
              <CardHeader>
                <CardTitle>Requests</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {newRequests.map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2"
                  >
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {generateInitials(request.title)}
                      </span>
                    </div>
                    <div className="flex-grow ml-4">
                      <p className="text-lg font-semibold">{request.title}</p>
                      <p className="text-sm text-gray-500">
                        {request.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button onClick={navAlerts}>View All</Button>
              </CardFooter>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
