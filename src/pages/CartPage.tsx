import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4 text-center">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Your Cart is Empty</CardTitle>
            <CardDescription>Looks like you haven't added anything to your cart yet.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/shop">
              <Button>Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-120px)]">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      <Card className="mb-6">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-20 text-center mx-auto"
                    />
                  </TableCell>
                  <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="flex justify-end items-center space-x-4 mb-6">
        <h2 className="text-2xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
        <Button onClick={clearCart} variant="outline">Clear Cart</Button>
        <Button>Proceed to Checkout</Button> {/* Placeholder for checkout */}
      </div>
    </div>
  );
};

export default CartPage;
