import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  car: {
    id: string;
    name: string;
    make: string;
    model: string;
    year: number;
    pricePerDay: number;
    imageUrl: string;
    features: string[];
  };
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{car.make} {car.model}</CardTitle>
        <CardDescription>{car.year}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.map((feature, index) => (
            <Badge key={index} variant="secondary">{feature}</Badge>
          ))}
        </div>
        <p className="text-2xl font-bold text-primary">${car.pricePerDay}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Rent Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
