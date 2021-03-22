import React from "react";
import axios from "axios";
import Movie from "../components/movie";
// import "./app.css";
import "./home.css";

// import PropTypes from "prop-types";

// 더이상 state를 갖기위해 class componet를 가질 필요는 없다. react hook이라는 것때문에
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async 랑 await는 axios가 다 loading 될 때까지 기다리시오 라는 명령어 같은 느낌.
  getMovies = async () => {
    // cosnt moives = awaite axios get("URL") 인데 우리가 원하는 datark data.data.movies에 있었으니 ES6에서는 저렇게 바꿀수 있음
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;