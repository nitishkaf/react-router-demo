import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div>
      homepage
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Homepage;
