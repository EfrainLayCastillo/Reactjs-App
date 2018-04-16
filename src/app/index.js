import React from "react";
import { render } from "react-dom";

//Component
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {
  onGreet(){
    alert("Hello!");
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-md-10">
            <Header homeLink="Home"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-md-10">
            <Home name={"Max"} initialAge={22} greet={this.onGreet}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
