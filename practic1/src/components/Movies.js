import React,{ useContext,useState}  from 'react'
import {Context} from "../App"
import MovieCard from './MovieCard'
import Screen from './Screen'
import { useParams } from 'react-router-dom'
export default function Movies() {
    const data=useContext(Context)
    const MovieDetails=data.movieDetails  
    const filterDetails=data.filterDetails  
    console.log(MovieDetails)
    const [source,setSource]=useState()
    const [director,setDirector]=useState(null)
    const [actors,setActors]=useState([])
    const [filter, setFilter] = useState("All");
   const Params=useParams()
   React.useEffect(() => {
    if(Params.id){
      
      let url=data.movieDetails.find((item) => item.MovieID.toString() === Params.id);
      setSource((prevSource) => {
        if (prevSource !== url.Details.VideoLink) {
          return url.Details.VideoLink;
        }
        return prevSource;
      });
     
      setDirector(url.Details.DirectorName)
      setActors(url.Details.ActorsNames)
    }
    console.log('source:', source);
  }, [Params.id])

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredMovies = MovieDetails.filter((movie) => {
    if (filter === "All") {
      return true;
    }
    if (movie.Details.DirectorName === filter) {
      return true;
    }
    if (movie.Details.ActorsNames.includes(filter)) {
      return true;
    }
    return false;
  });

  return (
    <div> 

        <form>
        <select value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            {MovieDetails.map((movie) => {
              return (
                <React.Fragment key={movie.MovieID}>
                  <option value={movie.Details.DirectorName}>
                    {movie.Details.DirectorName}
                  </option>
                </React.Fragment>
              );
            })}
          </select>
        </form>
        <div>
        <h1>director:{director}</h1>
        </div>
    <div className='d-flex  gap-2 flex-wrap'>
     
    <div className='d-flex flex-column gap-2 flex-wrap'>
        { filteredMovies.map((item)=>{
             return(
                <MovieCard   id={item.MovieID} key={item.MovieID} title={item.MovieName} image={item.Details.VideoLink} />
             )
        })}
    </div>
     <div>
       <Screen  source={source}/>
     </div>
     <div>
         <h2>Actors</h2>
         <ul>

         {
           actors.map((item)=>{
             return(
                <li>{item}</li>
             )
           })
         }
         </ul>
     </div>
    </div>
    </div>
  )
}
