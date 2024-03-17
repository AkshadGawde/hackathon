import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import Nav from "../../Components/Faculty/Nav";
import AreaChartComponent from "../../Components/Faculty/AreaChartComponent";

const Facelib = () => {
  const [progressValues, setProgressValues] = useState([50, 70, 30,20,100]); // Example progress values for each accordion

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
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-start my-5 p-5 h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center ">My Dashboard</h1>
        <div className="w-full md:w-3/4 lg:w-1/2">
          {progressValues.map((progress, index) => (
            <Accordion key={index} className="mb-4">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="bg-gray-300 py-3 px-4 rounded-t-lg"
              >
                <Typography variant="h6" className="font-semibold">
                  {" "}
                  Product Number {index + 1}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-gray-100 p-6 rounded-b-lg">
                <div>
                  <Typography className="mb-4">
                    Order Placed Date: 30-3-24
                    <br />
                    Order Delivered Date: 32-4-24
                    <br />
                    Issues: lorem ipsum
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full mt-2"
                  >
                    Report
                  </Button>

                  <div className="w-full h-3 mt-3 bg-gray-200 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full ${getProgressBarColor(progress)}`}
                      style={{ width: `${progress}%` }}
                    ></div>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 font-semibold">
                      {progress}%
                    </span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facelib;
