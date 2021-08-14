import React, { Component } from 'react'
import './sign-in.style.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

            error: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const {email, password} = this.state

        try {
            //signInWithEmailAndPassword => method dari auth
            const response = await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            this.setState({error})
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        // console.log(this.state);
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have account oke lah kalau begitu</h2>
                <span>Sign in with your email and password</span>
                {this.state.error ? (<div className="alert"><span class="closebtn" onClick={()=> this.setState({error:false})}>&times;</span> Sorry, your email or password wrong!</div>) : ''} 
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email}
                        handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
