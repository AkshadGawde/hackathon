import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

const Account = () => {
  const navigate = useNavigate();

  const navAssignments = () => {
    navigate("/assignments");
  };

  // Test Content, to be replaced by Data from Firestore
  const userName = "Test User";
  const newAssignments = [
    {
      title: "Retailer 1",
      description: "Total Inventory",
    },
    {
      title: "Retailer 2",
      description: "Total Inventory",
    },
    {
      title: "Retailer 3",
      description: "Total Inventory",
    },
  ];

const newIssues = [
  {
    title : "Retailer 4",
    description : "Late Delivery"
  } , 
  {
    title :"Retailer 5" , 
    description : "Faulty Pieces"
  }
]

  const data = [
    {
      name: "March",
      assignments: 10,
    },
    {
      name: "April",
      assignments: 1,
    },
    {
      name: "May",
      assignments: 5,
    },
    {
      name: "June",
      assignments: 2,
    },
  ];

  const attendance = [
    {
      subName: "DBMS",
      attended: 12,
      notAttended: 5,
    },
    {
      subName: "OOPJ",
      attended: 12,
      notAttended: 2,
    },
    {
      subName: "CVT",
      attended: 20,
      notAttended: 5,
    },
    {
      subName: "COA",
      attended: 20,
      notAttended: 3,
    },
  ];

  return (
    <>
      <Nav />
      <div className="px-4 md:px-12 py-5 w-full">
        <p className="font-bold text-3xl md:text-5xl mx-3 my-5">
          Welcome, {userName}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Retailers</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {newAssignments.map((assignment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div>
                    <p className="text-lg font-semibold">{assignment.title}</p>
                    <p className="text-sm text-gray-500">
                      {assignment.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button onClick={navAssignments}>View All</Button>
            </CardFooter>
          </Card>
          <Card>
            <ResponsiveContainer>
              <CardHeader>
                <CardTitle>Issues</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
              {newIssues.map((assignment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div>
                    <p className="text-lg font-semibold">{assignment.title}</p>
                    <p className="text-sm text-gray-500">
                      {assignment.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              ))}
              </CardContent>
              <CardFooter>
              <Button onClick={navAssignments}>View All</Button>
            </CardFooter>
            </ResponsiveContainer>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Distribution this year</CardTitle>
              <CardContent>
                
              </CardContent>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={false}/>
                  <Bar dataKey="assignments" fill="#3f88c5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
