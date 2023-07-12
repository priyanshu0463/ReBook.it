import React,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from "../contexts/AuthContext"

export default function Signup() {
    const emailRef= useRef()
    const passwordRef= useRef()
    const passwordConfirmRef= useRef();
    const {signup,currentUser}=useAuth();
    const [error,setError]=useState('');
    const [loading,setloading]=useState(false)

    async function handleSubmit(e){
        e.preventDefault()

         if(passwordRef.current.value !== passwordConfirmRef.current.value){return setError('password donot match')}
         try {
            setError("")
            setloading(true)
           await signup(emailRef.current.value,passwordRef.current.value)
         } catch{
            setError("failed to create an  account")
         }
         setloading(false) 
        
    } 

    return (
    <>
    <Card>
       <Card.Body>
        <h2>signup</h2>
        {currentUser && currentUser.email}
        {error && <Alert varient='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>  
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>  
            <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required/>
            </Form.Group> 
            <Button disabled={loading} className="w-100" type="submit">Sign up</Button> 
        </Form>
       </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account? Log In
    </div>
    </>
  );
}
