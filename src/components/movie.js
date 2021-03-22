import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        //lunk로 정보를 공유하는것
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => (
                            // Each child in a list should have a unique "key" prop - index 라는 list에 원래있는 key를 준다
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link >
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;