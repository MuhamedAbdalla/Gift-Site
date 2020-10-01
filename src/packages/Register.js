import React from 'react';
import User from './User';
import Signin from './Signin'
import Host from './../Host'
import './Register.css'

class Register extends React.Component
{
    constructor()
    {
        super();
        this.user = new User();
        this.state = {
            signin: false,
            registered: false
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

    onAgeChange = (event) => {
        this.user.age = event.target.value;
    }

    onRegister = (event) => {
        event.preventDefault();
        //some validation in the future

        fetch(Host + '/register',{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.user.email,
                password: this.user.password,
                name: this.user.name,
                age: this.user.age
            })
        })
        .then(res => res.json())
        .then((res) => {
            if(res === 'success')
            {
                this.setState({registered: true}, () => {
                    this.render();
                });
            }
            else
            {
                // email already exist or entered wrong data
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    onSignin = (event) => {
        this.setState({signin: true}, () => {
            this.render();
        });
    }

    render()
    {
        if(this.state.signin)
        {
            return(
                <Signin/>
            )
        }
        else if(this.state.registered)
        {
            /*return(
                // landing page
            )*/
        }

        return( 
            <div className="card center">
                <div style = {{color: "gold"}}>
                    <h1> Register </h1>
                </div>

                <form className='container' method="post">
                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>Name</label>
                        <input onChange={this.onNameChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="text" placeholder="username" name="username" />
                    </div>
                    
                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>E-mail</label>
                        <input onChange={this.onEmailChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="text" placeholder="email" name="e-mail" />
                    </div>

                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>Password</label> 
                        <input onChange={this.onPasswordChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="password" placeholder="password" name="password" />
                    </div>

                    <div>
                        <label className="db f6 fw6 lh-copy" style = {{color: "gold"}}>Age</label>
                        <input onChange={this.onAgeChange} className="pa2 ma2 bg-transparent hover-bg-black hover-white" style = {{color: "gold"}} type="text" placeholder="age" name="age" />
                    </div>
                    
                    <input onClick={this.onRegister} className="b ph3 pv2 ma2 ba bg-transparent grow pointer" style = {{color: "pink"}} type="submit" value="Register"/>
                    
                    <div>
                       <div className="db b pv2 ma2 bg-transparent grow pointer" style = {{color: "gold"}} onClick={this.onSignin}>Have an account? Signin</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;