import React, { useState } from "react";
import Collapse from "assets/img/icons/collapse.png";
import Data from "dummy/faq";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-faq">
        {/* <hr /> */}
        <div>
          <h1>FAQ</h1>
        </div>
        <div className="content-faq">
          {Data.map((val) => {
            return (
              <Fade bottom>
                <div className="faq">
                  <div className="title">
                    <h3
                      onClick={() =>
                        collapse[1] !== val.id
                          ? setCollapse([true, val.id])
                          : setCollapse([!collapse[0], val.id])
                      }
                    >
                      {val.title}
                    </h3>
                    <img
                      className={`arrow ${
                        collapse[1] === val.id && collapse[0] && "active"
                      }`}
                      src={Collapse}
                      alt=""
                      width="30px"
                      height="30px"
                      onClick={() =>
                        collapse[1] !== val.id
                          ? setCollapse([true, val.id])
                          : setCollapse([!collapse[0], val.id])
                      }
                    />
                  </div>
                  <Reveal effect="fadeInUp" effectOut="fadeOutLeft">
                    <p
                      className={`detail ${
                        collapse[1] === val.id && collapse[0] && "active"
                      }`}
                    >
                      {val.desc}
                    </p>
                  </Reveal>
                  <hr />
                </div>
              </Fade>
            );
          })}
          <h2>
            <i>
              For any other questions, please send them in the Internet Kids
              official discord server.
            </i>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Faq;
