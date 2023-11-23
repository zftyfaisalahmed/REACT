import React, { useEffect, useState } from 'react'
import token from '../Config/token';
import Artist from './../Screen/Artist';

//useState => state hook, useEffect => a hook to call api request
// https://api.spotify.com/v1/search?q=spb&type=artist

const URL = 'https://api.spotify.com';

const Music = () => {
  const [artist, setArtist] = useState([])

  const searchArtist = async(artistName) => {
    await fetch(`${URL}/v1/search?q=${artistName}spb&type=artist`,{
      method : 'GET',
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(out => {
      console.log(out.artists.items)
      setArtist(out.artists.items)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    searchArtist('Ilayaraj');
  }, [])


  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <div className="display-3 text-success text-center">
            Music
          </div>
        </div>
      </div>
      <div className="row">
        {
          artist.map((item, index) => {
            return(
              <Artist key={index} {...item}></Artist>
            )
          })
        }
      </div>
      {/* {
        artist.map((item, index => {
          return(

          )
        }))
      } */}
    </div>
  )
}

export default Music