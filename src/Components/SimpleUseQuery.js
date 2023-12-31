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

function SimpleUseQuery() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

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
      <h1>Simple useQuery</h1>
      <ul>
        {data.launches.map((launch) => (
          <li key={launch.mission_name}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleUseQuery;
