import React from "react";
import "./ColumnGrid.scss";

interface ColumngridProps {
  icon: any;
  title: string;
  description: string;
}
const ColumnGrid: React.FC<ColumngridProps> = ({
  icon,
  title,
  description,
}: ColumngridProps) => {
  return (
    <div className="column-grid">
      <div className="column-grid-container">
        <div className="column-grid-image">{icon}</div>
        <h4 className="column-grid-title">{title}</h4>
        <p className="column-grid-description">{description}</p>
      </div>
    </div>
  );
};

export default ColumnGrid;
