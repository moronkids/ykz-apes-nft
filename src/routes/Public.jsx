import React, { useContext, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Wrapper from "components/Layouts";
const Guest = ({ component: Component, ...rest }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Wrapper>
              <Component {...props} />
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default Guest;
