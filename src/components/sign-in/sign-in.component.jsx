import render from 'dom-serializer';
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signinWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }
        catch(error) {
            console.log(error);
        }
    }
        
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit }>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        required 
                        label="Email"
                    />
                   
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange = {this.handleChange}
                        required 
                        label="Password"
                    />
                   <div className="buttons">
                    <CustomButton type='submit'> SIGN IN </CustomButton>
                    <CustomButton onClick={signinWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
