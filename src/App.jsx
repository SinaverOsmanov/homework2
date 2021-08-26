import { Counters } from "./components/counters";
import { NavBar } from "./components/navBar";
import { useState } from "react";

function App() {
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

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
