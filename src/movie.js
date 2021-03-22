import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;