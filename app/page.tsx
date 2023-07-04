"use client";

import Movie from "@/components/movies/movie";
import React from "react";
import { getPopularMovies, getTopRatedMovies } from "@/services/movie";

export default function Home() {
  const [popularMovies, setPopularMovies] = React.useState<any>([]);
  const [topRatedMovies, setTopRatedMovies] = React.useState<any>([]);

  const getMoviesFunc = async () => {
    let promises: any = [];
    promises.push(await getPopularMovies());
    promises.push(await getTopRatedMovies());
    const allPromise = Promise.all(promises);
    allPromise
      .then((values) => {
        setPopularMovies(values[0].results);
        setTopRatedMovies(values[1].results);
      })
      .catch((error) => {
        console.log(error); // rejectReason of any first rejected promise
      });
  };

  React.useEffect(() => {
    getMoviesFunc();
  }, []);

  return (
    <>
      <React.Fragment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {popularMovies.slice(0, 6).map((movie: any) => (
            <Movie
              id={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ))}
        </div>

        <p style={{ textAlign: "center" }}>Top Rated Movies</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {topRatedMovies.slice(0, 6).map((movie: any) => (
            <Movie
              id={movie.id}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ))}
        </div>
      </React.Fragment>
    </>
  );
}
