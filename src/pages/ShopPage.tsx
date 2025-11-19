import React from 'react';
import CarCard from '@/components/CarCard';

// Dummy car data for demonstration
const dummyCars = [
  { id: 'car1', name: 'Mercedes-Benz C-Class', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1605559424443-39f268f77395?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'car2', name: 'BMW 3 Series', price: 70.00, imageUrl: 'https://images.unsplash.com/photo-1580273665301-167885566f7f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'car3', name: 'Audi A4', price: 68.00, imageUrl: 'https://images.unsplash.com/photo-1549429718-e7c65636034e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'car4', name: 'Tesla Model 3', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1617799008544-b2586a11e2f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'car5', name: 'Ford Mustang', price: 90.00, imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'car6', name: 'Toyota Camry', price: 55.00, imageUrl: 'https://images.unsplash.com/photo-1568605117036-add40f1efcd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Fleet</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
