import React from "react";
import Title from "../../../components/Title/Title";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Users from "../../../components/UsersList/UsersList";

export default function Userspage() {
  return (
    <>
        <div className=" bg-image" >
        <div className="bg-layer">
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <Title />{" "}
          </div>
          <div className="p-3 ms-auto">
            {" "}
            <button
              className="btn Default-bg text-white  d-none d-md-block hover-bg-color transition "
              style={{ marginTop: "250px" }}
            >
              CREATE NEW USERS
            </button>
          </div>
        </Stack>
        <div className="row pt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col">
            <Users />
          </div>
        </div>
      </div>

      <div className="container ">
        <Stack gap={2} className="col-md-5 mx-auto d-md-block d-md-none ">
          <Button variant="" className="Default-bg text-white hover-bg-color transition">
            CREATE NEW User
          </Button>
          <Button variant="" className="text-white main-border-color mb-4 hover-bg-color transition">
            Upload Certificates
          </Button>
        </Stack>
      </div>
      </div>
      </div>
    </>
  );
}
