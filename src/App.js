import React from "react";
import axios from "axios";
import Movie from "./movie"

// import PropTypes from "prop-types";

class App extends React.Component {
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

export default App;



// **********[State part]**********
// class App extends React.Component{
//   state ={
//     count: 0
//   };
//   add = () => {
//     // state는 object야 따라서 새로운 state를 받아야해. 우리가 setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않음.
//       this.setState({count: this.state.count +1 })
//   };
//   minus = () => {
//     // this.state를 쓰는건 좋은법이 아님.  최근의 current를 받아와서 하는것이 state 를 set할 때 외부의 상태에 의존하지 않는 가장좋은 방법
//       this.setState(current => ({count: current.count -1 }))
//   };

//   render() {
//     return (
//         <div>
//           {/* 우리는 이작업을 componenet의 data를 바꾸기 원해서 하고있음 */}
//           <h1> The number is {this.state.count}</h1>
//           {/* this.add() 에 괄호를 붙이면 항상 적용되는거, 빼면 Only click 할 때만 */}
//           <button onClick={this.add}>ADD</button>
//           <button onClick={this.minus}>MINUS</button>
//         </div>
//     )}
// }



// ********* NOTE **********
// Mounting / updating / unmounting
// Mounting - constructor(), render(), componentDidMount() 순서로 실행됨
// Updating - data가 나로 인해 변할 때,  render(), componenetDidUpdate()
// Unmounting - component 죽을 때.


// Fetch할 때 fetch라고 써도 되지만 axios를 써도 됨.