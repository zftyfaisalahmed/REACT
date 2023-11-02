import React from 'react'

class Ex9 extends React.Component{
    // constructor(props){
    //     super()
    // }

    render(){
        const {img, name, lorem} = this.props
        return(
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="bg-secondary text-white p-2 text-center">Example-9</h2>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <h1 className='bg-warning text-white p-2 text-center'>REACT CLASS COMPONENT DESTRUCTURING PROPS</h1>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                    {/* <div className='lead border p-3'>
                        {/* <p>{this.props}</p> }
                        <p>{img}</p>
                        <p>{name}</p>
                        <p>{lorem}</p>
                    </div> */}
                    <div className='card'>
                        <img src={img} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{lorem}</p>
                            <button className='btn btn-outline-secondary'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex9;