import React, { useState } from "react";
import Sidebarmobile from "../Sidebarmobile/Sidebarmobile";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [Search, setSearch] = useState("");
  const [Data, setData] = useState(Array.from({ length: 100 }));
  console.log(Search);
  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPages = 6;
  const lastIndex = CurrentPage * recordsPerPages;
  const firstIndex = lastIndex - recordsPerPages;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPages);
  const maxButtonsToShow = 3; // Maximum number of buttons to show initially
  const maxButtonsToRender = Math.min(maxButtonsToShow, nPage); // Maximum number of buttons to render

  let startButton = Math.min(
    Math.max(CurrentPage - Math.floor(maxButtonsToRender / 2), 1),
    nPage - maxButtonsToRender + 1
  );
  const endButton = Math.min(startButton + maxButtonsToRender - 1, nPage);

  const numbers = [...Array(endButton - startButton + 1)].map(
    (_, index) => startButton + index
  );

  if (endButton - startButton + 1 < maxButtonsToRender) {
    startButton = Math.max(endButton - maxButtonsToRender + 1, 1);
  }

  function prePage() {
    if (CurrentPage !== firstIndex) {
      setCurrentPage(CurrentPage - 1);
    }
  }

  function nextPage() {
    if (CurrentPage !== lastIndex) {
      setCurrentPage(CurrentPage + 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <div className="container text-white">
        <div className="col">
          {/* Header && Seacrch */}
          <div className="d-flex flex-column  justify-content-between  flex-lg-row  mt-5">
            <p className="text-white line-after d-none d-md-block">Courses</p>

            <Sidebarmobile />

            <div className="search-container  d-flex flex-md-row  ">
              <input
                className="text-white  "
                id="search"
                type="text"
                placeholder="Search in Courses"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
     <i class="fa-solid fa-chevron-down search-icon d-md-block d-md-none"></i>
              <i className="fa-solid fa-magnifying-glass search-icon main-color fa-l d-none d-md-block" />            </div>
          </div>

          {/* Article List */}

          <div className="col text-white w-100 mt-4 ">
            <div className="my-2 d-none d-lg-block ">
              <div className="w-100">
                <div className="row p-3">
                  <div className="col-lg ">Title</div>
                  <div className="col-lg">Status</div>
                  <div className="col-lg">Insructor</div>
                  <div className="col-lg">Level</div>
                  <div className="col-lg">Start date</div>
                  <div className="col-lg">PublishedOn</div>
                  <div className="col-lg" />
                </div>
              </div>
            </div>
            {/* .filter((item) => {
              return Search.toLowerCase() === ""
                ? item
                : item.id.toLowerCase().includes(Search);
            }) */}
            {/* Article Items */}
            {records.map((items, index) => (
              <div key={index} className="my-2 ">
                <div className="w-100">
                  <div className="row Black-div p-3 mb-4">
                    <div className="col-md-6  d-md-block d-lg-none">Title</div>
                    <div className="col-lg col-md-12">
                      Here's the Course name
                    </div>
                    <div className="col-lg text-end">
                      <button className="rounded-btn btn Default-bg text-white mb-2 hover-bg-color ">
                        On Going
                      </button>
                    </div>
                    <div className="col-6 d-md-block d-lg-none">
                      Instructor{" "}
                    </div>
                    <div className="col-lg col-6">Mohamed Ali</div>
                    <div className="col-6 d-md-block d-lg-none">Level</div>
                    <div className="col-lg col-6">1</div>
                    <div className="col-6 d-md-block d-lg-none">Start date</div>
                    <div className="col-lg col-6">Thursday , june 8th </div>
                    <div className="col-6 d-md-block d-lg-none">
                      Published On
                    </div>
                    <div className="col-lg col-6">
                      Thursday , june 10th <br></br> 12 :30 pm{" "}
                    </div>
                    <div className="col-lg col-md-12 text-end">
                      <i className="fa-regular fa-pen-to-square main-color fa-xl m-1 hover-color" />
                      <i className="fa-regular fa-trash-can main-color fa-xl m-1 hover-color" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <button className="rounded-btn btn Disabled-bg text-white">
                        Ended
                    </button> */}

            {/* Pagination */}
            <div className="row mt-3 mb-3">
              <div className="col text-end">
                <i
                  className="fa-solid fa-circle-chevron-left main-color fa-xl hover-color"
                  onClick={prePage}
                ></i>

                {numbers.map((num, index) => (
                  <button
                    className={`btn text-white fw-bold m-2  ${
                      CurrentPage === num ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => changeCurrentPage(num)}
                    style={
                      CurrentPage === num
                        ? { backgroundColor: "#FED049", borderColor: "#FED049" }
                        : {}
                    }
                  >
                    {num}
                  </button>
                ))}
                <i
                  className="fa-solid fa-circle-chevron-right main-color fa-xl hover-color"
                  onClick={nextPage}
                ></i>
              </div>
            </div>

            {/* End of Pagination */}
          </div>
        </div>
      </div>
    </>
  );
}
