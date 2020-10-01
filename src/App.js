import React from 'react';
import Card from './packages/Card';
import Tag from './packages/Tag';
import Register from './packages/Register';
import Signin from './packages/Signin';
import ParticlesEffect from './packages/Particles';
import './App.css'

class App extends React.Component
{
    /*
        <div className="tc">
          <ParticlesEffect/>  
          <Signin/>
        </div>
      */

  constructor()
  {
    super();
    this.state = {
      movie: "",
      signIn: false,
      register: false
    };
/*
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=aebb2c77")
    .then(res => res.json())
    .then((res) => {
      this.setState({movie: res}, () =>
      {
        this.render();
      })
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });*/
  }

  redirectToSingIn = (event) => {
    this.setState({signIn: true, register: false}, () => this.render());
  }

  redirectToRegister= (event) => {
    this.setState({signIn: false, register: true}, () => this.render());
  }

  redirectToHome= (event) => {
    this.setState({signIn: false, register: false}, () => this.render());
  }

  render(){
     return(
      <div>
        <div className="topnav">
          <a href="#home" onClick={this.redirectToHome} className="active">Home</a>
          <a href="#Register" onClick={this.redirectToRegister} className="active" style = {{float: "right"}}>Register</a>  
          <a href="#Signin" onClick={this.redirectToSingIn} className="active" style = {{float: "right"}}>Sign in</a>
        </div>  

        <br></br>

        {this.state.signIn && <div className="tc"> <Signin/> </div>}
        {this.state.register && <div className="tc"> <Register/> </div>}

      </div>
    );
  }
}

export default App;
