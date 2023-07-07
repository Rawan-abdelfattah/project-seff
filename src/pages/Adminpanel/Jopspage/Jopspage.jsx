import React from "react";
import Title from "../../../components/Title/Title";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Jobs from "../../../components/JobsList/JobsList";
import { NavLink } from "react-router-dom";

export default function Jopspage() {
  return (
    <>
        <div className=" bg-image"  >
        <div className="bg-layer" >
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <Title />{" "}
          </div>
          <div className="p-3 ms-auto">
            {" "}
            <button
              className="btn Default-bg text-white  d-none d-md-block  hover-bg-color transition"
              style={{ marginTop: "250px" }}
            >
              CREATE NEW JOB
            </button>
          </div>
        </Stack>

        <div className="row pt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col">
            <Jobs />
          </div>
        </div>
        {/* <div className="col">
         <Pagination/>
       </div> */}
      </div>

      <div className="container ">
        <Stack gap={2} className="col-md-5 mx-auto d-md-block d-md-none">
          <Button variant="" className="Default-bg text-white hover-bg-color transition mb-4">
            CREATE NEW Job
          </Button>
        </Stack>
      </div>
      </div>
      </div>
    </>
  );
}
