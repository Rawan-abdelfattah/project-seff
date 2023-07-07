import React from "react";
import Title from "../../../components/Title/Title";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Courses from "../../../components/CoursesList/CoursesList";
import { NavLink } from "react-router-dom";

export default function Coursespage() {
  return (
    <>
        <div className=" bg-image"  >
        <div className="bg-layer" >
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <Title />
          </div>
          <div className="p-3 ms-auto">
            
            <button className="btn Default-bg text-white  d-none d-md-block hover-bg-color transition" style={{ marginTop: '250px' }}>
              CREATE NEW Course
            </button>
          </div>
        </Stack>

        {/* <div className="container d-md-block d-md-none d-flex justify-content-center">
  <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
      <NavLink to="/" className="nav-link" style={{ color: 'white' }}>Users</NavLink>
    </Nav.Item>
    <Nav.Item as="li">
      <NavLink to="/articles" className="nav-link" style={{ color: 'white' }}>Articles</NavLink>
    </Nav.Item>
    <Nav.Item as="li">
      <NavLink to="/jobs" className="nav-link" style={{ color: 'white' }}>Jobs</NavLink>
    </Nav.Item>
    <Nav.Item as="li">
      <NavLink to="/courses" className="nav-link" style={{ color: '#FED049'}}>Courses</NavLink>
    </Nav.Item>
  </Nav>
</div> */}

        <div className="row pt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col">
            <Courses />
          </div>
        </div>
        {/* <div className="col">
         <Pagination/>
       </div> */}
      </div>

      <div className="container ">
        <Stack gap={2} className="col-md-5 mx-auto d-md-block d-md-none">
          <Button variant="" className="Default-bg text-white  mb-4 hover-bg-color transition">
            CREATE NEW COURSES
          </Button>
        </Stack>
      </div>
      </div>
      </div>
    </>
  );
}
