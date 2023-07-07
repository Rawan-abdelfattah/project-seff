import React from "react";
// import { NavLink } from "react-router-dom";
import "./Articalpage.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Article from "../../../components/ArticleList/ArticleList";
import Title from "../../../components/Title/Title";
// import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import ButtonTop from "../../../components/ButtonTop/ButtonTop";
// import Pagination from "../../../components/Pagination/Pagination";
// import backgroundImage from '../../../assets/images/secondary_background.jpg';

export default function Articalpage() {
  return (
    <>
  
    <div className=" bg-image"  >
        <div className="bg-layer" >
          
      <div className="container ">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <Title />
          </div>
          <div className="p-3 ms-auto">
            <button className="btn Default-bg text-white  d-none d-md-block hover-bg-color transition" style={{ marginTop: '250px' }}>
              CREATE NEW ARTICAL
            </button>
          </div>
        </Stack>
        <div className="row pt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col">
            <Article />
          </div>
        </div>
        {/* <div className="col">
            <Pagination/>
          </div> */}
      </div>

      <div className="container ">
        <Stack gap={2} className="col-md-5 mx-auto d-md-block d-md-none">
          <Button variant="" className="Default-bg text-white  hover-bg-color transition mb-4">
            CREATE NEW ARTICLE
          </Button>
        </Stack>
      </div>
      </div>
      </div>

      
    </>
  );
}
