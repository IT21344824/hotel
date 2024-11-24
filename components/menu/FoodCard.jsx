import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

const FoodCard = ({ item, handleAddToCart }) => {
    return (
        <div className="max-w-xs rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            {/* Food Image */}
            <div
                style={{ '--image-url': `url(${item.img})` }}
                className="h-56 w-full bg-[image:var(--image-url)] bg-cover bg-center rounded-t-lg"
            />

            {/* Food Details */}
            <div className="p-4">
                {/* Dish Name */}
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>

                {/* Price */}
                <p className="text-lg font-bold text-orange-500">LKR : {item.price}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>

                {/* Add to Cart Button */}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center gap-2 p-2 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition-all"
                    >
                        <BsCartPlusFill size={20} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
