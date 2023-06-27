import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleUseQuery from './Components/SimpleUseQuery';
import Dashboard from './Components/Dashboard';

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
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
