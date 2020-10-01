import React from 'react';
import User from './User';
import Host from './../Host'
import './Signin.css';
import Register from './Register';

class Signin extends React.Component
{
    constructor()
    {
        super();
        this.user = new User();
        this.state = {
            register: false,
            signedin: false
        }
    }

    onEmailChange = (event) => {
        this.user.email = event.target.value;
    }

    onNameChange = (event) => {
        this.user.name = event.target.value;
    }

    onPasswordChange = (event) => {
        this.user.password = event.target.value;
    }

    onSignIn = (event) => {
        event.preventDefault();
        //some validation in the future
        
        fetch(Host + '/signin',{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.user.email,
                password: this.user.password
            })
        })
        .then(res => res.json())
        .then((res) => {
            if(res === 'success')
            {
                this.setState({signedin: true}, () => { 
                    this.render()
                });
            }
            else
            {
                // wrong email or password
            }
        })
        .catch((err) => {
            console.log(err);
        });
        
    }
    
    onRegister = (event) => {
        this.setState({register: true}, () => {
            this.render();
        });
    }

    render()
    {
        if(this.state.signedin)
        {
            /*landing page
            return (<Signin/>)*/
        }
        else if(this.state.register)
        {
            return(
                <Register/>
            )
        }

        return(
            <div className="card center">
                <div style = {{color: "gold"}}>
                    <h1> Sign in </h1>
                </div>

                <form className='container' method="post">
                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>E-mail</label>
                        <input onChange={this.onEmailChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="text" placeholder="username" name="username" />
                    </div>

                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>Password</label>
                        <input onChange={this.onPasswordChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="password" placeholder="password" name="password" />
                    </div>
                    
                    <input onClick={this.onSignIn} style = {{color: "pink"}} className="b ph3 pv2 ma2 ba bg-transparent grow pointer" type="submit" value="Sign in"/>
                   
                    <div>
                       <div className="db b pv2 ma2 bg-transparent grow pointer" style = {{color: "gold"}} onClick={this.onRegister}>Need an account? REGISTER NOW</div>
                    </div> 
                </form>
            </div>
        );
    }
}

export default Signin;