import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center p-4">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button size="lg">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
