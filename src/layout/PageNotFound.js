import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      404 Page Not Found
      <button class="btn btn-outline-success" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
