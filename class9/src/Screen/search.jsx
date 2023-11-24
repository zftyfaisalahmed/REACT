import React, { useState } from 'react'

const Search = (props) => {

    const [artist, setArtist] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        props.searchName(artist)
    }

  return (
        <div className="row">
            <div className="col-sm-12 col-md-12 offset-lg-3 offset-xl-3 col-lg-6 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="search" name="artist" id="artist" className='form-control' placeholder='Enter Artist Name' onChange={(e) => setArtist(e.target.value)} value={artist}/>
                                <button type="button" className='btn btn-outline-success' onClick={submitHandler}>
                                    <i className='bi bi-search'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Search