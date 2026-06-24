import { useNavigate } from "react-router-dom";
import "../App.css";

function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div
      className="meal-card"
      onClick={() => navigate(`/meal/${meal.id}`, { state: meal })}
    >
      <img src={meal.image} alt={meal.name} />
      <h3>{meal.name}</h3>
    </div>
  );
}

export default MealCard;