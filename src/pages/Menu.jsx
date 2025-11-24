import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MdRestaurant, MdLocalBar } from "react-icons/md";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("food"); // "food" or "drinks"
  const [activeCategory, setActiveCategory] = useState("all");
  const [foodData, setFoodData] = useState(null);
  const [drinksData, setDrinksData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch JSON data from public folder
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);

        // Fetch both JSON files from public folder
        const [foodResponse, drinksResponse] = await Promise.all([
          fetch("/foodData.json"),
          fetch("/drinksData.json"),
        ]);

        if (!foodResponse.ok || !drinksResponse.ok) {
          throw new Error("Failed to fetch menu data");
        }

        const food = await foodResponse.json();
        const drinks = await drinksResponse.json();

        setFoodData(food);
        setDrinksData(drinks);
        setLoading(false);
      } catch (err) {
        console.error("Error loading menu data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const foodCategories = [
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

  const drinksCategories = [
    { id: "all", name: "Alles" },
    { id: "offeneWeine", name: "Offene Weine" },
    { id: "flascheWein", name: "Flaschenwein" },
    { id: "spanischSpezial", name: "Spanisch Spezial" },
    { id: "bier", name: "Bier" },
    { id: "cocktails", name: "Cocktails" },
    { id: "alkoholfreieGetranke", name: "Alkoholfrei" },
    { id: "heisseGetranke", name: "Heiße Getränke" },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveCategory("all");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#134e4a] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#feaa3f] mx-auto mb-4"></div>
          <p className="text-white text-xl">Menü wird geladen...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#134e4a] flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Fehler beim Laden der Speisekarte</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  const currentData = activeTab === "food" ? foodData : drinksData;
  const currentCategories = activeTab === "food" ? foodCategories : drinksCategories;
  const filteredMenu = activeCategory === "all" ? Object.values(currentData) : [currentData[activeCategory]];

  return (
    <>
      <Helmet>
        <title>Speisekarte - BOCADO Berlin</title>
        <meta
          name="description"
          content="Entdecken Sie die vielfältige Speisekarte von BOCADO Berlin mit authentischen spanischen Tapas, Spezialitäten, Weinen, Bieren und Cocktails."
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

        {/* Tab Switcher - Food / Drinks */}
        <div className="bg-[#0f3a36] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4 py-4">
              <button
                onClick={() => handleTabChange("food")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === "food"
                    ? "bg-[#feaa3f] text-white shadow-lg scale-110"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
              >
                <MdRestaurant className="text-2xl" />
                Essen
              </button>
              <button
                onClick={() => handleTabChange("drinks")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === "drinks"
                    ? "bg-[#feaa3f] text-white shadow-lg scale-110"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
              >
                <MdLocalBar className="text-2xl" />
                Getränke
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-0 bg-[#134e4a] shadow-md z-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
              {currentCategories.map((category) => (
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
