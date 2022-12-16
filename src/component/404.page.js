import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);

  return (
    <div>
      404 Not Found
      <br />
      You are going to be re-routed to homepage in 5 seconds
    </div>
  );
};

export default ErrorPage;
