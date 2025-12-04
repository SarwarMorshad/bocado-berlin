import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Willkommen bei BOCADO Berlin",
      subtitle: "Erleben Sie authentische spanische Küche in modernem Ambiente",
      image: "https://i.postimg.cc/pr5P12Lh/hero-1.jpg", // Replace with your image path
      gradient: "from-[#134e4a] via-[#0f3a36] to-[#134e4a]",
      cta1: { text: "Menü ansehen", link: "/menu" },
      cta2: { text: "Tisch reservieren", link: "/reservation" },
    },
    {
      id: 2,
      title: "Authentische spanische Tapas",
      subtitle: "Kulinarische Reise mit traditionellen Aromen und frischen Zutaten",
      image: "https://i.postimg.cc/DZM2gWFt/hero-2.jpg", // Replace with your image path
      gradient: "from-[#0f3a36] via-[#134e4a] to-[#0f3a36]",
      cta1: { text: "Einen Tisch Buchen", link: "/reservation" },
      cta2: { text: "Gerichte entdecken", link: "/menu" },
    },
    {
      id: 3,
      title: "Premium Weine & Cocktails",
      subtitle: "Perfekt abgestimmte Getränke für Ihr kulinarisches Erlebnis",
      image: "https://i.postimg.cc/brSqFzwf/hero-3.jpg", // Replace with your image path
      gradient: "from-[#134e4a] via-[#1a5550] to-[#134e4a]",
      cta1: { text: "Menü ansehen", link: "/menu" },
      cta2: { text: "Tisch Reservieren", link: "/reservation" },
    },
  ];

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-[#feaa3f]",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background with Gradient - You can add image here */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
              {/* Optional: Add background image */}
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            </div>

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
              <div className="text-center text-white space-y-6 animate-fade-in">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-[#feaa3f] block mt-2">
                    {slide.title.split(" ").slice(-2).join(" ")}
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <Link
                    to={slide.cta1.link}
                    className="bg-[#feaa3f] hover:bg-[#fbbf24] text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                  >
                    {slide.cta1.text}
                  </Link>
                  <Link
                    to={slide.cta2.link}
                    className="border-2 border-white hover:bg-[#fbbf24] hover:border-[#fbbf24] hover:text-white text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all duration-200 w-full sm:w-auto"
                  >
                    {slide.cta2.text}
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                className="w-full h-16 fill-current text-[#134e4a]"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Navigation Styles */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #feaa3f;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(254, 170, 63, 0.9);
          color: white;
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: #feaa3f !important;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
