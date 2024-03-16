import React from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

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

const Elibrary = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-3">
        <Card>
            <CardHeader>
                <CardTitle>Issues</CardTitle>
            </CardHeader>
              <CardContent>
              {newRequests.map((assignment, index) => (
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
                </div>
              ))}
              </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Requests</CardTitle>
            </CardHeader>
              <CardContent>
              {newRequests.map((assignment, index) => (
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
                </div>
              ))}
              </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Elibrary;
