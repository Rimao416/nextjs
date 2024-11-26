// app/product/[productId]/page.tsx

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const { productId } = params
  const product=await fetch(`https://dummyjson.com/products/${productId}`).then(res=>res.json()) 
  console.log(product) 

  // Tu peux utiliser productId pour afficher la page
  return <div>{product.title}
  <h3>{product.description}</h3>
  <p>{product.price}</p>
  </div>;
}
