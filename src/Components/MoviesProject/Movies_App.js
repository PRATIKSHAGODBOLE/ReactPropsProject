import React from 'react'
import Movies from './Movies'
import Movie_Card from './Movies_Card'
export default function App() {
  // console.log(Movies)
  return (
    <div className="container" style={{ marginLeft: "10px" }}>
      <h1 className="text-center text-danger my-5 ml-10">Movie Cards</h1>
      {/* create card in row vice */}
      <div className="row">
        {
          // Movies.js se data App.js me liya using (Movies.map)
          Movies.map((movie, i) => (
            // col-md-4 columne device 4
            <div className="col-md-4 mb-4" >
              <Movie_Card movi={movie} key={i} />
            </div>
          ))
        }
      </div>
    </div>
  )

}