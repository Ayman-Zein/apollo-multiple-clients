import React from "react";
import { useQuery, gql } from "@apollo/client";

const LIST_LAUNCHES = gql`
  query ListLaunches($limit: Int!, $offset: Int!) @api(name: spacex) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      id
    }
  }
`;

const SpaceXClient = () => {
  const { error, loading, data } = useQuery(LIST_LAUNCHES, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  if (loading) {
    return <h3>Loading ....</h3>;
  }

  if (error) {
    return <h3>An Error Has Been Occured</h3>;
  }

  return (
    <div>
      <h1>SpaceXClient Client</h1>
      {data.launchesPast.length > 0 ? (
        <ul>
          {data.launchesPast.map((item) => (
            <li key={item.id}>{item.mission_name}</li>
          ))}
        </ul>
      ) : (
        <h4>No data Found</h4>
      )}
    </div>
  );
};

export default SpaceXClient;
