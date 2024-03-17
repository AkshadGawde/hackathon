import React, { useState } from "react";
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

const Elibrary = () => {
  const [newRequests, setNewRequests] = useState([
    {
      title: "Toothpaste vendor",
      description: "Need 200 units of Colgate",
    },
    {
      title: "Battery vendor",
      description: "Need 394 units of Duracell",
    },
    {
      title: "Stationery vendor",
      description: "Need 250 units of Doms pencil",
    },
    {
      title: "Milk vendor",
      description: "Need 150 units of Amul doodh",
    },
    {
      title: "Milk vendor",
      description: "Need 150 units of Amul doodh",
    },
    {
      title: "Milk vendor",
      description: "Need 150 units of Amul doodh",
    },
  ]);

  const [newIssues, setNewIssues] = useState([
    {
      title: "Vendor 1",
      description: "Toothpaste bottles have faulty labeling",
    },
    {
      title: "Vendor 2",
      description: "Leaked Batteries",
    },
    {
      title: "Vendor 3",
      description: "Pencils broken",
    },
    {
      title: "Vendor 3",
      description: "Pencils broken",
    },
    {
      title: "Vendor 3",
      description: "Pencils broken",
    },
    {
      title: "Vendor 3",
      description: "Pencils broken",
    },
  ]);

  const [feedbacks, setFeedbacks] = useState([
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
    {
      title: "Vendor 4",
      description: "Insane delivery time",
    },
    {
      title: "Vendor 5",
      description: "Insane delivery time",
    },
    {
      title: "Vendor 6",
      description: "Insane delivery time",
    },
    {
      title: "Vendor 7",
      description: "Insane delivery time",
    },
  ]);

  const handleClearIssue = (index) => {
    const updatedIssues = [...newIssues];
    updatedIssues.splice(index, 1);
    setNewIssues(updatedIssues);
  };

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-3">
        <Card>
          <CardHeader>
            <CardTitle>Issues</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto max-h-72">
            {newIssues.map((issue, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-300 pb-2">
                <div>
                  <p className="text-lg font-semibold">{issue.title}</p>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
                <Button color="red" size="sm" onClick={() => handleClearIssue(index)}>
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
          <CardContent className="overflow-auto max-h-72">
            {newRequests.map((request, index) => (
              <div key={index} className="flex flex-col border-b border-gray-300 pb-2">
                <p className="text-lg font-semibold">{request.title}</p>
                <p className="text-sm text-gray-600">{request.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>

      <div className="grid grid-cols-1 gap-5 m-3">
        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {feedbacks.map((feedback, index) => (
              <div key={index} className="flex flex-col border-b border-gray-300 pb-2">
                <a href="#" className="text-lg font-semibold underline mb-1">{feedback.title}</a>
                <p className="text-sm text-gray-600">{feedback.description}</p>
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
