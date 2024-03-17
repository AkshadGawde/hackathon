import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
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
      title: "Retailer 1",
      description: "Total Inventory",
      progress: 96,
    },
    {
      title: "Retailer 2",
      description: "Total Inventory",
      progress: 40,
    },
    {
      title: "Retailer 3",
      description: "Total Inventory",
      progress: 60,
    },
  ];

  const newIssues = [
    {
      title: "Retailer 4",
      description: "Late Delivery",
    },
    {
      title: "Retailer 5",
      description: "Faulty Pieces",
    },
  ];

  const newRequests = [
    {
      title: "Toothpaste vendor",
      description: "Need 200 units of colgate",
    },
    {
      title: "Battery vendor",
      description: "Need 394 units of duracell",
    },
    {
      title: "Stationary vendor",
      description: "Need 250 units of doms pencil",
    },
    {
      title: "Milk vendor",
      description: "Need 150 units of amul doodh",
    },
  ];

  const getProgressBarColor = (progress) => {
    if (progress >= 0 && progress < 30) {
      return "bg-red-500";
    } else if (progress >= 30 && progress < 50) {
      return "bg-orange-500";
    } else if (progress >= 50 && progress < 70) {
      return "bg-yellow-300";
    } else if (progress >= 70 && progress <= 100) {
      return "bg-green-500";
    } else {
      return ""; // Default color if progress is out of range
    }
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
                    <div>
                      <p className="text-lg font-semibold">{assignment.title}</p>
                      <p className="text-sm text-gray-500">{assignment.description}</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full ${getProgressBarColor(assignment.progress)}`}
                        style={{ width: `${assignment.progress}%` }}
                      ></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xs font-bold">
                        {assignment.progress}%
                      </div>
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
                {newIssues.map((assignment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2"
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {assignment.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {assignment.description}
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
                {newRequests.map((assignment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 pb-2"
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {assignment.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {assignment.description}
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
