import Card from '../components/Card';
import ProductCard from '../components/Product'
import { useState, useEffect } from 'react';


export default function home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

  // Fetch product by fake Produc API
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }
    
    useEffect(() => {
      fetchProducts();
    }, []);


     return (
        <div>
            {/* profile section  */}
            <div className='lg:max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 space-x-4 space-y-6'>
            <Card
                img="https://randomuser.me/api/portraits/men/33.jpg"
                title="Jakariya Aman"
                desc="Frontend Developer & Content Creator"
                className="bg-orange-300"
                actions={
                <button className="bg-blue-500 text-gray px-4 py-2 rounded">
                View More →
                </button>
                }
            />

            <Card
                img="https://randomuser.me/api/portraits/men/35.jpg"
                title="Aman Arian"
                desc="  Full Stack Developer & Content Creator"
                className="bg-orange-300"
                actions={
                <button className="bg-blue-500 text-gray px-4 py-2 rounded">
                View More →
                </button>
                }
            />

            <Card
                img="https://randomuser.me/api/portraits/men/35.jpg"
                title="Aman Arian"
                desc="  Full Stack Developer & Content Creator"
                className="bg-orange-300"
                actions={
                <button className="bg-blue-500 text-gray px-4 py-2 rounded">
                View More →
                </button>
                }
            />

            <Card
                img="https://randomuser.me/api/portraits/men/33.jpg"
                title="Jakariya Aman"
                desc="Frontend Developer & Content Creator"
                className="bg-orange-300"
                actions={
                <button className="bg-blue-500 text-gray px-4 py-2 rounded">
                View More →
                </button>
                }
            />

            </div> {/* end profile section  */}

                {/* Product section  */}
            <h1 className='text-3xl font-bold my-6'>Product List</h1>
            <div className='lg:max-w-7xl grid mx-auto space-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
            
                {products.map((product) => (
                    <ProductCard 
                        img={product.image}
                        title={product.title}
                        price={product.price}
                        onAddToCard={() => alert(`Added ${product.title} to cart`)}
                    />
                ))}

            </div>
        </div>
     );


}