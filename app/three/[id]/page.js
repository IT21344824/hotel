"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import ARModelViewer from "@/components/3D/ARModelViewer";

// Sample products data (you may load this from an external source in a real project)
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
  }
];

export default function ProductScreen() {
  const params = useParams(); 
  const { id } = params;
  const [isARSupported, setIsARSupported] = useState(false);
  const [viewInAR, setViewInAR] = useState(false); // To track AR view state

  // Find the product by id
  const product = products.find((p) => p.id === Number(id));

  // Check if AR is supported
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  // Function to load the respective model
  function Model(props) {
    const group = useRef();
    const { scene } = useGLTF(product.modelPath); // Load the model dynamically based on the product

    return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={scene} />
      </group>
    );
  }

  // If in AR view, show the ARModelViewer
  if (viewInAR) {
    return <ARModelViewer modelPath={product.modelPath} modelScale={[0.1, 0.1, 0.1]} />;
  }

  // Normal 3D view
  return (
    <div className="flex flex-col lg:flex-row items-start w-full h-full">
      {/* Left Section: 3D Model Viewer - 80vh height and 50% of width */}
      <div className="w-full lg:w-1/2 h-[80vh] border border-gray-500 mt-6">
        <Canvas className="relative h-full w-full">
          {/* Lighting setup */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <directionalLight position={[-10, -10, -10]} intensity={1.5} />

          {/* OrbitControls allow rotating and zooming */}
          <OrbitControls enableZoom={true} />

          {/* Load the 3D Model with suspense */}
          <Suspense fallback={null}>
            <Model scale={1} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Right Section: Product Details - Half width and scrollable if needed */}
      <div className="w-full lg:w-1/2 mt-20 lg:mt-0 lg:ml-8 p-6 overflow-auto h-[100vh]">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        <div className="text-gray-600 mb-4">
          <span className="font-semibold">Categories:</span>{" "}
          <span className="text-gray-800">{product.category}</span>
        </div>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <p className="text-3xl font-bold text-red-600 mb-6">Rs. {product.price}</p>

        {/* Add to Cart or Update Button */}
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mb-4">
          Add to Cart
        </button>

        {/* Conditionally display the AR button */}
        {isARSupported && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setViewInAR(true)} // Switch to AR view
          >
            View in AR
          </button>
        )}
      </div>
    </div>
  );
}
