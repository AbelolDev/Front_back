import React from "react";

/*Usar solo en lo relacionado a Admin */
const DashboardCard = ({ color, icon, value, label }) => {
  return (
    <div className="col s12 m6 l3">
      <div className={`card-panel ${color} white-text center-align`}>
        <i className="material-icons large">{icon}</i>
        <h5>{value}</h5>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
