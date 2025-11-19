import { useState } from "react";
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
          description: "Baguette with grated Spanish mountain tomato",
          price: "6.50",
        },
        {
          id: "02",
          name: "Olivas Marinadas",
          description: "Marinated mixed olives with fresh herbs",
          price: "6.50",
        },
        {
          id: "03",
          name: "Serrano Gran Reserva",
          description: "Serrano ham aged 3 months",
          price: "7.90",
        },
        {
          id: "04",
          name: "Queso De Cabra",
          description: "Caramelized goat cheese with honey",
          price: "7.90",
        },
        {
          id: "05",
          name: "Queso Manchego",
          description: "Six month aged sheep cheese",
          price: "6.90",
        },
        {
          id: "06",
          name: "Queso De Oveja",
          description: "Oven-baked sheep cheese with herbs, tomatoes, onions & garlic",
          price: "7.50",
        },
        {
          id: "25",
          name: "Plato de BOCADO",
          description: "Culinary journey with various cheese and ham, fruit, olives, jam, honey, nuts",
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
          description: "Small spicy fried peppers with sea salt",
          price: "7.50",
        },
        {
          id: "31",
          name: "Patatas Bravas",
          description: "Fried spicy potato pieces with tomato-chili sauce",
          price: "6.90",
        },
        {
          id: "32",
          name: "Dátiles con y tocino",
          description: "Dates wrapped in bacon",
          price: "7.90",
        },
        {
          id: "33",
          name: "Champignons al ajillo",
          description: "Fried mushrooms with garlic and parsley",
          price: "6.90",
        },
        {
          id: "34",
          name: "Calamares Pequeños",
          description: "Breaded and fried baby calamari with lemon",
          price: "8.90",
        },
        {
          id: "35",
          name: "Gambas a la Tempura con Torzo de Limón",
          description: "Large prawns in tempura batter with fresh lemon",
          price: "7.50",
        },
        {
          id: "36",
          name: "Pulpo a la gallega",
          description: "Grilled octopus with potatoes",
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
          description: "Fresh tomato soup with basil & butter croutons and parmesan",
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
          description: "Mixed salad with cucumber, tomatoes, peppers and olives",
          price: "6.90",
        },
        {
          id: "57",
          name: "Ensalada con Queso de Cabra",
          description:
            "Mixed salad with glazed & baked honey goat cheese, tomatoes, cucumber, peppers, corn and olives in house dressing",
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
          description: "Corn tortilla chips, baked with cheddar-mozzarella cheese, with salsa dip",
          price: "10.90",
        },
        {
          id: "62",
          name: "Nachos BOCADO",
          description:
            "Corn tortilla chips with onions, tomatoes, cilantro, baked with cheddar-mozzarella cheese, with sour cream, guacamole",
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
          description: "Classic Spanish rice dish with saffron, fresh vegetables, seafood and 2 large prawns",
          price: "17.90",
        },
        {
          id: "71",
          name: "Gambas Al ajillo",
          description: "5 large prawns in garlic-white wine-oil, parsley and fresh chili peppers",
          price: "14.90",
        },
        {
          id: "72",
          name: "Fajitas de Verduras",
          description:
            "Various vegetables with onions, peppers and garlic in a hot pan, with salsa, guacamole, sour cream and 3 tortilla breads",
          price: "16.90",
        },
        {
          id: "73",
          name: "Fajitas con Pollo",
          description:
            "Chicken breast cubes with onions, peppers and garlic in a hot pan, with salsa, guacamole, sour cream and 3 tortilla breads",
          price: "17.90",
        },
        {
          id: "78",
          name: "Mango con Pollo",
          description:
            "Fried chicken breast cubes in mango cream sauce, with walnuts and almonds, served with Spanish rice",
          price: "18.90",
        },
        {
          id: "80",
          name: "Steak A la BOCADO",
          description:
            "220g grilled Argentine rump steak with herb butter, vegetables, roasted onions, rosemary potatoes and salad",
          price: "24.90",
        },
        {
          id: "81",
          name: "Filete de lomo de Cerdo",
          description:
            "2 pieces grilled pork loin steak in mushroom cream sauce with Spanish potato pieces and salad",
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
          description: "5 homemade breaded chicken breast fillets, with fries",
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
          description: "Spanish creme brulee, covered with a firm caramel layer",
          price: "7.90",
        },
        {
          id: "111",
          name: "Churros con chocolate",
          description: "Classic Spanish pastry, with chocolate sauce",
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

  // const handleAddToCart = (item) => {
  //   // TODO: Implement cart functionality
  //   console.log("Added to cart:", item);
  // };

  const filteredMenu = activeCategory === "all" ? Object.values(menuData) : [menuData[activeCategory]];

  return (
    <div className="min-h-screen bg-[#134e4a]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#134e4a] to-[#0f3a36] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#feaa3f] text-white shadow-lg"
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
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className="text-2xl font-bold text-[#feaa3f]">€{item.price}</span>
                  </div>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{item.description}</p>
                  {/* <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-[#feaa3f] hover:bg-[#fbbf24] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info Footer */}
    </div>
  );
};

export default Menu;
