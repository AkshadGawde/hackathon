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
  {
    title: "Milk vendor",
    description: "Need 150 units of amul doodh",
  },
  {
    title: "Milk vendor",
    description: "Need 150 units of amul doodh",
  }
];

const newIssues = [
  {
    title: "Vendor 1",
    description: "Toothpaste bottles have faulty labelling",
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
  }
];

  const feedbacks = [
    {
      title : "Vendor 1",
      description : "insane delivery time"
    },
    {
      title : "Vendor 2",
      description : "insane delivery time"
    },
    {
      title : "Vendor 3",
      description : "insane delivery time"
    },
    {
      title : "Vendor 4",
      description : "insane delivery time"
    },
    {
      title : "Vendor 5",
      description : "insane delivery time"
    },
    {
      title : "Vendor 6",
      description : "insane delivery time"
    },
    {
      title : "Vendor 7",
      description : "insane delivery time"
    }
  ]

const Elibrary = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-3">
        <Card>
          <CardHeader>
            <CardTitle>Issues</CardTitle>
          </CardHeader>
          <CardContent className="scrollbar-thin scrollbar-thumb-gray-300 max-h-72 overflow-y-auto">
            {newIssues.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div>
                  <p className="text-lg font-semibold">{assignment.title}</p>
                  <p className="text-sm text-white-200">
                    {assignment.description}
                    <Button color="red" variant="outlined" className="p-1 m-1">
                      Clear Issue
                    </Button>
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
          <CardContent className="scrollbar-thin scrollbar-thumb-gray-300 max-h-72 overflow-y-auto">
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
     <div className="grid grid-cols-1 gap-5 m-3">
        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {feedbacks.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div>
                  <a className="text-lg font-semibold underline cursor-pointer mb-1">{assignment.title}</a>
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
