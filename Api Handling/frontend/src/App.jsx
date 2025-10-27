import { useState , useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // const { products, error, loading } = customReactQueryHook('/api/products');
  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
   const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      setLoading(true);
      setError(false);
      try{const response = await axios.get('api/products?search='+search ,{
        signal: controller.signal,
      });
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);}
      catch(error){
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
          return;
        }
        setError(true); 
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }) ()

    //cleanup function to abort fetch on unmount or before next effect run
    return () => {
      controller.abort();
    }


  }, [search]);
  
  //   if (error) {
  //   return <div>Error loading products. Please try again later.</div>;
  // }
  // if (loading) {
  //   return <div>Loading products...</div>;
  // }
  return (
    <>
     <h1>API Handling in React</h1>
     <input type="text" placeholder='Search' value={search} 
            onChange={(e) => setSearch(e.target.value)}/>
     {loading && <p>Loading...</p>} 
     {error && <p>Error loading products. Please try again later.</p>}
      <h2>Number of Products are: {products.length}</h2>



  </>
  )
}

export default App


// const customReactQueryHook = (urlPath) => {
//   // const [products, setProducts] = useState([]);
//   // const [error, setError] = useState(false);
//   // const [loading, setLoading] = useState(false);
//   // useEffect(() => {
//   //   (async () => {
//   //     setLoading(true);
//   //     setError(false);
//   //     try{const response = await axios.get(urlPath);
//   //     console.log(response.data);
//   //     setProducts(response.data);
//   //     setLoading(false);}
//   //     catch(error){
//   //       setError(true); 
//   //       console.error("Error fetching products:", error);
//   //       setLoading(false);
//   //     }
//   //   }) ()
//   // }, []);
//   return { products, error, loading };
// }