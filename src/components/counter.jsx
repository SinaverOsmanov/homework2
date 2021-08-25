import React from "react";

export function Counter(props) {
  const formValue = () => {
    return props.value === 0 ? "Zero" : props.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div>
      <h4>{props.name}</h4>
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
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
