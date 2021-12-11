import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import { Link, useLocation } from "react-router-dom";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function BarMobile() {
  const { pathname } = useLocation();
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            <a href="#project" onClick={() => setBarMobile(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={() => setBarMobile(false)}>
              SOCIAL
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={() => setBarMobile(false)}>
              LINK
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={() => setBarMobile(false)}>
              ROADMAP
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={() => setBarMobile(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#roadmap" onClick={() => setBarMobile(false)}>
              TRAITS
            </a>
          </li>
          {/* <li>
            <a>{!wallet_ && <Connect navbar={false} mobile={true} />}</a>
          </li> */}
          {/* <li className="col-6 d-flex mx-auto">
            <a href="https://discord.gg/bkWJHedf3X" className="col-3">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/internetkidsio" className="col-3">
              <img src={Twitter} alt="" width="30" />
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default BarMobile;
