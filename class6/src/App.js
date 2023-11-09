import './App.css';
import Inline from './Components/Inline-style/Inline';
import ObjectStyle from './Components/Object-style/ObjectStyle';
import ObjectStyle1 from './Components/Object-style/ObjectStyle1';
import StyledComponent from './Components/styled-components/StyledComponent';

function App() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark">
                    <h1 className="display-4 text-white text-center rounded">
                       STYLE IN REACT
                    </h1>
                    <h2 className='globalClass'>INDEX.CSS (GLOBAL CSS FILE)</h2>
                    <h2 className="appClass">APP.CSS (APP CSS FILE : PARENT COMPONENT)</h2>
                </div>
            </div>
        </div>
        <Inline></Inline>
        <ObjectStyle></ObjectStyle>
        <ObjectStyle1></ObjectStyle1>
        <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
