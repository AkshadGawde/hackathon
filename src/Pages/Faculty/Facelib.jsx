import React from "react";
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
  const progress = 70;
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-start my-5 p-5 h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center ">My Dashboard</h1>
        <div className="w-full md:w-3/4 lg:w-1/2">
          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-gray-300 py-3 px-4 rounded-t-lg"
            >
              <Typography variant="h6" className="font-semibold">
                {" "}
                Product Number 1
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

                <div className="w-full h-3 mt-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-gray-300 py-3 px-4 rounded-t-lg"
            >
              <Typography variant="h6" className="font-semibold">
                {" "}
                Product Number 2
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
                  className="w-full my-2"
                >
                  Report
                </Button>

                <div className="w-full h-3 mt-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-gray-300 py-3 px-4 rounded-t-lg"
            >
              <Typography variant="h6" className="font-semibold">
                {" "}
                Product Number 3
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
                <Button variant="contained" color="primary" className="w-full">
                  Report
                </Button>

                <div className="w-full h-3 mt-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-red-500 to-green-500 via-yellow-300`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Facelib;
