import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default About;
