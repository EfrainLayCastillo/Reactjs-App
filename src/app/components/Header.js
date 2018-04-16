import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">React JS</a>
          <div className="navbar-header">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
