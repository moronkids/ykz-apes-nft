import React, { useContext, useEffect, useState } from "react";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Team from "components/Home/Team";
import ShowCase from "components/Home/Showcase";
import Roadmap from "components/Home/Roadmap";
import Project from "components/Home/Project";

import Faq from "components/Home/Faq";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);

  return (
    <>
      <div className="wrap-body">
        <Zoom top>
          <Banner />
        </Zoom>
      </div>
    </>
  );
}

export default Index;
