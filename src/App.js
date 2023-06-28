import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import SimpleUseQuery from './Components/SimpleUseQuery';
import PollingUseQuery from './Components/PollingUseQuery';
import RefetchingUseQuery from './Components/RefetchingUseQuery';
import SimpleUseMutation from './Components/SimpleUseMutation';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/graphql',
  cache: new InMemoryCache()
});

// Main App component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/simple-use-query" element={<SimpleUseQuery />} />
          <Route path="/polling-use-query" element={<PollingUseQuery />} />
          <Route path="/refetching-use-query" element={<RefetchingUseQuery />} />
          <Route path="/simple-use-mutation" element={<SimpleUseMutation />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
