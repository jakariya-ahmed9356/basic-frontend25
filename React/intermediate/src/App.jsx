import React, { useState , useEffect} from 'react'
import './App.css'
import Card from './components/Card';
import Profile from './Pages/Profile.jsx'
import ProductCard from './components/Product'
;
  function App() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    // useEffect(() => {
    //   fetch("https://fakestoreapi.com/products")
    //     .then(res => res.json())
    //     .then((data) => {
    //       setProducts(data);
    //       setLoading(false)
    //     })
    // }, []);

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
         <div className='flex gap-3'>
          <Card
            img="https://randomuser.me/api/portraits/men/33.jpg"
            title="Jakariya Aman"
            desc="Frontend Developer & Content Creator"
            className="max-w-sm bg-orange-300"
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
            className="max-w-sm bg-orange-300"
            actions={
              <button className="bg-blue-500 text-gray px-4 py-2 rounded">
              View More →
            </button>
            }
          />
         </div>


          <h1 className='text-center text-md mb-3 mt-3'>Product List</h1>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
           
            {products.map((product) => (
              <ProductCard
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              disPrice={19.99}
              desc="This is a great product."
              onAddToCard={() => alert('Added to cart')}
              className="max-w-xs"
            />
            ))}

          </div>



          
      </div>

    )
  }

export default App
