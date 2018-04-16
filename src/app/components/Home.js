import React from "react";

export class Home extends React.Component{

  constructor(props){
    super();
    this.state ={
      age: props.initialAge,
      status: 0
    };
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }
  render(){
    console.log(this.props);
    return(
      <div>
        <p>Im a new Component!</p>
        <p>User {this.props.name} and your age is {this.state.age} </p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-info">Make me older!</button>
      </div>
    );
  }
}
