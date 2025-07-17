/**
 * useState() is a React Hook that allows you to create
 * and manage local state(a value, object, array) inside 
 * functional components
 * 
 * const [state, setState] = useState(initialValue);
 * state =>  the current value
 * setState => a function to update the value
 * initialValue => the default starting value
 *
 */

import { useState } from "react";

// Increment counter 

function Increment() {
    const [count, setCount] = useState(0);


    return(
        <div className="text-center">
            <button onClick={() => setCount(count - 1)}>Decrement(-)</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment(-)</button>
        </div>
    );
}


// Login Form
function LoginForm() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Basic Validation
        if (!email || !password) {
            setError('Both fields are required');
            setSubmitted(false);
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            setSubmitted(false);
            return;
        }

        setError('');

        console.log(`Email: ${email}, Password: ${password}`);

        setSubmitted(true);
        setEmail('');
        setPassword('');
    }

    return(
        <div className="my-5 mx-auto shadow p-4 w-100" style={{maxWidth:'400px'}}>
            <h2 className="text-center text-warning">Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"
                className="p-2 w-100 mb-2"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input type="password" placeholder="********"
                className="p-2 w-100 mb-2"
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="btn btn-warning text-white py-2 px-4 mt-2" type="submit">Login</button>
            </form>
            {error && <p className="text-danger mt-2"> {error} </p>}
            {submitted && <p className="text-success font-bold">Login Success!</p>}
        </div>
    );





}




export {
    Increment,LoginForm
}









