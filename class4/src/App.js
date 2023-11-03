import './App.css';
import User from './Components/user';
import users from './data/userss';
// import data from './data/userss'
// import App from './../../reactproject/src/App';

function Detail(){
    return (
        <div className="container">
                  <div className="row">
                         <div className="col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
                             <div className="bg-success text-center text-white p-3 rounded shadow">
                                 <h1>FUNCTIONAL COMPONENTS PROPS</h1>
                             </div>
                         </div>
                    </div>
                     {/* <users></users> */}
                    <User userData= {users} />
                </div>
    
       )
}

// function App(){
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
//                     <div className="bg-success text-center text-white p-3 rounded shadow">
//                         <h1>FUNCTIONAL COMPONENTS PROPS</h1>
//                     </div>
//                 </div>
//             </div>
//             {/* <users></users> */}
//         </div>
//     )
// }

export default Detail;
// export default App;