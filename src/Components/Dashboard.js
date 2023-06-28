import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/simple-use-query">Simple useQuery</Link>
        </li>
        <li>
          <Link to="/polling-use-query">Polling useQuery</Link>
        </li>
        <li>
          <Link to="/refetching-use-query">Refetching useQuery</Link>
        </li>
        <li>
          <Link to="/simple-use-mutation">Simple useMutation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
