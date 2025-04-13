import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../services/api";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // JSON dosyasındaki kampanya verilerini al
    fetch("/data/campaigns.json")
      .then((response) => response.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error("Kampanya verileri alınamadı:", error));
  }, []);

  useEffect(() => {
    fetchCategories().then(setCategories);
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    let updated = [...products];
    if (selectedCategory !== "all") {
      updated = updated.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(updated);
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="home-container">
      <ProductSlider campaigns={campaigns} />
      <div className="home-filter-bar">
        <form className="search-form">
          <div className="search-group">
            <select
              id="categories"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="search-select"
            >
              <option value="all">Tüm Kategoriler</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="capitalize">
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="search"
              id="search-dropdown"
              className="search-input"
              placeholder="Ürün ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
        </form>
      </div>

      <div className="product-list-container">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h2>Üzgünüz!</h2>
            <p>Aramanıza veya seçtiğiniz kategoriye ait ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
