import { useState } from 'react';
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const allCars = [
  {
    id: 'c1',
    name: 'Luxury Sedan',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    pricePerDay: 120,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Mercedes+C-Class',
    features: ['Automatic', 'AC', 'GPS', '4 Seats'],
  },
  {
    id: 'c2',
    name: 'Sports Car',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2022,
    pricePerDay: 250,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Porsche+911',
    features: ['Automatic', 'AC', 'Sport Mode', '2 Seats'],
  },
  {
    id: 'c3',
    name: 'Family SUV',
    make: 'BMW',
    model: 'X5',
    year: 2023,
    pricePerDay: 150,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=BMW+X5',
    features: ['Automatic', 'AC', '7 Seats', 'AWD'],
  },
  {
    id: 'c4',
    name: 'Economy Hatchback',
    make: 'Toyota',
    model: 'Yaris',
    year: 2024,
    pricePerDay: 50,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Toyota+Yaris',
    features: ['Manual', 'AC', '5 Seats', 'Fuel Efficient'],
  },
  {
    id: 'c5',
    name: 'Electric Sedan',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    pricePerDay: 180,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Tesla+Model+3',
    features: ['Automatic', 'EV', 'Autopilot', '5 Seats'],
  },
  {
    id: 'c6',
    name: 'Compact SUV',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2024,
    pricePerDay: 90,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Hyundai+Tucson',
    features: ['Automatic', 'AC', '5 Seats', 'Bluetooth'],
  },
  {
    id: 'c7',
    name: 'Minivan',
    make: 'Honda',
    model: 'Odyssey',
    year: 2023,
    pricePerDay: 130,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Honda+Odyssey',
    features: ['Automatic', 'AC', '8 Seats', 'Family Friendly'],
  },
  {
    id: 'c8',
    name: 'Pickup Truck',
    make: 'Ford',
    model: 'F-150',
    year: 2022,
    pricePerDay: 160,
    imageUrl: 'https://via.placeholder.com/400x300/F0F8FF/333333?text=Ford+F-150',
    features: ['Automatic', '4WD', 'Heavy Duty', '5 Seats'],
  },
];

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMake, setFilterMake] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');

  const filteredCars = allCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMake = filterMake === 'all' || car.make === filterMake;

    const matchesPrice = filterPrice === 'all' ||
                         (filterPrice === '0-100' && car.pricePerDay <= 100) ||
                         (filterPrice === '101-200' && car.pricePerDay > 100 && car.pricePerDay <= 200) ||
                         (filterPrice === '201+' && car.pricePerDay > 200);

    return matchesSearch && matchesMake && matchesPrice;
  });

  const uniqueMakes = ['all', ...new Set(allCars.map(car => car.make))];

  return (
    <div className="container py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Our Fleet</h1>

      {/* Filter and Search Section */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        <Input
          placeholder="Search cars..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="col-span-full md:col-span-1 lg:col-span-2"
        />
        <Select onValueChange={setFilterMake} value={filterMake}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by Make" />
          </SelectTrigger>
          <SelectContent>
            {uniqueMakes.map(make => (
              <SelectItem key={make} value={make}>{make === 'all' ? 'All Makes' : make}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setFilterPrice} value={filterPrice}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-100">$0 - $100 / day</SelectItem>
            <SelectItem value="101-200">$101 - $200 / day</SelectItem>
            <SelectItem value="201+">$201+ / day</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Car Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-muted-foreground">No cars found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
