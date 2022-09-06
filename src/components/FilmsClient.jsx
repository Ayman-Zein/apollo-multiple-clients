import React from "react";
import { useQuery, gql } from "@apollo/client";

const LIST_FILMS = gql`
  query ListFilms @api(name: films) {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;

const SpaceXClient = () => {
  const { error, loading, data } = useQuery(LIST_FILMS);

  if (loading) {
    return <h3>Loading ....</h3>;
  }

  if (error) {
    return <h3>An Error Has Been Occured</h3>;
  }

  return (
    <div>
      <h1>FilmsClient Client</h1>
      {data.allFilms.films.length > 0 ? (
        <ul>
          {data.allFilms.films.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <h4>No data Found</h4>
      )}
    </div>
  );
};

export default SpaceXClient;
