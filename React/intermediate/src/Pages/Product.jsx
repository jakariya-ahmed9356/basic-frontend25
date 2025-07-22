
import { useEffect, useState } from "react";
import Home from "./Home";
import ProductCard from "../components/Product";

export default function Product() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <div className="lg:max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-left px-4"> All Products </h1>
        <div className='lg:max-w-7xl grid mx-auto space-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
            {products.map((product) => (
                <ProductCard 
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    onAddToCard = {() => alert(`Added ${product.title} to Card!`)}
                />
            ))}

        </div>
        </div>
        
    );


}