import React from 'react'

class Ex10 extends React.Component{
    // constructor(props){
    //     super()
    // }

    // Example-2
    static defaultProps ={
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvs3Bn_DyshKCi2hwXHnHzt0W532KZJHNlhg&usqp=CAU" ,
        name: "Nami" ,
        lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut quos labore consequuntur veniam id illo nulla, eum culpa soluta voluptatum expedita esse nam laborum qui rerum corporis, doloremque laboriosam."
    }

    render(){
        const {img, name, lorem} = this.props
        return(
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="bg-secondary text-white p-2 text-center">Example-10</h2>
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

// Example-1
// Ex10.defaultProps ={
//     img: "https://w0.peakpx.com/wallpaper/351/770/HD-wallpaper-sukuna-anime-jujutsu-kaisen.jpg" ,
//     name: "Nike" ,
//     lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut quos labore consequuntur veniam id illo nulla, eum culpa soluta voluptatum expedita esse nam laborum qui rerum corporis, doloremque laboriosam."
// }

export default Ex10;