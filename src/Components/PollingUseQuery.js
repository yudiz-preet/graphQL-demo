import React from "react";
import { useQuery, gql } from "@apollo/client";
import DashboardNavigation from "./DashboardNavigation";

const GET_LAUNCHES = gql`
  query {
    launches(limit: 10) {
      mission_name
    }
  }
`;

function PollingUseQuery() {
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    pollInterval: 5000 //every 5 seconds
  });

  if (loading) return <p>Loading...</p>;
  if (error)
  return (
    <div>
      <DashboardNavigation />
      <p>Error :(</p>
    </div>
  );

  return (
    <div>
      <DashboardNavigation />
      <h1>Polling useQuery</h1>
      <ul>
        {data.launches.map((launch) => (
          <li key={launch.mission_name}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PollingUseQuery;
