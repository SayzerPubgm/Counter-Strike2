import { NavLink, useRouteError } from "react-router-dom";

function PageNotFound() {
  const error = useRouteError()

  if(error.status === 404) {
    return (
      <div className="pageNotFound-container">
      <video className="background-video" autoPlay loop muted>
        <source src='public\items\video\cs.mp4' type="video/mp4" />
      </video>
      <div className="content">
        <h1>Page Not Found 404</h1>
      </div>
      <NavLink to="/">Home Page</NavLink>
    </div>
    );
  } return (
    <div className="pageNotFound-container">
      <h1>Oops Something went wrong</h1>
      <p className="error-message">
        {error.message}
      </p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PageNotFound;
