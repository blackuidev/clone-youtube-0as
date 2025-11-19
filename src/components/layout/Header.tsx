import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast'; // Assuming useToast is available

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: 'Logged Out',
        description: 'You have been successfully logged out.',
      });
      navigate('/login');
    } catch (error: any) {
      toast({
        title: 'Logout Failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-lg font-bold">
            CarRentals
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/shop" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {totalCartItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                {totalCartItems}
              </Badge>
            )}
          </Link>

          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${currentUser.email}`} alt="@shadcn" />
                    <AvatarFallback>{currentUser.email ? currentUser.email[0].toUpperCase() : 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUser.displayName || currentUser.email}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {currentUser.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                <Link to="/" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                  Home
                </Link>
                <Link to="/shop" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                  Shop
                </Link>
                <Link to="/about" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                  About
                </Link>
                {currentUser ? (
                  <>
                    <Link to="/profile" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                      Profile
                    </Link>
                    <Button onClick={() => { handleLogout(); document.getElementById('sheet-close')?.click(); }} variant="outline">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                      Login
                    </Link>
                    <Link to="/register" className="text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                      Sign Up
                    </Link>
                  </>
                )}
                <Link to="/cart" className="relative flex items-center gap-2 text-lg font-bold" onClick={() => document.getElementById('sheet-close')?.click()}>
                  <ShoppingCart className="h-5 w-5" /> Cart
                  {totalCartItems > 0 && (
                    <Badge className="ml-1 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                      {totalCartItems}
                    </Badge>
                  )}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
