import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuData = {
    tapasFrias: {
      title: "Tapas Frías - Kalte Tapas",
      items: [
        {
          id: "01",
          name: "Pan Con Tomate",
          description: "Baguette mit geriebener spanischer Bergtomate",
          price: "6.50",
        },
        {
          id: "02",
          name: "Olivas Marinadas",
          description: "Marinierte gemischte Oliven mit frischen Kräutern",
          price: "6.50",
        },
        {
          id: "03",
          name: "Serrano Gran Reserva",
          description: "Serrano schinken 3 Monate gereift",
          price: "7.90",
        },
        {
          id: "04",
          name: "Queso De Cabra",
          description: "Karamelisierter Ziegenkäse mit Honig",
          price: "7.90",
        },
        {
          id: "05",
          name: "Queso Manchego",
          description: "Sechs Monate gereifter Schafskäse",
          price: "6.90",
        },
        {
          id: "06",
          name: "Queso De Oveja",
          description: "Im Ofen gebackener Schafskäse mit Kräutern, Tomaten, Zwiebeln & Knoblauch",
          price: "7.50",
        },
        {
          id: "25",
          name: "Plato de BOCADO",
          description:
            "Kulinarische Reise mit verschieden Käse und Schinkensorte, Obst, Oliven, Marmelade, Honig, Nüssen",
          price: "24.90",
        },
      ],
    },
    tapasCalientes: {
      title: "Tapas Calientes - Warme Tapas",
      items: [
        {
          id: "30",
          name: "Pimientos de Padrón",
          description: "Kleine pikante frittierte Paprikas mit Meersalz",
          price: "7.50",
        },
        {
          id: "31",
          name: "Patatas Bravas",
          description: "Frittierte pikante Kartoffelstücke mit Tomaten - Chili - Sauce",
          price: "6.90",
        },
        {
          id: "32",
          name: "Dátiles con y tocino",
          description: "Datteln im Speckmantel",
          price: "7.90",
        },
        {
          id: "33",
          name: "Champignons al ajillo",
          description: "Gebratene Champignons mit Knoblauch und Petersillien",
          price: "6.90",
        },
        {
          id: "34",
          name: "Calamares Pequeños",
          description: "Panierte und frittierte Baby - Calamares mit Zitrone",
          price: "8.90",
        },
        {
          id: "35",
          name: "Gambas a la Tempura con Torzo de Limón",
          description: "Große Garnelen im Tempurateig mit frischer Zitrone",
          price: "7.50",
        },
        {
          id: "36",
          name: "Pulpo a la gallega",
          description: "Gegrillter Pulpo mit Kartoffeln",
          price: "9.90",
        },
      ],
    },
    sopas: {
      title: "Sopas - Souppen",
      items: [
        {
          id: "51",
          name: "Sopa de Tomate",
          description: "Frischen Tomaten Suppe mit Basilikum & Butter- Croutons und Parmesan",
          price: "6.90",
        },
      ],
    },
    ensaladas: {
      title: "Ensalada - Salate",
      items: [
        {
          id: "55",
          name: "Ensalada Mixta",
          description: "Gemischter Salat mit Gurke, Tomaten, Paprika und Oliven",
          price: "6.90",
        },
        {
          id: "57",
          name: "Ensalada con Queso de Cabra",
          description:
            "Gemischter Salat mit glasiertem & gebackenem Honig-Ziegenkäse,Tomaten, Gurke, Paprika, Mais und Oliven in Hausdressing",
          price: "13.90",
        },
      ],
    },
    nachos: {
      title: "Nachos",
      items: [
        {
          id: "61",
          name: "Nachos con queso",
          description: "MaisTortilla Chips, überbacken mit Cheddar-Mozzarella Käse, dazu Salsa Dip",
          price: "10.90",
        },
        {
          id: "62",
          name: "Nachos BOCADO",
          description:
            "MaisTortilla Chips mit Zwiebeln, Tomaten, Koriander, überbacken mit Cheddar-Mozzarella Käse, dazu Sauerrahm, Guacamole",
          price: "12.90",
        },
      ],
    },
    especialidades: {
      title: "Especialidades - Speczialitäten",
      items: [
        {
          id: "70",
          name: "Paella de Mariscos",
          description:
            "Klassisches, spanisches Reisgericht mit Safran, frischem Gemüse, Meeresfrüchten und 2 Großgarnelen",
          price: "17.90",
        },
        {
          id: "71",
          name: "Gambas Al ajillo",
          description:
            "5 Stück Größen garnelen in Knoblauch - Weißwein-Öl, Petersilie und frischen Chilischoten",
          price: "14.90",
        },
        {
          id: "72",
          name: "Fajitas de Verduras",
          description:
            "Verschieden Gemüse mit Zwiebeln, Paprika und Knoblauch in einer heißen Pfanne, dazu Salsa, Guacamole, Sauerrahm und 3 Tortillabrote",
          price: "16.90",
        },
        {
          id: "73",
          name: "Fajitas con Pollo",
          description:
            "Hähnchenbrustwürfel mit Zwiebeln, Paprika und Knoblauch in einer heißen Pfanne, dazu Salsa, Guacamole, Sauerrahm und 3 Tortillabrote",
          price: "17.90",
        },
        {
          id: "78",
          name: "Mango con Pollo",
          description:
            "Gebratene Hähnchenbrustwürfel in Mango-Sahnesauce, mit Walnüssen und Mandeln, serviert mit Spanischem Reis",
          price: "18.90",
        },
        {
          id: "80",
          name: "Steak A la BOCADO",
          description:
            "220gm gegrilltes Argentinisches Rumpsteak mit Kräuterbutter, Gemüse, gerösteten Zwiebeln, Rosmarinkartoffeln und Salatbeilage",
          price: "24.90",
        },
        {
          id: "81",
          name: "Filete de lomo de Cerdo",
          description:
            "2 Stück gegrilltes Schweinerückensteak in Champignon-sahnesauce mit spanischen Kartoffelstücken und Salatbeilage",
          price: "18.90",
        },
      ],
    },
    kids: {
      title: "Para niños - Für Kinder",
      items: [
        {
          id: "100",
          name: "Nuggets de Pollo",
          description: "5 Hausgemachte Hähnchenbrustfilet paniert, mit Pommes",
          price: "8.90",
        },
      ],
    },
    postres: {
      title: "Postres - Nachspeisen",
      items: [
        {
          id: "110",
          name: "Crema Catalan",
          description: "Spanische Creme Brulee,\nmit einer festen Karamellschicht überzogen.",
          price: "7.90",
        },
        {
          id: "111",
          name: "Churros con chocolate",
          description: "Klassisches Spanisches Gebäck, dazu Schokoladensoße",
          price: "8.90",
        },
      ],
    },
  };

  const categories = [
    { id: "all", name: "Alles" },
    { id: "tapasFrias", name: "Kalte Tapas" },
    { id: "tapasCalientes", name: "Warme Tapas" },
    { id: "sopas", name: "Suppen" },
    { id: "ensaladas", name: "Salate" },
    { id: "nachos", name: "Nachos" },
    { id: "especialidades", name: "Spezialitäten" },
    { id: "kids", name: "Kindermenü" },
    { id: "postres", name: "Nachspeisen" },
  ];

  const filteredMenu = activeCategory === "all" ? Object.values(menuData) : [menuData[activeCategory]];

  return (
    <>
      <Helmet>
        <title>Speisekarte</title>
        <meta
          name="description"
          content="Entdecken Sie die vielfältige Speisekarte von BOCADO Berlin mit authentischen spanischen Tapas, Spezialitäten und mehr."
        />
      </Helmet>
      <div className="min-h-screen bg-[#134e4a]">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#134e4a] to-[#0f3a36] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Menú</h1>
            <p className="text-xl text-gray-200">Restaurant · Tapasbar</p>
            <p className="text-3xl mt-2 text-primary">Especial de gran inauguración</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-0 bg-[#134e4a] shadow-md z-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-[#feaa3f] text-white shadow-lg scale-105"
                      : "bg-white/10 text-gray-200 hover:bg-[#fbbf24] hover:text-white border border-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#134e4a]">
          {filteredMenu.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-[#feaa3f] pb-2">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={item.id}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 p-6 transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${itemIdx * 50}ms`, animationFillMode: "forwards" }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <span className="text-2xl font-bold text-[#feaa3f]">€{item.price}</span>
                    </div>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
