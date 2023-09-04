import React from 'react'

export const AnimeList = ({animelist, setAnimeInfo}) => {
  return (
    <>
    {
        animelist ? (
            animelist.map((anime, index)=>{
                return(
                    <div className='card' key={index} onClick={()=>setAnimeInfo(anime)}>
                        <img src={anime.images.jpg.large_image_url} alt="ImagemAnime" />
                        <div className='anime-info'>
                            <h4>{anime.title}</h4>
                            <div className='overlay'>
                                <h4>{anime.title_japanese}</h4>
                                <h3>SINOPSE</h3>
                                <div className='synopsis'>
                                    <p>{anime.synopsis}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ): "Não encontrado"
    }
    </>
  )
}
