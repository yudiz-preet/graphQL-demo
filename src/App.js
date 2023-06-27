import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/graphql',
  cache: new InMemoryCache()
});

// Define GraphQL query
const GET_LAUNCHES = gql`
  query {
    launches(limit: 10) {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`;

// React component
function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>SpaceX Launches</h1>
      {data.launches.map((launch) => (
        <div key={launch.mission_name}>
          <h2>{launch.mission_name}</h2>
          <p>Date: {launch.launch_date_utc}</p>
          <p>Rocket: {launch.rocket.rocket_name}</p>
          {launch.links.video_link && <a href={launch.links.video_link} target="_blank" rel="noopener noreferrer">Watch Video</a>}
        </div>
      ))}
    </div>
  );
}

// Wrap the App component with ApolloProvider
function ApolloApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default ApolloApp;
