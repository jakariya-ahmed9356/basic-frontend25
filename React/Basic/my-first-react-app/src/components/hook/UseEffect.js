/**
 * useEffect() lets you perfom side effects in functional components
 * Side Effects = Code that interacts with the outside 
 * world(API call, timers, localStorage, event listeners)
 *  
 * useEffect(() => {
 *  // Side-effect code here
 * 
 * return () => {
 *  // Optional cleanup(live remove event listener)
 * };
 * }, [dependencies]);
 * 
 */

import { useEffect, useState } from "react";


function WelcomeMsg() {
    const[msg, setMsg] = useState('');

    useEffect(() => {
        setMsg('Welcome to React Hook useEffect');
    }, []);

    return <h1>{msg}</h1>

}

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }

        fetchProducts();

    }, []);

    return(
        <ul>
            {/* {products.map(product => {
                return <li>{product.title}</li>
            })} */}

            {
                products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))
            }
        </ul>
    );

}



function CleanUP() {
    useEffect(() => {
        // const interval = setInterval(() => {
        //     console.log('Running every second');
        // }, 1000);

        // return () => clearInterval(interval);
    }, []);
}



export {
    WelcomeMsg, ProductList, CleanUP
}















