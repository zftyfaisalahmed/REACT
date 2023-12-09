import React from "react";

function testFunction(name){
  return name.toLowerCase();
}

function App() {

  const title = "Welcome to react ";
  const endTitle = "Be-practical tech sol..!"

  const heading1 = React.createElement("h1", {id: "title1" }, "Heading-1")
  const heading2 = React.createElement("h2", {id: "title1" }, "Faiziii")
  const container = React.createElement("section", {id: "container" }, [
    heading1,
    heading2
  ])

  // object
  const websiteLint = {
    url : "https://www.youtube.com"
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-primary p-3 text-white text-center">{title + endTitle}</h1>
          {heading1}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="bg-secondary p-3 text-white text-center">
          {heading1}
          {heading2}
          {container}

          <a href={websiteLint.url} target="_blank">
            youtube
          </a>{" "}
          <br />
          FUNCTION CALLING  : {testFunction(title)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
