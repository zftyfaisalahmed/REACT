// library import
import React from "react";
import MyComponent1 from "./myComponents1";
// Syntax-1
// function MyComponent(){}
// export default MyComponent;

// Syntax-2
export default function MyComponent(){
    return(
        <div className="row">
            <div className="col">
                <h1 className="bg-secondary">Welcom to MyComponent function (child-params)</h1>
            </div>
            <MyComponent1></MyComponent1>
        </div>
    )
}