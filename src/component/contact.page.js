import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div>
      contact
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
};

export default Contact;
