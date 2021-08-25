import React, { useState } from "react";
import { Counter } from "./counter";

export function Counters() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 4, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (counterId) => {
    const newCounters = counters.map((c) => {
      return counterId === c.id ? { ...c, value: c.value + 1 } : c;
    });

    setCounters(newCounters);
  };
  const handleDecrement = (counterId) => {
    const counter = counters.find((c) => c.id === counterId);

    if (counter.value > 0) {
      const newCounters = counters.map((c) => {
        return counterId === c.id ? { ...c, value: c.value - 1 } : c;
      });
      setCounters(newCounters);
    }
  };

  console.log(counters);

  return (
    <div>
      <button
        className="button btn-primary btn-styleMedia m2"
        onClick={handleReset}
      >
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          {...counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}
