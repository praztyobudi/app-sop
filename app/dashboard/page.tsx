"use client";

import LogPanel from "../componens/logpanel";
import StatCards from "../componens/statcard";

const Home = () => {
  return (
    <div className="px-4">
      <div className="pb-4">
        <StatCards />
      </div>
      <LogPanel />
    </div>
  );
};
export default Home;
