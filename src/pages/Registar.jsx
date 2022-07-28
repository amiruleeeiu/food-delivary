import React, { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Alert, Container } from 'react-bootstrap'
import CommonSection from '../components/CommonSection/CommonSection'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/registar.css'

const Registar = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const {signUp} =useUserAuth();

    let navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate('/login');
            
            } catch (err) {
            setError(err.message);
            }
        }

    return (
        <section>
            <CommonSection title='Sign Up'/>
            <Container className=''>
                
                <div className="sign_up">
                    <div>
                        <Form className='' onSubmit={handleSubmit}>
                        <h1 className='text-center mb-3'>Sign Up</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='w-100'>
                                SignUp
                            </Button>
                        </Form>

                        <h6 className='mt-2'>
                            Already have an account ?
                            <Link to='/login'><span>  Login </span></Link>
                        </h6>
                    </div>

                </div>
                
            </Container>
        </section>
    );
};

export default Registar;