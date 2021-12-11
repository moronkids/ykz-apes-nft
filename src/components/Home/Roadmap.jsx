import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-team flex-column">
        {/* <hr /> */}
        <div>
          <h1>ROADMAP</h1>
        </div>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2008 - 2010"
              contentStyle={{ background: "#33769B", color: "#fff" }}
              iconStyle={{ background: "#33769B", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">Q3 & Q4 2021</h3> */}
              <p>
                1. Collectively mint Trash NFTs that remove real trash from the
                ocean
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "#33769B", color: "#fff" }}
              iconStyle={{ background: "#33769B", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              {/* <h3 className="vertical-timeline-element-title">Q1 2022</h3> */}

              <p>
                2. Trash holders submit names and vote on our #TeamSeas entry
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "#33769B", color: "#fff" }}
              iconStyle={{ background: "#33769B", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <p>3. We claim the Top of the #TeamSeas leaderboard</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "#33769B", color: "#fff" }}
              iconStyle={{ background: "#33769B", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <p>4. Something is rustling... What's inside the bags?</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Faq;
