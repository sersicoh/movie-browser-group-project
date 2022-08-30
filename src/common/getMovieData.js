import React from "react";

const useCurrencyRates = () => {
  const [nameFromApi, setNameFromApi] = React.useState();
  const [descriptionFromApi, setDescriptionFromApi] = React.useState();


  React.useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/667?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
          setNameFromApi(response.original_title);
          setDescriptionFromApi(response.overview);
          // console.log(response.belongs_to_collection.name);
      })
      .catch((error) => {
            console.error("SERVER UNREACHABLE, I'M USING LOCAL DATA", error);
      });
  }, []);

  return { nameFromApi, descriptionFromApi };
};

export default useCurrencyRates;