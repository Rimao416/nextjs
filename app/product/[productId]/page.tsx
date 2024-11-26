// app/product/[productId]/page.tsx

export async function generateStaticParams() {
  const products = await fetch('https://dummyjson.com/products').then(res => res.json());

  // Assure-toi que `productId` est bien une chaîne de caractères
  return products.products.map((product: { id: number }) => ({
    productId: String(product.id), // Convertir l'id en string
  }));
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
  // Affichage de productId qui est maintenant une chaîne de caractères
  return <div>{params.productId}</div>;
}