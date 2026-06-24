import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import MealList from "./components/MealList";
import SearchBar from "./components/SearchBar";
import MealDetail from "./components/MealDetail";
import mealsData from "./components/meals"; // ✅ IMPORTANT

function App() {
  const [search, setSearch] = useState("");

  // 🔥 PREFIX SEARCH (ch → Chicken)
  const filteredMeals = mealsData.filter((meal) =>
    meal.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar search={search} setSearch={setSearch} />
              <MealList meals={filteredMeals} />
            </>
          }
        />

        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;