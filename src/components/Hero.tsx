
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="fruit-bg min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Advanced Fruit Ripeness Detection
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Leverage AI to instantly detect the ripeness of fruits with high accuracy. 
            Optimize your harvest time, reduce waste, and ensure premium quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="animate-fade-in">
              <Link to="/dashboard">Try Detection</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="animate-fade-in text-white border-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
