import React, { Suspense, useContext } from "react";
// import Navbar from "components/Layouts/Navbar";
import { Hooks } from "providers";
const Navbar = React.lazy(() => import("components/Layouts/Navbar"));
const BarMobile = React.lazy(() => import("components/Layouts/BarMobile"));
const NavbarMobile = React.lazy(() =>
  import("components/Layouts/NavbarMobile")
);
const Footer = React.lazy(() => import("components/Layouts/Footer"));

function Index(props) {
  const { setScroll, scroll, timer, setTimer } = useContext(Hooks);
  React.useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset > 10 ? setScroll(true) : setScroll(false);

    return () => (window.onscroll = null);
  });
  return (
    <>
      {/* <div style={{ overflow: "auto" }}> */}
      <Suspense fallback={""}>
        <>
          <BarMobile />
          <Navbar />
          {/* <NavbarMobile /> */}
        </>
      </Suspense>
      {props.children}

      {/* <Suspense fallback={""}>
        <Footer />
      </Suspense> */}
      {/* </div> */}
    </>
  );
}

export default Index;
