import { Link } from "react-router-dom";
import "./Product.css";

export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Categories", to: "/categories" },
  ];

  return (
    <div className="nav">
      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{ margin: "10px" }}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
