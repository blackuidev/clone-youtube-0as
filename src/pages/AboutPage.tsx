import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-5xl font-bold text-center mb-12">About CarRental</h1>

      <section className="mb-16">
        <Card className="p-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Our Mission</CardTitle>
            <CardDescription className="text-lg">Driving Your Adventures Forward</CardDescription>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground leading-relaxed">
            <p className="mb-4">At CarRental, we believe that every journey should be as enjoyable and stress-free as the destination itself. Our mission is to provide a seamless, reliable, and affordable car rental experience, empowering our customers to explore the world with confidence and comfort.</p>
            <p>We are committed to offering a diverse fleet of high-quality vehicles, exceptional customer service, and innovative solutions to meet the evolving needs of modern travelers.</p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Customer Focus</CardTitle>
              <CardDescription>Your satisfaction is our priority.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We go the extra mile to understand and fulfill our customers' needs, ensuring a pleasant and memorable rental experience every time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
              <CardDescription>Safe and dependable journeys.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Our fleet is meticulously maintained and regularly inspected to guarantee the highest standards of safety and performance.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
              <CardDescription>Embracing the future of travel.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We continuously seek new technologies and solutions to enhance our services, from booking convenience to in-car experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/F0F8FF/333333?text=JD" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/F0F8FF/333333?text=JS" alt="Jane Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-sm text-muted-foreground">Chief Operating Officer</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/F0F8FF/333333?text=PM" alt="Peter Miles" />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Peter Miles</h3>
            <p className="text-sm text-muted-foreground">Head of Technology</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="https://via.placeholder.com/150/F0F8FF/333333?text=AL" alt="Alice Lee" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Alice Lee</h3>
            <p className="text-sm text-muted-foreground">Customer Relations Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
