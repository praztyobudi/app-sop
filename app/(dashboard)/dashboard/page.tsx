"use client";

import LogPanel from "../components/LogPanel";
import StatCards from "../components/StatCard";

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
