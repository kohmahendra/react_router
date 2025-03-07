import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const MyRouteError = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <div class="alert alert-danger" role="alert">
        An error odccured {error.message}.
      </div>
      <button class="btn btn-outline-success" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default MyRouteError;
