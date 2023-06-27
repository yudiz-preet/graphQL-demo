import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavigation = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "darkblue",
        cursor: "pointer",
        textDecoration: "underline",
      }}
      onClick={() => navigate("/")}
    >
      Dashboard
    </div>
  );
};

export default DashboardNavigation;
