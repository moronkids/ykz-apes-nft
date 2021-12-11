import React, { useState } from "react";

function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-project d-flex flex-column m-auto justify-content-center align-items-center">
        {/* <hr /> */}
        <div className="text-center">
          <h2>About TeamSeasDAO</h2>
        </div>
        <div className="wrap w-100 flex-column mx-auto">
          <div className="desc text-center pb-4">
            <p>
              <a href="https://www.youtube.com/c/MrBeast6000/videos">
                <i style={{ color: "blueviolet" }}>
                  <b>Mr. Beast</b>
                </i>
              </a>{" "}
              and{" "}
              <a href="https://www.youtube.com/c/MarkRober">
                <i style={{ color: "blueviolet" }}>
                  <b>Mark Rober</b>
                </i>
              </a>{" "}
              have partnered to remove{" "}
              <i>
                <b>30,000,000</b>
              </i>{" "}
              pounds of trash from the ocean by raising{" "}
              <i>
                <b>$30,000,000</b>
              </i>{" "}
              with their charity, TeamSeas.org. Their leaderboard display's the
              largest donors. Currently the top two spots have been claimed by
              big time CEOs.
            </p>
            <p>
              We think the NFT community can come together to take the top spot
              and choose what message will be seen by millions of people.
            </p>
          </div>
          {/* <div className="w-75 mx-auto">
            <div className="img mx-auto"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Faq;
