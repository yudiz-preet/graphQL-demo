import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/simple-use-query">Simple useQuery Example</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
