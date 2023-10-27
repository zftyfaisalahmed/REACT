import React from "react";

function App() {

  const heading1 = React.createElement("h1", {id: "title1" }, "Heading-1")
  const heading2 = React.createElement("h2", {id: "title1" }, "Faiziii")
  const section = React.createElement("section", {id: "title1" }, [
    heading1,
    heading2
  ])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-primary p-3 text-white text-center">Welcome to React</h1>
          {heading1}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {section}
        </div>
      </div>
    </div>
  );
}

export default App;
