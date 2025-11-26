import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  // Restaurant Schema.org structured data
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "BOCADO Berlin",
    alternateName: "Bocado Restaurant & Tapas Bar",
    description:
      "Authentisches spanisches Restaurant und Tapas Bar in Berlin. Genießen Sie traditionelle spanische Küche, Tapas, Weine, Cocktails und mehr in gemütlicher Atmosphäre.",
    image: [
      "https://bocadoberlin.de/logo.png", // Your restaurant logo
      "https://bocadoberlin.de/restaurant-photo.jpg", // Photo of your restaurant interior/exterior
      "https://bocadoberlin.de/food-photo.jpg", // Photo of your food/tapas
    ],
    url: "https://bocadoberlin.de",
    telephone: "+49-30-XXXXXXX", // TODO: Add your actual phone number
    priceRange: "€€",
    servesCuisine: ["Spanish", "Tapas", "Mediterranean"],
    acceptsReservations: true,
    menu: "https://bocadoberlin.de/menu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // TODO: Add your actual street address
      addressLocality: "Berlin",
      addressRegion: "Berlin",
      postalCode: "XXXXX", // TODO: Add your postal code
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.5200", // TODO: Add your actual latitude
      longitude: "13.4050", // TODO: Add your actual longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "17:00", // TODO: Update with your actual opening hours
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "17:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/bocadoberlin", // TODO: Add your actual Facebook page URL
      "https://www.instagram.com/bocadoberlin", // TODO: Add your actual Instagram profile URL
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bocadoberlin.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: "https://bocadoberlin.de/menu",
      },
    ],
  };

  return (
    <Helmet>
      {/* Restaurant Structured Data */}
      <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* Enhanced Meta Tags for SEO */}
      <meta
        name="description"
        content="BOCADO Berlin - Authentisches spanisches Restaurant & Tapas Bar. Genießen Sie traditionelle Tapas, Paella, spanische Weine und Cocktails in Berlin."
      />
      <meta
        name="keywords"
        content="spanisches Restaurant Berlin, Tapas Bar Berlin, spanische Küche, Paella, spanischer Wein, Cocktails Berlin, BOCADO"
      />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="BOCADO Berlin - Spanisches Restaurant & Tapas Bar" />
      <meta
        property="og:description"
        content="Authentische spanische Küche, Tapas, Weine und Cocktails in gemütlicher Atmosphäre. Jetzt reservieren!"
      />
      <meta property="og:url" content="https://bocadoberlin.de" />
      <meta property="og:image" content="https://bocadoberlin.de/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="BOCADO Berlin" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href="https://bocadoberlin.de" />
    </Helmet>
  );
};

export default StructuredData;
