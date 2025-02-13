import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ReadMore.css";
import { useFetch } from "../../components/hooks/useFetch";

function ReadMore() {
  const { id } = useParams(); // Get the ID from URL
  const { data: trips, isPending, error } = useFetch("https://raw.githubusercontent.com/SayzerPubgm/data_cs2/main/public/data.json"); // Use the useFetch hook

  // Find the trip based on the ID
  const trip = trips.find((item) => String(item.id) === id);

  if (isPending) return <h3>Loading...</h3>;
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
    </div>
  );
}

export default ReadMore;