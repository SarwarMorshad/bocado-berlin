import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background with Gradient Placeholder - Replace with your image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#15322b] via-teal-900 to-[#15322b]">
        {/*
          To use your own image, replace the div above with:
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
          Or use Tailwind:
          <div className="absolute inset-0 bg-[url('/path/to/image.jpg')] bg-cover bg-center">
        */}
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center text-white space-y-6 animate-fade-in">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Welcome to <span className="text-primary block mt-2">BOCADO Berlin</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Experience authentic flavors and culinary excellence in the heart of Berlin
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              to="/menu"
              className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              View Menu
            </Link>
            <Link
              to="/about"
              className="border-2 border-white hover:bg-accent hover:text-[#15322b] text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all duration-200 w-full sm:w-auto"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave (Optional) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 fill-current text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
