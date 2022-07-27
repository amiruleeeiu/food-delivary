import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { Container } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/CommonSection/CommonSection'
import {useDispatch, useSelector} from 'react-redux'
import firebase from "firebase/app";
import { authActions } from '../app/auth-slice/auth-slice';
import '../styles/login.css';

const Login = () => {

    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth=getAuth(app)

    const dispatch=useDispatch();
    const user=useSelector(state=>state.auth.user);

    useEffect(() => {
        
        auth.onAuthStateChanged((authUser) => {
            if(authUser){
                dispatch(authActions.signIn({
                    name:authUser.displayName ? authUser.displayName : '',
                    photoURL:authUser.photoURL ? authUser.photoURL : '',
                    email:authUser.email ? authUser.email : ''
                    }))
                }
            } 
        );
    }, []);

            
    const handleSignIn=()=>{ 
        console.log('login');
        dispatch(authActions.signIn({isloggedIn:'true'}))
        const auth = getAuth(app);
                signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    localStorage.setItem('name',user.displayName)
                    localStorage.setItem('email',user.email)
                    localStorage.setItem('photoURL',user.photoURL)
                    alert(`${user.displayName} Successfully Login`);
                }).catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
    }

   const handleLogout=()=>{
    signOut(auth).then(() => {
        localStorage.setItem('name','')
                    localStorage.setItem('email','')
                    localStorage.setItem('photoURL','')
      }).catch((error) => {
        // An error happened.
      });
   }
    
    return (
        <Helmet title='login'>
            <CommonSection/>
            <Container>
                 <div className="login" style={{marginTop:'50px'}}>

            </div>
                
                {
                    user.email ? 
                    <div className='user_image'>
                        <button onClick={handleLogout}>Logout</button>
                        <img src={user.photoURL} alt="" className=''/>
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                    </div>
                    :
                    <div>
                        <button onClick={handleSignIn}>SignIn with Google</button>
                    </div>
                }
            </Container>
        </Helmet>
    );
};

export default Login;