import React, { useState } from "react";
import { NavLink ,useLocation  } from "react-router-dom";
import "./Slider.css";
import { Button } from "react-bootstrap";

export default function Sidebar() {
  const [showNested, setShowNested] = useState(false);
  const [toggle, setToggle] = useState('');
  function updateToggle(id){
    setToggle(id)
  }

  const location = useLocation();
  const activeLinkColor = '#BF9B30';

  const handleNestedClick = () => {
    setShowNested(!showNested);
  };

  return (
    <div className="text-white">
    <div className="row">
      <div className="col">
        <div className="sidebar d-none d-md-block">
          <ul className="list-unstyled Black-div p-4">
            {/* Users */}
            <li>
              <NavLink
                exact
                to="/"
                className="d-block sidebar-header p-3 nav-link fw-bold"
                style={{ color: location.pathname === '/' ? activeLinkColor : 'white' }}
                onClick={handleNestedClick}
              >
                Users
              </NavLink>
              {/* Nested links */}
              <ul
                className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
              >
                <li onClick={()=>updateToggle('admin')}>
                  <NavLink to="/" className="nav-link">
                    Admins
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('editors')}>
                  <NavLink to="/" className="nav-link">
                    Editors
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('instructors')}>
                  <NavLink to="/" className="nav-link">
                    Instructors
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('students')}>
                  <NavLink to="/" className="nav-link">
                    Students
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Articles */}
            <li>
              <NavLink
                to="/articles"
                className="d-block sidebar-header p-3 nav-link fw-bold"
                style={{ color: location.pathname === '/articles' ? activeLinkColor : 'white' }}
                onClick={handleNestedClick}
              >
                Articles
              </NavLink>
              {/* Nested links */}
              <ul
                className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
              >
                <li  onClick={()=>updateToggle('publisgedArticles')}>
                  <NavLink to="/" className="nav-link">
                    Published Articles
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('scheduledArticles')}>
                  <NavLink to="/" className="nav-link" >
                    Scheduled Articles
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('saveDrafts')}>
                  <NavLink to="/" className="nav-link">
                    Save Drafts
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Jobs */}
            <li >
              <NavLink
                to="/jobs"
                className="d-block sidebar-header p-3 nav-link fw-bold"
                style={{ color: location.pathname === '/jobs' ? activeLinkColor : 'white' }}
                onClick={handleNestedClick}
              >
                Jobs
              </NavLink>
              {/* Nested links */}
              <ul
                className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
              >
                <li  onClick={()=>updateToggle('publishedJobs')}>
                  <NavLink to="/" className="nav-link">
                    Published Jobs
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('savedDrafts')}>
                  <NavLink to="/" className="nav-link">
                    Saved Drafts
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Courses */}
            <li>
              <NavLink
                to="/courses"
                className="d-block sidebar-header p-3 nav-link fw-bold"
                style={{ color: location.pathname === '/courses' ? activeLinkColor : 'white' }}
                onClick={handleNestedClick}
              >
                Courses
              </NavLink>
              {/* Nested links */}
              <ul
                className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
              >
                <li  onClick={()=>updateToggle('publishedCourses')}>
                  <NavLink to="/" className="nav-link">
                    Published Courses
                  </NavLink>
                </li>
                <li  onClick={()=>updateToggle('scheduledCourses')}> 
                  <NavLink to="/" className="nav-link">
                    Scheduled Courses
                  </NavLink>
                </li>
                <li className="mb-4"  onClick={()=>updateToggle('saveDrafts')}>
                  <NavLink to="/" className="nav-link">
                    Save Drafts
                  </NavLink>
                </li>
                <div className="row "> {location.pathname === '/' ?  <Button variant="" className="Default-bg text-white mt-4 w-100  hover-bg-color transition">
                Upload Certificates
          </Button> : '' }</div>
               
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}
