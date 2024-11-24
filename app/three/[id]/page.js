"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import ARModelViewer from "@/components/3D/ARModelViewer";

// Sample products data
const products = [
  {
    id: 1,
    name: "Burger",
    modelPath: "/models/burger.glb",
    price: 1500,
    category: "Fast Food",
    description: "A delicious 3D burger model.",
  },
  {
    id: 2,
    name: "French Fries",
    modelPath: "/models/french.glb",
    price: 1200,
    category: "Fast Food",
    description: "Crispy French fries model.",
  },
  {
    id: 3,
    name: "Ice Cream",
    modelPath: "/models/ice.glb",
    price: 800,
    category: "Dessert",
    description: "Cool ice cream 3D model.",
  },
  {
    id: 4,
    name: "Submarine",
    modelPath: "/models/submarine.glb",
    price: 3100,
    category: "Vehicles",
    description: "A 3D model of a submarine.",
  },
  {
    id: 5,
    name: "Wine Bottle",
    modelPath: "/models/wine.glb",
    price: 2200,
    category: "Beverages",
    description: "3D model of a wine bottle.",
  },
  {
    id: 6,
    name: "Magic",
    modelPath: "/models/magic.glb",
    price: 2200,
    category: "Beverages",
    description: "3D model of a wine bottle.",
  },
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
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
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

  // Render AR model viewer if the user opts for AR
  if (viewInAR) {
    return (
      <ARModelViewer
        modelPath={product.modelPath}
        modelScale={[0.1, 0.1, 0.1]}
      />
    );
  }

  // Normal 3D view
  return (
    <div className="flex h-full w-full flex-col items-start lg:flex-row">
      {/* Left Section: 3D Model Viewer - 80vh height and 50% of width */}
      <div className="mb-28  mt-28 h-[80vh] w-full border border-gray-500 lg:ml-2 lg:w-1/2">
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

      {/* Right Section: Product Details */}
      <div className="relative mb-48 mt-8 h-[80vh] w-full overflow-auto rounded-xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl lg:ml-2 lg:mt-28 lg:w-1/2">
        {/* Product Title */}
        <h1 className="mb-6 text-3xl font-extrabold tracking-wider text-gray-900">
          {product.name}
        </h1>

        {/* Category */}
        <div className="mb-4 flex items-center space-x-3 text-gray-600">
          <span className="text-lg font-semibold">Category:</span>
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 shadow-md">
            {product.category}
          </span>
        </div>

        {/* Description */}
        <p className="mb-4 text-lg leading-relaxed text-gray-600">
          {product.description}
        </p>

        {/* Price */}
        <p className="mb-4 flex items-center text-2xl font-bold text-red-500">
          <span className="mr-2 text-3xl">Rs.</span> {product.price}
        </p>

        {/* Action Buttons */}
        <div className=" flex gap-4">
          {/* Add to Cart Button */}
          <button className="flex w-1/2 transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.341 2M7 13h10l1.34-8H5.659L7 13zm0 0l1 9h8l1-9M16 13H8m8 0l1 9H7l1-9M5 4h14M9 4h6"
              />
            </svg>
            Add to Cart
          </button>

          {/* Add Reviews Button */}
          <button className="flex w-1/2 transform items-center justify-center gap-2 rounded-lg border-2 border-orange-500 bg-transparent px-6 py-3 font-semibold text-gray-900 shadow-lg transition hover:scale-105 hover:shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16h16V4H4zM7 10h10M7 14h10M7 18h10"
              />
            </svg>
            Add Review
          </button>

          {/* AR Support Button */}
          {isARSupported && (
            <button
              className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-2xl"
              onClick={() => setViewInAR(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v16h16V4H4zM7 10h10M7 14h10M7 18h10"
                />
              </svg>
              View in AR
            </button>
          )}
        </div>

        {/* Customer Reviews */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {/* Review 1 */}
            <div className="flex items-start">
              <img
                src="/avatars/user1.png"
                alt="Jane Doe"
                width={48}
                height={48}
                className="mr-4 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-700">Jane Doe</h3>
                <div className="mb-2 flex items-center">
                  {/* Star Rating */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.978c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.978a1 1 0 00-.364-1.118L2.362 9.405c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.978z" />
                  </svg>
                  <span className="ml-2 text-gray-600">4.5</span>
                </div>
                <p className="text-gray-600">
                  Amazing product! Highly recommend to everyone.
                </p>
              </div>
            </div>
            {/* Review 2 */}
            <div className="flex items-start">
              <img
                src="/avatars/user2.png"
                alt="John Smith"
                width={48}
                height={48}
                className="mr-4 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  John Smith
                </h3>
                <div className="mb-2 flex items-center">
                  {/* Star Rating */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.978a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.978c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.978a1 1 0 00-.364-1.118L2.362 9.405c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.978z" />
                  </svg>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-600">
                  Exceeded my expectations. Great quality and design.
                </p>
              </div>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
