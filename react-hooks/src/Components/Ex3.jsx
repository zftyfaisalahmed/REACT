import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const url = 'https://jsonplaceholder.typicode.com'

 /*1. Mount
    useEffect(()=>{

    },[])
2. Update
    useEffect(()=>{

    },[dependancy])
3. UnMount
    useEffect(()=>{
      return () => {

      }
    }, [])
  */

  const Ex3 = (props) => {

  const[posts, setPosts] = useState([]);

  //pagination states
  const [currentItems, setCurrentItem] = useState([])  //current filtered data
  const [itemsOffset, setItemsOffset] = useState(0)// starting index

  const [pageCount, setPageCount] = useState(0) 

//useEffect => api call, initial values
const getPosts = async () => {
  await fetch(`${url}/posts`)
  .then(res=>res.json())
  .then(out => {
    // console.log('output =', out)
    setPosts(out)
  })
  .catch(err => console.log(err.message))
}
// console.log(posts)
useEffect(()=>{
  getPosts();
  // console.log(`get`, getPosts())
  const endOffset = itemsOffset + props.itemsPerPage

  const data = posts.slice(itemsOffset,endOffset)
  // console.log(`Data = `,data)
  setCurrentItem(data);
  // console.log(data)
  // const pCount = Math.ceil(posts.length / props.itemsPerPage)
  const pCount = Math.ceil(posts.length / props.itemsPerPage)
  setPageCount(pCount);
},[posts])

//page click handler, e = event
const handler = (e) => {
  console.log('item',e.selected)
  const newOffSet = Number(e.selected * props.itemsPerPage) % posts.length;
  console.log('newOffSet =', newOffSet)
  setItemsOffset(newOffSet)
}

  return (
    <div className='container'>
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">useEffect hook</h5>
          <p className="text-secondary">
            use Effects is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in
          </p>
          <p className="text-secondary">THAT GETS TRIGGER FOR  componentDidMount, componentWillUnmount lifecycle</p>
        </div>
      </div>

      <div className="row">
      {
        currentItems && currentItems.map((item,index) => {
          return(
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={index}>
              <div className="card my-2">
                <div className="card-header">
                  <h5 className="card-title text-center">{item.id} {item.title}</h5>
                </div>
                <div className="card-body">
                  <p className="text-success">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>

      <div className='row my-3'>
      <div className="col-xs-12 col-sm-12 offset-md-3 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-6">
        <ReactPaginate
        pageCount={pageCount}
        className='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        activeClassName='active'
        activeLinkClassName='active'
        onPageChange={handler}>

        </ReactPaginate>

      </div>
      </div>
    </div>
  )
}

export default Ex3
