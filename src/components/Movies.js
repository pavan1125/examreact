import React,{ useContext }  from 'react'
import {Context} from "../App"
import MovieCard from './MovieCard'
export default function Movies() {
    const data=useContext(Context)
    const MovieDetails=data.movieDetails    
    console.log(MovieDetails)
  return (
    <div>
        <div>
        <h1>Header</h1>
        </div>
    <div className='d-flex  gap-2 flex-wrap'>
     
    <div className='d-flex flex-column gap-2 flex-wrap'>
        { MovieDetails.map((item)=>{
             return(
                <MovieCard key={item.id} title={item.MovieName} imgage={item.Details.VideoLink} />
             )
        })}
    </div>
     <div>
         <h1>Screen</h1>
     </div>
     <div>
         <h1>Actors</h1>
     </div>
    </div>
    </div>
  )
}
