import React from "react";
import { useQuery, gql } from "@apollo/client";
import DashboardNavigation from "./DashboardNavigation";

const GET_LAUNCHES = gql`
  query Launches($missionName: String) {
    launches(limit: 10, find: { mission_name: $missionName }) {
      mission_name
    }
  }
`;

function RefetchingUseQuery() {
  const { loading, error, data, refetch } = useQuery(GET_LAUNCHES, {
    variables: { missionName: "FalconSat" },
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
      <h1>Refetching useQuery</h1>
      <button onClick={() => refetch({ missionName: 'Trailblazer' })}>Refetch Query</button>
      <ul>
        {data.launches.map((launch) => (
          <li key={launch.mission_name}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RefetchingUseQuery;
