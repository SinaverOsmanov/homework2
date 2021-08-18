import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const tags = ["tag1", "tag2", "tag3"];
  const formCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (productId) => {
    console.log(productId);
    if (count) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {tags.length > 0 ? (
        tags.map((t, i) => <li key={i}>{t}</li>)
      ) : (
        <span>Теги не найдены</span>
      )}
      <span
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
        className={getBageClasses()}
      >
        {formCount()}
      </span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </>
  );
}
