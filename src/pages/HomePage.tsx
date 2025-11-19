import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarCard from "@/components/CarCard";
import { Link } from 'react-router-dom';

const featuredCars = [
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
];

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <AuroraBackground>
        <div className="relative flex flex-col h-full w-full items-center justify-center p-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Your Journey, Our Cars
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Experience seamless car rentals with a fleet of premium vehicles for every adventure.
          </p>
          <Link to="/shop">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">Explore Our Fleet</Button>
          </Link>
        </div>
      </AuroraBackground>

      {/* Featured Cars Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Vehicles</h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mx-auto"
          >
            <CarouselContent className="-ml-4">
              {featuredCars.map((car, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <CarCard car={car} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose CarRental?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Wide Selection</CardTitle>
                <CardDescription>From economy to luxury, find your perfect ride.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We offer a diverse fleet of well-maintained vehicles to suit every need and budget.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Easy Booking</CardTitle>
                <CardDescription>Rent a car in just a few simple steps.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our intuitive online platform makes booking quick, secure, and hassle-free.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>Always here to help, anytime, anywhere.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our dedicated customer support team is available around the clock for your peace of mind.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
