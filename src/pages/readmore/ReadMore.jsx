import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ReadMore.css";
import TriptList from "../../components/TriptList";

function ReadMore() {
  const { id } = useParams(); // Get the ID from URL
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();

        // 🔹 Fix: Ensure correct comparison (id is a string in params)
        const product = data.find((item) => String(item.id) === id);

        if (!product) {
          throw new Error("Product not found");
        }

        setTrip(product);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // 🔹 Make sure effect runs when ID changes

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;
  if (!trip) return <h3>No product found</h3>;

  return (
    <div className="read_container">
      <img className="fade_img" src="\items\images\cs_bg.png" alt={trip.name} />
      <div className="link-details">
      <Link to="/about">Back to news</Link>
        <h2>{trip.name}</h2>
        <div className="date">Date: {trip.date}</div>
        <img src={trip.image} alt={trip.name} />
        <div className="desc_container">
          <p>{trip.description}</p>
        </div>
      </div>
      {/* <TriptList /> */}
    </div>
  );
}

export default ReadMore;
