
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="block text-primary">Perfect Style</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Shop the latest trends with our curated collection of premium products. Quality guaranteed, style delivered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover-scale">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                View Collections
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl p-8 transform rotate-6 hover:rotate-3 transition-transform duration-500">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">Curated with care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
