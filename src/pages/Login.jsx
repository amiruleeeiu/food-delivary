import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Alert, Container } from 'react-bootstrap'
import CommonSection from '../components/CommonSection/CommonSection'
import { useUserAuth } from '../Context/UserAuthContext';
import {Link, useNavigate} from 'react-router-dom'
import GoogleButton from 'react-google-button'

const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const {logIn,googleSignIn} =useUserAuth();
    let navigate = useNavigate();


    const handleSubmit= async(e)=>{
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate('/checkout');
        } catch (err) {
        setError(err.message);
        }
    }

    const handleGoogleSignIn=async(e)=>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate('/')
            
        }catch(err){
            setError(err)
        }
    }

    return (
        <section>
            <CommonSection title='Login'/>
            <Container className=''>
                
            <div className="sign_up mb-2">
                    <Form className='' onSubmit={handleSubmit}>
                    <h1 className='text-center mb-3'>Log In</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100'>
                            LogIn
                        </Button>
                    </Form>

                    <h6 className='mt-2'>
                        Create Account
                        <Link to='/registar'><span>  Sign Up </span></Link>
                    </h6>
                </div>
                <p className='text-center'>Or</p>
                <div className='d-flex justify-content-center mt-2 google_btn'>
                    <GoogleButton className='text-center' onClick={handleGoogleSignIn}/>
                </div>

                
            </Container>
        </section>
    );
};

export default Login;