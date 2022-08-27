import React,{useEffect, useState} from "react";
import './App.css';
const App = () =>{
  const APP_ID = "441c03af";
  const APP_KEY = "8a5bc81cbc8aedeeb03b59e9032a57a2";
	
  useEffect(() =>{
       getRecipes();
  },[]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }
return(
  <div>
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
