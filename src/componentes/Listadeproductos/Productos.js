import React, { useEffect, useState } from "react";
import "./Productos.css";
import tmdb from "../../tmdb.js";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Productos = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = () => {
    // Realiza una solicitud a la API para obtener una página de películas populares
    tmdb
      .get("/movie/popular", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const renderMovies = () => {
    return movies.map((movie) => (
      <div key={movie.id} className="movie-item">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-image"
        />
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-description">{movie.overview}</p>
      </div>
    ));
  };

  const renderMovieRows = () => {
    const rows = [];
    let row = [];

    movies.forEach((movie, index) => {
      row.push(
        <div key={movie.id} className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-description">{movie.overview}</p>
        </div>
      );

      if ((index + 1) % 3 === 0) {
        rows.push(
          <div key={index} className="movie-row">
            {row}
          </div>
        );
        row = [];
      }
    });

    if (row.length > 0) {
      rows.push(
        <div key={movies.length} className="movie-row">
          {row}
        </div>
      );
    }

    return rows;
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>Películas Populares</h1>
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={goToNextPage}>Siguiente</button>
        </div>
        <div className="movie-list">{renderMovieRows()}</div>
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={goToNextPage}>Siguiente</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productos;
