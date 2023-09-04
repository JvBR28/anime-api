import React, { useEffect, useState } from "react";
import './components/style.css';
import { AnimeList } from "./components/AnimeList";
import { AnimeInfo } from "./components/AnimeInfo";

function App() {

  const [search, setSearch] = useState(``)

  const [animeData, setAnimeData] = useState()

  const [animeInfo, setAnimeInfo] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  useEffect(()=> {
    getData()
  },[search])

  return (
    <div className="App">
      <div className="header">
        <h1>MinhaListaAnimes</h1>
        <div className="search-box">
          <input type="search" placeholder="Busque um anime" 
          onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList animelist={animeData} 
            setAnimeInfo={setAnimeInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
