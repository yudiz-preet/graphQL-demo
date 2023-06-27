import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// Define GraphQL query
const GET_LAUNCHES = gql`
  query {
    launches(limit: 10) {
      mission_name
    }
  }
`;

// React component for the simple useQuery example
function SimpleUseQuery() {
    const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
        <div style={{
            color: 'darkblue',
            cursor: 'pointer',
            textDecoration: 'underline'
        }} onClick={() => navigate('/')}>Dashboard</div>
      <h1>Simple useQuery Example</h1>
      <ul>
        {data.launches.map((launch) => (
          <li key={launch.mission_name}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleUseQuery;
