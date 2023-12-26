import React from 'react'
import { useState } from 'react'

const Create = () => {
  const [blog, setBlog] = useState({
    title : "",
    subTitle : "",
    image : "",
    content : ""
  })

  const readValue = (e) => {
    const {name, value} = e.target;
    setBlog({...blog, [name] : value})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('data =', blog)
  }
  return (
    <div className="container">
    i <div className="row">
          <div className="col-md-12">
              <h3 className="display-3 text-dark text-center">
                  Create Blog
              </h3>
          </div>
      </div>


      <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='card'>
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={submitHandler}>
                            <div className="form-control">
                                <label htmlFor="title">
                                    Title
                                </label>
                                <input type="text" name="title" id="title" className='form-control' required value={blog.title} onChange={readValue} placeholder='blog title'/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="subTitle">
                                    Sub Title
                                </label>
                                <input type="text" name="subTitle" id="subTitle" className='form-control' required value={blog.subTitle} onChange={readValue} placeholder='sub title'/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="image">
                                    Image Url
                                </label>
                                <input type="url" name="image" id="image" className='form-control' required value={blog.image} onChange={readValue} placeholder='image path'/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="content">
                                    Content
                                </label>
                                <textarea name="content" id="content" cols="30" rows="5" className='form-control' required value={blog.content} onChange={readValue} placeholder='blog content'></textarea>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Create" className='btn btn-outline-success'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Create