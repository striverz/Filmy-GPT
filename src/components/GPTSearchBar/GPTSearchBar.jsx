import React from 'react'
import "./GPTSearchBar.css"
import language from "../../utils/languagePrefered"
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from "../../utils/openai"
import { API_OPTIONS } from '../../utils/consts'
import { addGptMovies } from '../../redux/gptSlice'
import DotsLoading from '../DotsLoading/DotsLoading'


const GPTSearchBar = () => {

  const searchText=useRef(null);
  const dispatch=useDispatch();

  const searchMovieTMDB=async(movie)=>{

    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);

    

    const json=await data.json();

    console.log(json);
    return json.results;

  }

  const handleGPTSearch=async()=>{

    if(!searchText.current.value) {
      return <h1>null</h1>
    }
    //Entire ChatGPT Thingy
    const gptQuery = `Please act as a Movie Recommendation system and suggest 7 movies based on the following query: "${searchText.current.value}". Only provide the names of the movies, separated by commas, following this example format: "Gadar, Sholay, Don, Golmaal, Koi Mil Gaya".`;

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptSearchResults.choices) {
        return;
    }
    const gptResults = gptSearchResults.choices?.[0]?.message?.content.split(",");
    const promiseArray=gptResults.map((movie)=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovies({movieNames:gptResults,movieResults:tmdbResults}));
    
  }

  const handleDummySearch=async()=>{
    const gptDummyResults = ["Gangubai Kathiawadi","Eega","Bahubali","vikram","RRR",];
    const promiseArray=gptDummyResults.map((movie)=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({movieNames:gptDummyResults,movieResults:tmdbResults}));

  }


  const langKey=useSelector((store)=>store.config.language);
  return (
   

    
      

    
    <div className='gpt-searchbar'>
   
      <input 
      ref={searchText}
      placeholder={language[langKey].gptSearchPlaceholder}></input>
      <button onClick={handleGPTSearch}>{language[langKey].search}</button>

      
      {/* <button onClick={handleDummySearch}>{language[langKey].search}</button> */}
      
    </div>
    
  )
}

export default GPTSearchBar