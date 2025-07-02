import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, IndianRupee } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 24999,
    originalPrice: 32999,
    image: '/placeholder.svg',
    category: 'Electronics',
    rating: 4.8,
    reviews: 324,
    isSale: true,
  },
  {
    id: '2',
    name: 'Designer Leather Jacket',
    price: 49999,
    image: '/placeholder.svg',
    category: 'Fashion',
    rating: 4.9,
    reviews: 156,
    isNew: true,
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    price: 20999,
    originalPrice: 24999,
    image: '/placeholder.svg',
    category: 'Wearables',
    rating: 4.7,
    reviews: 892,
    isSale: true,
  },
  {
    id: '4',
    name: 'Minimalist Backpack',
    price: 7499,
    image: '/placeholder.svg',
    category: 'Accessories',
    rating: 4.6,
    reviews: 203,
  },
  {
    id: '5',
    name: 'Organic Coffee Beans',
    price: 1999,
    image: '/placeholder.svg',
    category: 'Food',
    rating: 4.9,
    reviews: 445,
    isNew: true,
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    price: 4099,
    originalPrice: 5799,
    image: '/placeholder.svg',
    category: 'Electronics',
    rating: 4.5,
    reviews: 127,
    isSale: true,
  },
  {
    id: '7',
    name: 'Artisan Ceramic Mug',
    price: 2699,
    image: '/placeholder.svg',
    category: 'Home',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '8',
    name: 'Professional Camera Lens',
    price: 74999,
    image: '/placeholder.svg',
    category: 'Photography',
    rating: 4.9,
    reviews: 234,
    isNew: true,
  },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(mockProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </Button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-gray-900 flex items-center">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through flex items-center">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full hover-scale"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
