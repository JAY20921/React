import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
  {
    "id": 1,
    "name": "SmartHome LED Bulb",
    "price": 1200,
    "image": "https://images.unsplash.com/photo-1603052876681-9b8f5d8b8b3d",
    "description": "A smart LED bulb compatible with Alexa and Google Assistant, offering adjustable brightness and color settings."
  },
  {
    "id": 2,
    "name": "EcoClean All-Purpose Cleaner",
    "price": 850,
    "image": "https://images.unsplash.com/photo-1561948955-9e8a0e8a8e8e",
    "description": "An eco-friendly, non-toxic cleaner suitable for various surfaces, ensuring a safe environment for your home."
  },
  {
    "id": 3,
    "name": "PureGlow Facial Serum",
    "price": 1500,
    "image": "https://images.unsplash.com/photo-1561948955-9e8a0e8a8e8e",
    "description": "A rejuvenating facial serum infused with natural ingredients to hydrate and brighten the skin."
  }
];


  if(req.query.search) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(req.query.search.toLowerCase()));
        res.send(filteredProducts);
        return;
    }   
  setTimeout(() => {
  res.send(products);
}, 3000);


});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});