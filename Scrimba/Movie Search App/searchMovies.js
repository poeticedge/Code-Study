import React, { useState } from "react";
import MovieCard from "./movieCard.js";

export default function SearchMovies() {
  //states - input query, movies
  const searchMovies = async (e) => {
    e.preventDefault();
    //delete query
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d10d0ff46c299e7a698abc4fda321cfa&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch();
      const data = await res.json;
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="cardlist">
        {movies.filter(movie.poster_path).map((movie) => (
          <MovieCard movie={movie} key={movie} />
        ))}
      </div>
      ;
    </>
  );
}
