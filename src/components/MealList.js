import MealCard from "./MealCard";
import "../App.css";

function MealList({ meals }) {
  return (
    <div className="meal-container">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;