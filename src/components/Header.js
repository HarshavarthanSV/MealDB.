import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={styles.nav}>
      <h2>🍽️ MealDB</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#FC8019",
    color: "white"
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none"
  }
};

export default Header;