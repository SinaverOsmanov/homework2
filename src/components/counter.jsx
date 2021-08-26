import React from "react";

export function Counter({
  value,
  name,
  id,
  onDecrement,
  onIncrement,
  onDelete,
}) {
  const formValue = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div>
      <h4>{name}</h4>
      <span
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
        className={getBadgeClasses()}
      >
        {formValue()}
      </span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
