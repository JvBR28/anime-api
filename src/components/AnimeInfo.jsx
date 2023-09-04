import React from 'react'

export const AnimeInfo = (props) => {
    const {title, images:{jpg:{large_image_url}}, source, rank, score, popularity, members, status, rating, duration}=props.animeInfo
  return (
    <>
        <div className='anime-content'>
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /> <br /><br />
            <div className='info'>
                <h3>#Ranking:: {rank}</h3>
                <h3>#Nota: {score}</h3>
                <h3>#Popularidade: {popularity}</h3><hr/><br />
                <h4>#Membros: {members}</h4>
                <h4>#Fonte: {source}</h4>
                <h4>#Duração: {duration}</h4>
                <h4>#Status: {status}</h4>
                <h4>#Classificação: {rating}</h4>
            </div>
        </div>
    </>
  )
}
