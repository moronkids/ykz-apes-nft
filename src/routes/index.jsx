import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/Public";
import Home from "components/Home";

const Routes = () => {
  //for dev mode
  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
