import { useLocation, useNavigate } from "react-router-dom";

function MealDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const meal = location.state;

  if (!meal) return <h2>No Meal Found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>{meal.name}</h1>
      <img src={meal.image} width="300" />

      <h3>🍴 {meal.category}</h3>
      <h3>🔥 {meal.speciality}</h3>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        {meal.description}
      </p>
    </div>
  );
}

export default MealDetail;