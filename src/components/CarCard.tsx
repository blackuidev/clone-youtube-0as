import React from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast"; // Assuming useToast hook exists

interface CarCardProps {
  car: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ ...car, quantity: 1 });
    toast({
      title: "Item Added!",
      description: `${car.name} has been added to your cart.`,
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <img src={car.imageUrl} alt={car.name} className="w-full h-48 object-cover mb-4 rounded" />
      <div>
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-gray-600">${car.price.toFixed(2)}/day</p>
      </div>
      <Button onClick={handleAddToCart} className="mt-4 w-full">Add to Cart</Button>
    </div>
  );
};

export default CarCard;
