import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const fetchMoviesHandler = async (count) => {
    console.log("Counter is: ", count);
    // setIsLoading(true);
    const reponse = await fetch("https://swapi.dev/api/films/");
    const data = await reponse.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(transformedMovies);

    // setIsLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(counter);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMoviesHandler(counter);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
        <p>{counter}</p>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />} */}
        {/* {!isLoading && movies.length === 0 && <p>Found no Movies.</p>} */}
        {/* {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
