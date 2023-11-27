import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import token from '../Config/token';

const URL = "https://api.spotify.com"

const Track = () => {

  const [tracks, setTracks] = useState([]);

  const params  = useParams();

  const [view, setView] = useState(false);

  const searchTracks = async () => {
    await 
    fetch(`${URL}/v1/artists/${params.artistId}/top-tracks?market=IN`, {
      method: `GET`,
      headers : {
        Authorization : `Bearer ${token}`,
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(out => {
      setTracks(out.tracks);
      console.log(out)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    searchTracks()
  },[]);

  const trackIcon =  (url)  => {
    if(! url)
      return <strong className='text-danger'>No Tracks</strong>
    else
      return <strong className='text-success'>Tracks</strong>
  } 

  const msTotime = (ms) => {
    let mSec = ms % 1000;
    let sec = Math.floor((ms/1000) % 60)
    let min = Math.floor((ms/ (60 * 1000) % 60))
    return `${min}:${sec}:${mSec}`
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col div display-3 text-success text-center">
          Track
        </div>
      </div>

      <div className='row'>
        <div className="col">
          <butt className="btn btn-outline-secondary float-end" onClick={() => setView(!view)}>
            {view ? 'LIST' : 'CARD'}
          </butt>
        </div>
      </div>

      <div className='row'>
        {
          tracks.map((item, index) => {
            const {id, name, album, preview_url, duration_ms} = item

            return (
              <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3' token={index}>
                {
                  view ? (
                    <div className='card'>
                  <img src={album ? album.images[0].url : ''} alt="" className='img-fluid card-img-top' style={{height : "350px"}}/>
                  <div className='card-body'>
                    <h5 className='text-success text-center'>
                      { name }
                    </h5>
                    <div className='card-footer'>
                      { trackIcon(preview_url) }
                    </div>
                  </div>
                </div>
                  ) : (
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-md-3 col-sm-3">
                            <img src={album ? album.images[1].url : ''} alt="" className='img-fluid rounded-circle'/>
                          </div>
                          <div className="col-md-6 col-sm-6 text-center">
                            <h6 className='text-success text-uppercase'>
                              {name}
                            </h6>
                            <p className='text-danger float-center'>
                              Time : {msTotime(duration_ms)}
                            </p>
                          </div>
                          <div className='col-md-3 col-sm-3'>
                            <span className='float-end'>
                              {trackIcon(preview_url)}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Track