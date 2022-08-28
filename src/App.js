import React,{useEffect, useState} from "react";
import './App.css';
const App = () =>{
  
  const APP_KEY = "SgXNqcIvgBa7Nor7SvS9m1CPjuiDIQABmXo6A8j8uSniziTafo9sOgVqmkS9OcMk";
	
  useEffect(() =>{
       getRecipes();
  },[]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }
return(
  <div className="app">
   <form>
    <input className="search-bar" type="text"/>
    <button className="search-button"type="submit">
      search
    </button>
   </form>
  </div>
)
}


export default App;
