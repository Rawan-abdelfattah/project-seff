import React, { useState } from 'react'

export default function Pagination() {
  const [Data, setData] = useState(Array.from({ length: 100 }));

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
           <div className="row mt-3 mb-3">
              <div className="col text-end">
                {/* <i
                  className="fa-solid fa-circle-chevron-left main-color fa-xl"
                  onClick={prePage}
                ></i> */}
                <button className="btn text-white Default-bg" onClick={prePage}>pre</button>

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
                {/* <i
                  className="fa-solid fa-circle-chevron-right main-color fa-xl"
                  onClick={nextPage}
                ></i> */}
                <button className="btn text-white Default-bg
                " onClick={nextPage}>next</button>
              </div>
            </div>

        
    </>
  )
}
