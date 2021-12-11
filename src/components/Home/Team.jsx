import React, { useState } from "react";
import Collapse from "assets/img/icons/collapse.png";
import Data from "dummy/faq";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-team" id="home-faq">
        {/* <hr /> */}
        <div>
          <h1>TEAM</h1>
        </div>
        <div className="content-faq"></div>
      </div>
    </>
  );
}

export default Faq;
