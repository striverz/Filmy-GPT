import React from 'react'
import "./GPTSearchBar.css"
import language from "../../utils/languagePrefered"
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from "../../utils/openai"
import { API_OPTIONS } from '../../utils/consts'
import { addGptMovies } from '../../redux/gptSlice'


const GPTSearchBar = () => {

  const searchText=useRef(null);
  const dispatch=useDispatch();

  const searchMovieTMDB=async(movie)=>{

    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);

    const json=await data.json();
    return json.results;

  }

  const handleGPTSearch=async()=>{

    

    //Entire ChatGPT Thingy
    // const gptQuery =
    // "Act as a Movie Recommendation system and suggest some movies for the query : " +
    // searchText.current.value +
    // ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResults.choices) {
    // }
    // console.log(gptResults.choices?.[0]?.message?.content);
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // console.log(gptMovies);


    //HardCoded Data
    const gptResults=["Zindagi Na Milegi Dobara","Yeh Jawaani Hai Deewani","3 Idiots","Dil Chahta Hai","English Vinglish","Chhichhore","Queen"];

    const promiseArray=gptResults.map((movie)=>searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovies({movieNames:gptResults,movieResults:tmdbResults}));
    
  }

  const langKey=useSelector((store)=>store.config.language);
  return (
    <div className='gpt-searchbar'>
      <input 
      ref={searchText}
      placeholder={language[langKey].gptSearchPlaceholder}></input>
      <button onClick={handleGPTSearch}>{language[langKey].search}</button>
    </div>
  )
}

export default GPTSearchBar