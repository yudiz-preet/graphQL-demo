import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import DashboardNavigation from "./DashboardNavigation";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const customClient = new ApolloClient({
  uri: 'https://gateway-dev.crictracker.ml/graphql',
  cache: new InMemoryCache()
});

const ADD_SEO = gql`
mutation Mutation($input: oSeoInput) {
  addSeo(input: $input) {
    sMessage
    oData {
      iId
      sTitle
      sSlug
      sDescription
    }
  }
}

`;

function SimpleUseMutation() {
  const [sSlug, setSSlug] = useState("");
  
  const [addSeo, { loading, error }] = useMutation(ADD_SEO, {
    client : customClient
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addSeo({
      variables: {
        "input": {
          "sSlug": sSlug
        }
      },
    })
      .then((response) => {
        console.log("Mutation response:", response);
      })
      .catch((error) => {
        console.error("Mutation error:", error);
      });
  };

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
      <h1>Simple useMutation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Slug"
          value={sSlug}
          onChange={(e) => setSSlug(e.target.value)}
        />
        <button type="submit">Add Slug</button>
      </form>
    </div>
  );
}

export default SimpleUseMutation;
