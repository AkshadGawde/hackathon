import React from "react";
import Nav from "../../../Components/Nav";
import Footer from "../../../Components/Footer";
import { Button } from "@material-tailwind/react";
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
    description: "Need 200 units of Colgate",
  },
  {
    title: "Battery vendor",
    description: "Need 394 units of Duracell",
  },
  {
    title: "Stationary vendor",
    description: "Need 250 units of Doms pencils",
  },
  {
    title: "Milk vendor",
    description: "Need 150 units of Amul milk",
  },
];

const newIssues = [
  {
    title: "Vendor 1",
    description: "Toothpaste bottles have faulty labeling",
  },
  {
    title: "Vendor 2",
    description: "Leaked batteries",
  },
  {
    title: "Vendor 3",
    description: "Pencils broken",
  },
];

const feedbacks = [
  {
    title: "Vendor 1",
    description: "Insane delivery time",
  },
  {
    title: "Vendor 2",
    description: "Insane delivery time",
  },
  {
    title: "Vendor 3",
    description: "Insane delivery time",
  },
];

const Elibrary = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Issues</CardTitle>
            </CardHeader>
            <CardContent className="max-h-72 overflow-y-auto">
              {newIssues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 py-3"
                >
                  <div>
                    <p className="text-lg font-semibold">{issue.title}</p>
                    <p className="text-sm text-gray-500">{issue.description}</p>
                  </div>
                  <Button color="red" size="sm" ripple="light">
                    Clear Issue
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requests</CardTitle>
            </CardHeader>
            <CardContent className="max-h-72 overflow-y-auto">
              {newRequests.map((request, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 py-3"
                >
                  <div>
                    <p className="text-lg font-semibold">{request.title}</p>
                    <p className="text-sm text-gray-500">{request.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 py-3"
                >
                  <div>
                    <p className="text-lg font-semibold">{feedback.title}</p>
                    <p className="text-sm text-gray-500">{feedback.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Elibrary;
