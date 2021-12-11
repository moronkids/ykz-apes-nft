import { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import NavbarMob from "assets/img/logo-navbar.svg";
//tesdfs
function NavbarMobile() {
  const { barMobile, setBarMobile, wallet_ } = useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className="navbar-mobile sticky-top">
        <nav role="navigation" className="w-100">
          <div className="col-auto w-100 d-flex my-auto">
            <img
              src={NavbarMob}
              alt=""
              className="pl-3"
              style={{
                width: "61px",
                height: "48px",
              }}
            />
          </div>
          <div id="menuToggle" onClick={() => setBarMobile(!barMobile)}>
            <input type="checkbox" value={barMobile} checked={barMobile} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu"></ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarMobile;
