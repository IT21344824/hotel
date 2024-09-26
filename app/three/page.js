import Link from "next/link";

// Sample products data (in real projects, you might fetch this from an API)
const products = [
  {
    id: 1,
    name: "Burger",
    modelPath: "/models/burger.glb",
    price: 1500,
    category: "Fast Food",
    description: "A delicious 3D burger model."
  },
  {
    id: 2,
    name: "French Fries",
    modelPath: "/models/french.glb",
    price: 1200,
    category: "Fast Food",
    description: "Crispy French fries model."
  },
  {
    id: 3,
    name: "Ice Cream",
    modelPath: "/models/ice.glb",
    price: 800,
    category: "Dessert",
    description: "Cool ice cream 3D model."
  },
  {
    id: 4,
    name: "Submarine",
    modelPath: "/models/submarine.glb",
    price: 3100,
    category: "Vehicles",
    description: "A 3D model of a submarine."
  },
  {
    id: 5,
    name: "Wine Bottle",
    modelPath: "/models/wine.glb",
    price: 2200,
    category: "Beverages",
    description: "3D model of a wine bottle."
  },
  {
    id: 6,
    name: "Magic",
    modelPath: "/models/magic.glb",
    price: 2200,
    category: "Magic",
    description: "3D model of a wine bottle."
  }
];

export default function ProductList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.category}</p>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-xl font-bold text-red-500 mb-4">Rs. {product.price}</p>
            <Link href={`/three/${product.id}`}>
              view
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
