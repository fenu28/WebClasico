import React, { useState, useRef } from 'react'
import {auth} from '../../firebase'
import firebase from 'firebase/app'
import '../../utilities/stylesheets/Login.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Login = () => {
    const [sign, setSign] = useState('Sign In');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user)=>{
            console.log(user);
        }).catch((error)=>{
            window.alert(error.message);
        })

    }

    
    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user)=>{
            console.log(user);
        }).catch((error)=>{
            window.alert(error.message);
        })

    }


    const handleSign = () => {
        if(sign === 'Sign In'){
            setSign('Sign Up');
        } else{
            setSign('Sign In');
        }
    }

    const gSignIn = () => {
        console.log("gSignIn")
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="login-form">
            
            <form action="">
                <h1>{sign}</h1>
                
                <input ref={emailRef} type="email" name="email" id="email" placeholder="Enter email address"/>
                

                <input ref={passwordRef} type="password" name="password" id="password" placeholder="Enter password"/>
                
                {sign === 'Sign In' ? 
                (<button className="submit" type="submit" onClick={login}> {sign} </button>) 
                : (<button className="submit" type="submit" onClick={register}> {sign} </button>)}
            </form>
            <button id = "gSignIn" type="submit" onClick={gSignIn}> Sign In With Google <svg className = "svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></button>
            <div>
                {sign === 'Sign In' ? (
                    // <h4><button id = "gSignIn" type="submit" onClick={gSignIn}> Sign In With Google</button></h4>
                    <>
                    <h4>
                        New to WebClassico?&ensp;
                        <span className="span" onClick={handleSign}>
                            Sign Up now.
                        </span>
                    </h4></>) : (
                <h4>
                    Already a user ?&ensp; 
                    <span className="span" onClick={handleSign}>
                    Sign In now.
                    </span>
                </h4>
                )} 
                
            </div>
        </div>
    )
}

export default Login
