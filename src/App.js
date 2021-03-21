import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id:1,
    name: "food1",
    image: "http://lorempixel.com/400/200/sports/Dummy-Text",
    rating: 5
  },
  {
    id:2,
    name: "food2",
    image: "http://lorempixel.com/400/200/sports/Dummy-Text",
    rating: 4.8
  },
  {
    id:3,
    name: "food3",
    image: "http://lorempixel.com/400/200/sports/Dummy-Text",
    rating: 4.3
  },
  {
    id:4,
    name: "food4",
    image: "http://lorempixel.com/400/200/sports/Dummy-Text",
    rating: 4.9
  },
  {
    id:5,
    name: "food5",
    image: "http://lorempixel.com/400/200/sports/Dummy-Text",
    rating: 2.8
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function Food ({ name, picture, rating }) {
  return (
    <div>
      <h2> I like {name} </h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

//componant is a function that returns HTML
function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
